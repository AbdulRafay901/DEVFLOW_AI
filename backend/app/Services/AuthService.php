<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthService
{
    
    public function register($data){
        $user = User::create([
            'name' => $data['fullName'],
            'email' => $data['email'],
            'password' => Hash::make($data['password'])
        ]);

        return response()->json([
             'success' => true,
             'message' => 'User registered successfully',
             'data' => [
                  'user' => $user
             ]
        ]);
    }
}
