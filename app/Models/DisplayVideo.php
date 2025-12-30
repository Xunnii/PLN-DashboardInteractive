<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DisplayVideo extends Model
{
    protected $fillable = [
        'title',
        'video_path',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function getVideoUrlAttribute(): string
    {
        return asset('storage/' . $this->video_path);
    }
}
