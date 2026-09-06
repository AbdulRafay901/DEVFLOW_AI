<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\SocialAuthController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/email/verify/{id}/{hash}', [EmailVerificationController::class,'verify'])->middleware('signed')
->name('verification.verify');

// OAUth Github Routes ---------- Start

Route::prefix('auth/github')->group(function () {
    Route::get('/redirect', [SocialAuthController::class, 'redirect']);
    Route::get('/callback', [SocialAuthController::class, 'callback']);
});

// OAUth Github Routes ---------- End

// OAUth Google Routes ---------- Start

Route::prefix('auth/google')->group(function () {
    Route::get('/redirect', [SocialAuthController::class, 'googleRedirect']);
    Route::get('/callback', [SocialAuthController::class, 'googleCallback']);
});

// OAUth Google Routes ---------- End