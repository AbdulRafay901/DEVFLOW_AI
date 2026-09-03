<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;
use App\Services\Auth\SocialAuthService;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use App\Models\User;

class SocialAuthController extends Controller
{
    public function __construct(
        private SocialAuthService $socialAuthService
    ) {}

    public function redirect()
    {
        return Socialite::driver('github')
            ->scopes(['user:email'])
            ->redirect();
    }

    public function callback()
{
    $githubUser = Socialite::driver('github')->user();

    $user = $this->socialAuthService->handleGithubUser($githubUser);

    $code = Str::random(64);

    Cache::put(
        'oauth_login:' . $code,
        [
            'user_id' => $user->id,
        ],
        now()->addMinute()
    );

    return redirect(
        config('app.frontend_url') . '/oauth/callback?code=' . $code
    );
}

    public function exchange(Request $request)
{
    $request->validate([
        'code' => ['required', 'string'],
    ]);

    $data = Cache::pull('oauth_login:' . $request->code);

    if (!$data) {
        return response()->json([
            'message' => 'Invalid or expired OAuth code'
        ], 401);
    }

    $user = User::findOrFail($data['user_id']);

    $token = $user->createToken('auth-token')->plainTextToken;

    return response()->json([
        'message' => 'Login successful',
        'token' => $token,
        'user' => $user,
    ]);
}
}
