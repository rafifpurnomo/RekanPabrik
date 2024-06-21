<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'users';
    protected $primaryKey = 'ID_AKUN';
    public $incrementing = true;
    public $updated_at = false;
    public $created_at = false;

    protected $fillable = [
        'email',
        'password',
        'nama_depan',
        'nama_belakang',
        'usia',
        'kelamin',
        'tanggal_lahir',
        'role',
        'foto_profile',
        'foto_beranda',
    ];

    protected $hidden = [
        'password',
    ];

    protected $casts = [
        'tanggal_lahir' => 'date',
        'kelamin' => 'string',
        'role' => 'string',
    ];
}
