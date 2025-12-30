<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\DisplayImage;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class DisplayImageController extends Controller
{
    public function index(): Response
    {
        $images = DisplayImage::orderBy('order')->get();

        // dd($images->toArray());

        // UBAH INI - pakai PascalCase sesuai folder
        return Inertia::render('admin/DisplayImages/Index', [
            'images' => $images
        ]);
    }

    public function create(): Response
    {
        // UBAH INI
        return Inertia::render('admin/DisplayImages/Create');
    }

    public function edit(DisplayImage $displayImage): Response
    {
        // UBAH INI
        return Inertia::render('admin/DisplayImages/Edit', [
            'image' => $displayImage
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'description' => 'nullable|string',
            'order' => 'required|integer',
        ]);

        $imagePath = $request->file('image')->store('display-images', 'public');

        DisplayImage::create([
            'title' => $validated['title'],
            'image_path' => $imagePath,
            'description' => $validated['description'],
            'order' => $validated['order'],
            'is_active' => true,
        ]);

        return redirect()->route('admin.display-images.index')
            ->with('success', 'Gambar berhasil ditambahkan!');
    }

    public function update(Request $request, DisplayImage $displayImage): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'description' => 'nullable|string',
            'order' => 'required|integer',
            'is_active' => 'boolean',
        ]);

        $data = [
            'title' => $validated['title'],
            'description' => $validated['description'] ?? null,
            'order' => $validated['order'],
            'is_active' => $request->boolean('is_active'),
        ];

        if ($request->hasFile('image')) {
            // Hapus gambar lama
            if ($displayImage->image_path) {
                Storage::disk('public')->delete($displayImage->image_path);
            }

            // Upload gambar baru
            $data['image_path'] = $request->file('image')->store('display-images', 'public');
        }

        $displayImage->update($data);

        return redirect()->route('admin.display-images.index')
            ->with('success', 'Gambar berhasil diupdate!');
    }

    public function destroy(DisplayImage $displayImage): RedirectResponse
    {
        if ($displayImage->image_path) {
            Storage::disk('public')->delete($displayImage->image_path);
        }

        $displayImage->delete();

        return redirect()->route('admin.display-images.index')
            ->with('success', 'Gambar berhasil dihapus!');
    }
}
