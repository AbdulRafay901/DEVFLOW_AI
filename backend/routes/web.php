<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/email/verify/{id}/{hash}', function (
    string $id,
    string $hash
) {
    $user = User::findOrFail($id);

    abort_unless(
        hash_equals($hash, sha1($user->getEmailForVerification())),
        403
    );

    if (!$user->hasVerifiedEmail()) {
        $user->markEmailAsVerified();
    }

    return redirect(
        config('app.frontend_url') . '/login'
    );
})
->middleware('signed')
->name('verification.verify');