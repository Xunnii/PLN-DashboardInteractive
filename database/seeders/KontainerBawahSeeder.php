<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KontainerBawahSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'key' => 'system_status',
                'label' => 'Status Sistem',
                'value' => 'NORMAL',
                'icon' => '✅',
                'color' => 'from-green-600 to-green-700',
                'type' => 'status',
                'status' => 'normal',
            ],
            [
                'key' => 'beban_nasional',
                'label' => 'Beban Nasional',
                'value' => '38.2 GW',
                'icon' => '⚡',
                'color' => 'from-blue-600 to-blue-700',
                'type' => 'metric',
                'status' => null,
            ],
            [
                'key' => 'total_pelanggan',
                'label' => 'Total Pelanggan',
                'value' => '85.4 Jt',
                'icon' => '👥',
                'color' => 'from-indigo-600 to-indigo-700',
                'type' => 'metric',
                'status' => null,
            ],
            [
                'key' => 'rasio_elektrifikasi',
                'label' => 'Rasio Elektrifikasi',
                'value' => '99.9%',
                'icon' => '💡',
                'color' => 'from-amber-600 to-amber-700',
                'type' => 'metric',
                'status' => null,
            ],
        ];

        foreach ($data as $item) {
            \App\Models\KontainerBawah::updateOrCreate(['key' => $item['key']], $item);
        }
    }
}
