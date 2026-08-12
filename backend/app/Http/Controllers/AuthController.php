<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\registerRequest;
use App\Services\AuthService;

class AuthController extends Controller
{

    protected AuthService $authService;

    public function __construct(AuthService $authService){

       $this->authService = $authService;

    }


    public function register(registerRequest $request){
         $user = $this->authService->register($request->validated());

         return response()->json([
              "status" => true,
              "message" => 'User registered successfully',
              'data' => [
                   'user' => $user,
               ],
         ], 201);
    }
}