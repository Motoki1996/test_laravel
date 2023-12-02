<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\AuthManager;
use Illuminate\Http\JsonResponse;

class LoginController extends Controller
{
    /**
     * @param AuthManager $auth
     */
    public function __construct(
        private readonly AuthManager $auth,
    ) {
    }

    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $credentials = $request->only(['email', 'password']);

        if ($this->auth->guard()->attempt($credentials)) {
            $request->session()->regenerate();

            return new JsonResponse([
                'message' => 'Authenticated.',
            ]);
        }

        throw new AuthenticationException();
    }
}
