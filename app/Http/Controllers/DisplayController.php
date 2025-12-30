<?php

namespace App\Http\Controllers;

use App\Models\DisplayImage;
use App\Models\DisplayVideo;
use App\Models\KontainerBawah;
use Inertia\Inertia;
use Inertia\Response;

class DisplayController extends Controller
{
    /**
     * Display halaman TV dengan gambar aktif
     */
    public function index(): Response
    {
        // Ambil SEMUA gambar yang aktif, diurutkan berdasarkan order
        $flyers = DisplayImage::where('is_active', true)
            ->orderBy('order')
            ->get()
            ->map(function ($image) {
                return [
                    'id' => $image->id,
                    'title' => $image->title,
                    'description' => $image->description ?? '',
                    'imageUrl' => $image->image_url,
                    // Default values since these columns don't exist in DB yet
                    'type' => 'poster',
                    'priority' => 'medium',
                ];
            });

        // Fetch all active videos
        $videos = DisplayVideo::where('is_active', true)
            ->get();

        // Use the first active video if available, constructing the URL with asset helper
        $videoUrl = $videos->isNotEmpty() ? asset('storage/' . $videos->first()->video_path) : null;

        // Fetch KontainerBawah data
        $kontainerBawah = KontainerBawah::orderBy('id')->get();

        return Inertia::render('Display/Index', [
            'flyers' => $flyers,
            'videoUrl' => $videoUrl,
            'kontainerBawah' => $kontainerBawah,
        ]);
    }

    // public function toggleActive(DisplayImage $displayImage): RedirectResponse
    // {
    //     $displayImage->update([
    //         'is_active' => !$displayImage->is_active
    //     ]);

    //     return back()->with('success', 'Status gambar berhasil diubah!');
    // }
}
