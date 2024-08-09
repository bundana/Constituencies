<?php

use App\Http\Controllers\MapController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::controller(MapController::class)->group(function (){
    Route::get('/', 'index')->name('home');
    Route::get('/constituencies', 'constituencies')->name('constituencies');
    Route::get('/constituencies/{id}', 'showConstituency')->name('constituency.view');
    Route::get('/api', 'api');
});
