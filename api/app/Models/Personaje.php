<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Personaje extends Model
{
   use HasFactory;
   protected $fillable = ['nombre', 'altura', 'peso', 'color_pelo', 'color_piel', 'color_ojos', 'anyo_nacimiento', 'genero'];
}
