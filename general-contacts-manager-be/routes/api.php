<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;


Route::get('/retrieve', [Controller::class, 'retrieveContacts']);
Route::post('/add', [Controller::class, 'addContact']);
