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
         $response = $this->authService->register($request->all());

         return response()->json([
            "data" => $response
         ]);
    }
}