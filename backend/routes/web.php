<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmailVerificationController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/email/verify/{id}/{hash}', [EmailVerificationController::class,'verify'])
->middleware('signed')
->name('verification.verify');