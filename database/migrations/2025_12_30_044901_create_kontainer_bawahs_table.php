<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('kontainer_bawahs', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->string('label');
            $table->string('value');
            $table->string('icon'); // emoji or class
            $table->string('color')->nullable(); // tailwind classes
            $table->string('type')->default('metric'); // 'status' or 'metric'
            $table->string('status')->nullable(); // 'normal', 'warning', etc.
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kontainer_bawahs');
    }
};
