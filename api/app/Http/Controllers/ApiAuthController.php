<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Tymon\JWTAuth\Facades\JWTAuth;

class ApiAuthController extends Controller
{
  /**
  * userAuth
  *
  */
  public function userAuth(Request $request){
    $credentials = $request->only('email', 'password');
    $token = null;

    try {
      // attempt to verify the credentials and create a token for the user
      if (! $token = JWTAuth::attempt($credentials)) {
        return response()->json(['error' => 'invalid_credentials'], 401);
      }
    } catch (JWTException $ex) {
      // something went wrong whilst attempting to encode the token
      return response()->json(['error' => 'could_not_create_token'], 500);
    }

    $user = JWTAuth::toUser($token);

    // all good so return the token
    return response()->json(compact('token', 'user'));

  }
}
