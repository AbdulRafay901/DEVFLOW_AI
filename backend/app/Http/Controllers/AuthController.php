<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\registerRequest;
use App\Services\AuthService;
use App\Http\Requests\login;

class AuthController extends Controller
{

    protected AuthService $authService;

    public function __construct(AuthService $authService){

       $this->authService = $authService;

    }


    public function register(registerRequest $request){
         $user = $this->authService->register($request->validated());

         $token = $user->createToken('auth-token')->plainTextToken;

         return response()->json([
              "status" => true,
              "message" => 'User registered successfully',
              'data' => [
                   'user' => $user,
                   'token' => $token
               ],
         ], 201);
    }

    public function login(login $request){
      $data = $this->authService->login($request->validated());

      if(!$data){
         return response()->json([
             "status" => false,
             "message" => "invalid credentials"
         ]);
      }

      $token = $data->createToken('auth-token')->plainTextToken;

      return response()->json([
          "status" => true,
          "user" => $data,
          "token" => $token
      ]);
    }
}