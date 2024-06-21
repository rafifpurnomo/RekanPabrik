<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostinganPekerjaanResource;
use App\Models\PostinganPekerjaan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostinganPekerjaanController extends Controller
{
    public function getAllPekerjaan()
    {
        $dataPekerjaan = PostinganPekerjaan::all();
        return PostinganPekerjaanResource::collection($dataPekerjaan);
    }

    public function addNewPekerjaan(Request $request)
    {
        $user = Auth::user();
        $roleUser = $user->role;
        
        if($roleUser == 'HRD'){
            
            $request->validate([
                'JUDUL_PEKERJAAN' => 'required|string|max:225',
                'NAMA_PERUSAHAAN' => 'required|string|max:225',
                'DESKRIPSI_PEKERJAAN' => 'required|string',
                'RENTANG_GAJI' => 'required|numeric',
                'PERSYARATAN_USIA' => 'required|integer',
                'PERSYARATAN_PENDIDIKAN' => 'required|in:SMA sederajat,Diploma,Sarjana',
                'PERSYARATAN_KELAMIN' => 'required|in:Laki-Laki,Perempuan',
                'LOKASI' => 'required|string|max:225',
            ]);
    
            $newPekerjaan = new PostinganPekerjaan();
            $newPekerjaan->ID_AKUN = Auth::id();
            $newPekerjaan->JUDUL_PEKERJAAN = $request->JUDUL_PEKERJAAN;
            $newPekerjaan->NAMA_PERUSAHAAN = $request->NAMA_PERUSAHAAN;
            $newPekerjaan->DESKRIPSI_PEKERJAAN = $request->DESKRIPSI_PEKERJAAN;
            $newPekerjaan->RENTANG_GAJI = $request->RENTANG_GAJI;
            $newPekerjaan->PERSYARATAN_PENDIDIKAN = $request->PERSYARATAN_PENDIDIKAN;
            $newPekerjaan->PERSYARATAN_KELAMIN = $request->PERSYARATAN_KELAMIN;
            $newPekerjaan->LOKASI = $request->LOKASI;
    
            $newPekerjaan->save();
            return response()->json(['massage' => 'postingan berhasil', 'pekerjaan' => $newPekerjaan->JUDUL_PEKERJAAN], 200);
        
        } else {
            return response()->json(['massage' => 'hanya HRD yang dapat membuat posstingan pekerjaan']);
        }
    }
}
