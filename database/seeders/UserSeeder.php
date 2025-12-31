<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // Buat user admin
        User::create([
            'name' => 'kentang',
            'email' => 'kentang@gmail.com',
            'password' => Hash::make('password'),
        ]);

        // Buat user biasa
        User::create([
            'name' => 'User kentang',
            'email' => 'userkentang@gmail.com',
            'password' => Hash::make('password'),
        ]);

        // Atau buat 10 user random dengan factory
        User::factory(10)->create();
    }
}
