<?php

namespace App\Exceptions;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Throwable;
use Response;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param Throwable $exception
     *
     * @throws Throwable
     *
     * @return \Illuminate\Http\JsonResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function render($request, Throwable $exception)
    {
        $code = $exception->getCode();
        $message = $exception->getMessage();
        if ($code < 100 || $code >= 600) {
            $code = \Illuminate\Http\Response::HTTP_INTERNAL_SERVER_ERROR;
        }

        if ($exception instanceof ModelNotFoundException) {
            $message = $exception->getMessage();
            $code = \Illuminate\Http\Response::HTTP_NOT_FOUND;

            if (preg_match('@\\\\(\w+)]@', $message, $matches)) {
                $model = $matches[1];
                $model = preg_replace('/Table/i', '', $model);
                $message = "{$model} not found.";
            }
        } elseif ($exception instanceof ValidationException) {
            $validator = $exception->validator;
            $message = $validator->errors()->first();
            $code = \Illuminate\Http\Response::HTTP_UNPROCESSABLE_ENTITY;
        }
       
        if ($request->expectsJson() or $request->isXmlHttpRequest()) {
            return Response::json([
                'success' => false,
                'message' => $message,
            ], $code);
        }

        return parent::render($request, $exception);
    }
}
