<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DisplayImage extends Model
{
    /**
     * The table associated with the model.
     */
    protected $table = 'display_images';

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'title',
        'image_path',
        'description',
        'is_active',
        'order',
    ];

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'is_active' => 'boolean',
        'order' => 'integer',
    ];

    /**
     * Get the full URL for the image.
     */
    public function getImageUrlAttribute(): string
    {
        return asset('storage/' . $this->image_path);
    }
}
