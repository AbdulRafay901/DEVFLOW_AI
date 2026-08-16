<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\EmailVerificationService;

class EmailVerificationController extends Controller
{
    protected EmailVerificationService $inject;

    function __construct(EmailVerificationService $inject){
        $this->inject = $inject;
    }
   
    public function verify(string $id, string $hash)
{
    $this->inject->verify($id, $hash);

    return redirect(
        config('app.frontend_url') . '/login'
    );
}

    public function resendCode(Request $request){
        $response = $this->inject->resendCode($request->user());

        if($response === 'already_verified'){
            return response()->json([
                "status" => false,
                "message" => $response
            ]);
        }

        return response()->json([
            "status" => true,
            "message" => $response
        ]);
    }

}
