<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthService
{
    
    public function register(array $data){
        $user = User::create([
            'name' => $data['fullName'],
            'email' => $data['email'],
            'password' => Hash::make($data['password'])
        ]);


        $user->sendEmailVerificationNotification();

        return $user;

    }

    public function login(array $data){

        $credentials = $data;

        if(!Auth::attempt($credentials)){
            return false;
        }

        return Auth::user();
    }

}
