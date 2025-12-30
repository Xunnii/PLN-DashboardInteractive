<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\KontainerBawah;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KontainerBawahController extends Controller
{
    public function index()
    {
        $items = KontainerBawah::orderBy('id')->get();
        return Inertia::render('admin/KontainerBawah/Index', [
            'items' => $items,
            'canAdd' => $items->count() < 4
        ]);
    }

    public function create()
    {
        if (KontainerBawah::count() >= 4) {
            return redirect()->route('admin.kontainer-bawah.index')
                ->with('error', 'Maksimal 4 kartu.');
        }

        return Inertia::render('admin/KontainerBawah/Create');
    }

    public function store(Request $request)
    {
        if (KontainerBawah::count() >= 4) {
            return redirect()->back()
                ->with('error', 'Maksimal 4 kartu.');
        }

        $validated = $request->validate([
            'label' => 'required|string|max:255',
            'value' => 'required|string|max:255',
            'icon' => 'required|string|max:255',
            'color' => 'nullable|string|max:255',
            'type' => 'required|string|in:metric,status',
            'status' => 'nullable|string|max:255',
        ]);

        KontainerBawah::create($validated);

        return redirect()->route('admin.kontainer-bawah.index')
            ->with('success', 'Kartu berhasil ditambahkan');
    }

    public function edit(KontainerBawah $kontainerBawah)
    {
        return Inertia::render('admin/KontainerBawah/Edit', [
            'item' => $kontainerBawah
        ]);
    }

    public function update(Request $request, KontainerBawah $kontainerBawah)
    {
        $validated = $request->validate([
            'label' => 'required|string|max:255',
            'value' => 'required|string|max:255',
            'icon' => 'required|string|max:255',
            'color' => 'nullable|string|max:255',
            'type' => 'required|string|in:metric,status',
            'status' => 'nullable|string|max:255',
        ]);

        $kontainerBawah->update($validated);

        return redirect()->route('admin.kontainer-bawah.index')->with('success', 'Data berhasil diperbarui');
    }

    public function destroy(KontainerBawah $kontainerBawah)
    {
        $kontainerBawah->delete();

        return redirect()->back()->with('success', 'Kartu berhasil dihapus');
    }
}
