<?php

namespace App\Services;
use App\Models\User;

class EmailVerificationService
{
   
    public function verify(string $id, string $hash): void
{
    $user = User::findOrFail($id);

    abort_unless(
        hash_equals(
            $hash,
            sha1($user->getEmailForVerification())
        ),
        403
    );

    if (!$user->hasVerifiedEmail()) {
        $user->markEmailAsVerified();
    }
}

    public function resendCode(User $user)
{
     if($user->hasVerifiedEmail()) {
         return 'already_verified';
     }

     $user->sendEmailVerificationNotification();
     
     return 'sent';
}

}
