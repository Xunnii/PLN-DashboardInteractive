<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\DisplayVideo;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class DisplayVideoController extends Controller
{
    public function index(): Response
    {
        $videos = DisplayVideo::orderBy('created_at', 'desc')->get();

        return Inertia::render('admin/DisplayVideos/Index', [
            'videos' => $videos
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/DisplayVideos/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'video' => 'required|mimes:mp4,mov,ogg,qt|max:51200', // 50MB max
            'is_active' => 'boolean',
        ]);

        $videoPath = $request->file('video')->store('display-videos', 'public');

        // If this video is set to active, deactivate others
        if ($request->boolean('is_active')) {
            DisplayVideo::where('is_active', true)->update(['is_active' => false]);
        }

        DisplayVideo::create([
            'title' => $validated['title'],
            'video_path' => $videoPath,
            'is_active' => $request->boolean('is_active'),
        ]);

        return redirect()->route('admin.display-videos.index')
            ->with('success', 'Video berhasil ditambahkan!');
    }

    public function edit(DisplayVideo $displayVideo): Response
    {
        return Inertia::render('admin/DisplayVideos/Edit', [
            'video' => $displayVideo
        ]);
    }

    public function update(Request $request, DisplayVideo $displayVideo): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'video' => 'nullable|mimes:mp4,mov,ogg,qt|max:51200', // 50MB max
            'is_active' => 'boolean',
        ]);

        $data = [
            'title' => $validated['title'],
            'is_active' => $request->boolean('is_active'),
        ];

        if ($request->hasFile('video')) {
            // Delete old video
            if ($displayVideo->video_path) {
                Storage::disk('public')->delete($displayVideo->video_path);
            }

            // Upload new video
            $data['video_path'] = $request->file('video')->store('display-videos', 'public');
        }

        // If this video is set to active, deactivate others
        if ($request->boolean('is_active')) {
            DisplayVideo::where('id', '!=', $displayVideo->id)
                ->where('is_active', true)
                ->update(['is_active' => false]);
        }

        $displayVideo->update($data);

        return redirect()->route('admin.display-videos.index')
            ->with('success', 'Video berhasil diupdate!');
    }

    public function destroy(DisplayVideo $displayVideo): RedirectResponse
    {
        if ($displayVideo->video_path) {
            Storage::disk('public')->delete($displayVideo->video_path);
        }

        $displayVideo->delete();

        return redirect()->route('admin.display-videos.index')
            ->with('success', 'Video berhasil dihapus!');
    }
}
