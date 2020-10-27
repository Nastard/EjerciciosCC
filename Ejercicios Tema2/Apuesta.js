// Definición de la clase Apuesta:
exports.Apuesta = function (local, visitante, resultado) {
	this.local = local;
	this.visitante = visitante;
	this.resultado = resultado;

	this.as_string = as_string;
	this.get_local = get_local;
	this.get_visitante = get_visitante;
	this.get_resultado = get_resultado;
};

function as_string() {
	return (this.local + ": " + this.visitante + " - " + this.resultado);
}

function get_local() {
	return this.local;
}
function get_visitante() {
	return this.visitante;
}
function get_resultado() {
	return this.resultado;
}
