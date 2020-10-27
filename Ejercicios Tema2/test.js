var assert = require("assert"),
apuesta = require("./Apuesta.js");

describe('Apuesta', function(){
	// Testea que se haya cargado bien la librería
	describe('Carga', function(){
		it('Deberia ser cargado correctamente', function(){
			assert(apuesta, "Cargado");
		});
	});
	//Testea que la salida es la esperada
	describe('Crea', function(){
		it('Salida deberia ser correcta', function(){
			var nueva_apuesta = new apuesta.Apuesta('Polopos','Alhama',"2-3");
			assert.equal(nueva_apuesta.as_string(), "Polopos: Alhama - 2-3","Creado");
		});
	});
	//Testea que el equipo local es el esperado
	describe('Local', function(){
		it('El quipo local deberia ser correcto', function(){
			var nueva_apuesta = new apuesta.Apuesta('Polopos','Alhama',"2-3");
			assert.equal(nueva_apuesta.get_local(), "Polopos","Creado");
		});
	});
	//Testea que el equipo visitante es el esperado
	describe('Visitante', function(){
		it('El quipo visitante deberia ser correcto', function(){
			var nueva_apuesta = new apuesta.Apuesta('Polopos','Alhama',"2-3");
			assert.strictEqual(nueva_apuesta.get_visitante(), "Alhama","Creado");
		});
	});
	//Testea que el resultado es el esperado
	describe('Resultado', function(){
		it('El resultado deberia ser correcto', function(){
			var nueva_apuesta = new apuesta.Apuesta('Polopos','Alhama',"2-3");
			assert.strictEqual(nueva_apuesta.get_resultado(), "2-3","Creado");
		});
	});
});
