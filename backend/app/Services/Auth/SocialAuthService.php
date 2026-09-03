<?php

namespace App\Services\Auth;

use App\Models\User;

class SocialAuthService
{
    public function handleGithubUser($githubUser)
    {
        $provider = 'github';
        $providerId = $githubUser->getId();

        $user = User::where('provider', $provider)
                    ->where('provider_id', $providerId)
                    ->first();

        if ($user) {
            return $user;
        }

        $user = User::where('email', $githubUser->getEmail())->first();

        if (!$user) {
            $user = User::create([
                'name' => $githubUser->getName() ?? $githubUser->getNickname(),
                'email' => $githubUser->getEmail(),
                'provider' => $provider,
                'provider_id' => $providerId,
            ]);
        }

        return $user;
    }
}