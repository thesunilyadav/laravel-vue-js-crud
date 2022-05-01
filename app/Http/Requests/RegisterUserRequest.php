<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => "required|string",
            'email' => "required|email",
            'password' => "required|min:8|confirmed",
            'password_confirmation' => "required",
        ];
    }

    public function messages()
    {
        return [
            'password_confirmation.required' => "Please enter confirm password",
            'password_confirmation.confirmed' => "Confirm password does not match",
        ];
    }
}
