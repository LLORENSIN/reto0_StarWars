<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Personaje;

class PersonajeController extends Controller
{
   /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
   public function index()
   {
     $personajes = Personaje::all();
     return $personajes;
   }

   /**
   * Store a newly created resource in storage.
   *
   * @param \Illuminate\Http\Request $request
   * @return \Illuminate\Http\Response
   */
   public function store(Request $request)
   {
     $personaje = new Personaje();
     $personaje->nombre = $request->nombre;
     $personaje->altura = $request->altura;
     $personaje->peso = $request->peso;
     $personaje->color_pelo = $request->color_pelo;
     $personaje->color_piel = $request->color_piel;
     $personaje->color_ojos = $request->color_ojos;
     $personaje->anyo_nacimiento = $request->anyo_nacimiento;
     $personaje->genero = $request->genero;



     $personaje->save();
   }

   /**
   * Display the specified resource.
   *
   * @param int $id
   * @return \Illuminate\Http\Response
   */
   public function show($id)
   {
     $personaje = Personaje::find($id);
     return $personaje;
   }

   /**
   * Update the specified resource in storage.
   *
   * @param \Illuminate\Http\Request $request
   * @param int $id
   * @return \Illuminate\Http\Response
   */
   public function update(Request $request, $id)
   {
     $personaje = Personaje ::findOrFail($request->id);
     $personaje->nombre = $request->nombre;
     $personaje->altura = $request->altura;
     $personaje->peso = $request->peso;
     $personaje->color_pelo = $request->color_pelo;
     $personaje->color_piel = $request->color_piel;
     $personaje->color_ojos = $request->color_ojos;
     $personaje->anyo_nacimiento = $request->anyo_nacimiento;
     $personaje->genero = $request->genero;

     $personaje->save();
     return $personaje;
   }

   /**
   * Remove the specified resource from storage.
   *
   * @param int $id
   * @return \Illuminate\Http\Response
   */
   public function destroy($id)
   {
     $personaje = Personaje::destroy($id);
     return $personaje;
   }
}