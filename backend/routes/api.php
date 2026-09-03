<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\SocialAuthController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register']);

Route::post('/resendCode', [EmailVerificationController::class, 'resendCode'])
->middleware('auth:sanctum', 'throttle:6,1');

Route::post('/login', [AuthController::class, 'login']);

// OAUTH -------------- Start

Route::prefix('auth/github')->group(function () {
    Route::get('/redirect', [SocialAuthController::class, 'redirect']);
    Route::get('/callback', [SocialAuthController::class, 'callback']);
});

// OAUTH -------------- End






