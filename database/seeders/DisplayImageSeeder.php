<?php

namespace Database\Seeders;

use App\Models\DisplayImage;
use Illuminate\Database\Seeder;

class DisplayImageSeeder extends Seeder
{
    public function run(): void
    {
        DisplayImage::create([
            'title' => 'Informasi Penting 1',
            'image_path' => 'display-images/sample1.jpg',
            'description' => 'Ini adalah informasi penting pertama',
            'is_active' => true,
            'order' => 1,
        ]);

        DisplayImage::create([
            'title' => 'Pengumuman 2',
            'image_path' => 'display-images/sample2.jpg',
            'description' => 'Pengumuman kedua untuk ditampilkan',
            'is_active' => true,
            'order' => 2,
        ]);

        DisplayImage::create([
            'title' => 'Berita Utama',
            'image_path' => 'display-images/sample3.jpg',
            'description' => 'Berita utama hari ini',
            'is_active' => true,
            'order' => 3,
        ]);
    }
}
