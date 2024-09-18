<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
/** Run the migrations.
 * @return void
 */
  public function up()
  {
    Schema::create('personajes', function (Blueprint $table) {
      $table->id();
      $table->string('nombre');
       $table->string('altura');
       $table->string('peso');
       $table->string('color_pelo');
       $table->string('color_piel');
       $table->string('color_ojos');
       $table->string('anyo_nacimiento');
       $table->string('genero');

       $table->timestamps();
     });
   }

   /**
   * Reverse the migrations.   *
   * @return void
   */
   public function down()
   {
     Schema::dropIfExists('personajes');
  }
};