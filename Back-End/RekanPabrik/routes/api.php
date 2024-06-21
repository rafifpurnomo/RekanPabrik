<?php

use App\Http\Controllers\AuthUserController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthUserController::class, 'Login']);
Route::post('/addNewUser', [AuthUserController::class, 'Register']);
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/logout', [AuthUserController::class, 'Logout']);
    Route::get('/me', [AuthUserController::class, 'me']);
    Route::get('/getDataUser', [UserController::class, 'getAllDataUser']);
});