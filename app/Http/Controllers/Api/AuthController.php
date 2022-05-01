<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterUserRequest $request)
    {
        $user = User::updateOrCreate([
            'email' => $request->email
        ],[
            'name' => $request->name,
            'password' => Hash::make($request->password)
        ]);
        $token = $user->createToken('login-token');
        $data['user'] = $user;
        $data['token'] = explode("|", $token->plainTextToken)[1];
        
        return $this->sendResponse($data,"Registration successfull.");
    }
    
    public function login(Request $request)
    {
        $data = $request->only(['email','password']);
        if(Auth::attempt($data)){
            $user = User::where('email', $request->email)->first();

            $token = $user->createToken('login-token');
            $data['user'] = $user;
            $data['token'] = explode("|", $token->plainTextToken)[1];

            return $this->sendResponse($data,"Login successfull.");
        }

        return $this->sendError("Authentication failed.", 500);
    }
    
    public function logout(Request $request)
    {

        \Log::info($request->all());
        // if($user->tokens()->delete()){
            return $this->sendSuccess("Logout successfull.");
        // }

        // return $this->sendError("Something went wrong.", 500);
    }
}
