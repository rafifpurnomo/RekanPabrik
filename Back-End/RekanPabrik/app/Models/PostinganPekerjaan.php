<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PostinganPekerjaan extends Model
{
    use HasFactory;

    protected $table = 'postinganpekerjaan';
    protected $primaryKey = 'ID_POS_PEKERJAAN';
    public $incrementing = true;
    public $updated_at = false;
    public $created_at = false;

    protected $fillable = [
        'ID_AKUN',
        'JUDUL_PEKERJAAN',
        'NAMA_PERUSAHAAN',
        'DESKRIPSI_PEKERJAAN',
        'RENTANG_GAJI',
        'PERSYARATAN_USIA',
        'PERSYARATAN_PENDIDIKAN',
        'PERSYARATAN_KELAMIN',
        'LOKASI',
        'Foto_Perusahaan',
        'Foto_Logo_Perusahaan',
    ];

    protected $casts = [
        'RENTANG_GAJI' => 'decimal:2',
        'PERSYARATAN_KELAMIN' => 'string',
        'PERSYARATAN_PENDIDIKAN' => 'string',
    ];

    public function postedBy()
    {
        return $this->belongsTo(User::class, 'ID_AKUN');
    }
}
