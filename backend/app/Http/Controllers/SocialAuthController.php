<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;
use App\Services\Auth\SocialAuthService;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

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
}
