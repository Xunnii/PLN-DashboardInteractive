<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\DisplayImageController;
use App\Http\Controllers\DisplayController;


// Route::get('/welcome', function () {
//     return Inertia::render('welcome', [
//         'canRegister' => Features::enabled(Features::registration()),
//     ]);
// })->name('home');

Route::get('/', [DisplayController::class, 'index'])
    ->name('display.index');


//auth
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('new-page', function () {
        return Inertia::render('NewPage');
    })->name('new-page');
});

Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    // CRUD Display Images
    // Route::resource('display-images', DisplayImageController::class);

    // Atau jika ingin lebih explicit:
    Route::get('/display-images', [DisplayImageController::class, 'index'])
        ->name('display-images.index');


    Route::get('/display-images/create', [DisplayImageController::class, 'create'])
        ->name('display-images.create');
    Route::post('/display-images', [DisplayImageController::class, 'store'])
        ->name('display-images.store');
    Route::get('/display-images/{displayImage}/edit', [DisplayImageController::class, 'edit'])
        ->name('display-images.edit');
    Route::put('/display-images/{displayImage}', [DisplayImageController::class, 'update'])
        ->name('display-images.update');
    Route::delete('/display-images/{displayImage}', [DisplayImageController::class, 'destroy'])
        ->name('display-images.destroy');

    // CRUD Display Videos
    Route::get('/display-videos', [\App\Http\Controllers\Admin\DisplayVideoController::class, 'index'])
        ->name('display-videos.index');
    Route::get('/display-videos/create', [\App\Http\Controllers\Admin\DisplayVideoController::class, 'create'])
        ->name('display-videos.create');
    Route::post('/display-videos', [\App\Http\Controllers\Admin\DisplayVideoController::class, 'store'])
        ->name('display-videos.store');
    Route::get('/display-videos/{displayVideo}/edit', [\App\Http\Controllers\Admin\DisplayVideoController::class, 'edit'])
        ->name('display-videos.edit');
    Route::put('/display-videos/{displayVideo}', [\App\Http\Controllers\Admin\DisplayVideoController::class, 'update'])
        ->name('display-videos.update');
    Route::delete('/display-videos/{displayVideo}', [\App\Http\Controllers\Admin\DisplayVideoController::class, 'destroy'])
        ->name('display-videos.destroy');

    // Kontainer Bawah Settings
    // Kontainer Bawah Settings
    Route::get('/kontainer-bawah', [\App\Http\Controllers\Admin\KontainerBawahController::class, 'index'])
        ->name('kontainer-bawah.index');
    Route::get('/kontainer-bawah/create', [\App\Http\Controllers\Admin\KontainerBawahController::class, 'create'])
        ->name('kontainer-bawah.create');
    Route::post('/kontainer-bawah', [\App\Http\Controllers\Admin\KontainerBawahController::class, 'store'])
        ->name('kontainer-bawah.store');
    Route::get('/kontainer-bawah/{kontainerBawah}/edit', [\App\Http\Controllers\Admin\KontainerBawahController::class, 'edit'])
        ->name('kontainer-bawah.edit');
    Route::put('/kontainer-bawah/{kontainerBawah}', [\App\Http\Controllers\Admin\KontainerBawahController::class, 'update'])
        ->name('kontainer-bawah.update');
    Route::delete('/kontainer-bawah/{kontainerBawah}', [\App\Http\Controllers\Admin\KontainerBawahController::class, 'destroy'])
        ->name('kontainer-bawah.destroy');
});




require __DIR__ . '/settings.php';
