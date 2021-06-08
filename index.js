//COIDGO ES5

//PACIENTE
function Paciente(nombre, edad, rut, diagnostico) {
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    //NOMBRE
    Object.defineProperty(this, "_getNombre", {
        get: function() {
            return _nombre;
        }
    });
    Object.defineProperty(this, "_setNombre", {
        set: function(nombre) {
            _nombre = nombre;
        }
    });
    //EDAD
    Object.defineProperty(this, "_getEdad", {
        get: function() {
            return _edad;
        }
    });
    Object.defineProperty(this, "_setEdad", {
        set: function(edad) {
            _edad = edad
        }
    })

    //RUT

    Object.defineProperty(this, "_getRut", {
        get: function() {
            return _rut;
        }
    });
    Object.defineProperty(this, "_setRut", {
        set: function(rut) {
            _rut = rut
        }
    })

    //DIAGNOSTICO

    Object.defineProperty(this, "_getDiagnostico", {
        get: function() {
            return _diagnostico;
        }
    });
    Object.defineProperty(this, "_setDiagnostico", {
        set: function(diagnostico) {
            _diagnostico = diagnostico
        }
    })

    Object.defineProperty(this, "_toString", {
        get: function() {
            return `nombre : ${_nombre}, edad : ${_edad}, rut : ${_rut}, diagnostico : ${_diagnostico}`
        }
    })
}

//NOMBRE
Paciente.prototype.getNombre = function() {
    return this._getNombre;
}
Paciente.prototype.setNombre = function(nombre) {
    this._setNombre = nombre;
}

//EDAD
Paciente.prototype.getEdad = function() {
    return this._getEdad;
}
Paciente.prototype.setEdad = function(edad) {
    this._setEdad = edad;
}

//RUT
Paciente.prototype.getRut = function() {
    return this._getRut;
}
Paciente.prototype.setRut = function(rut) {
    this._setRut = rut;
}

//DIAGNOSTICO
Paciente.prototype.getDiagnostico = function() {
    return this._getDiagnostico;
}
Paciente.prototype.setDiagnostico = function(diagnostico) {
    this._setDiagnostico = diagnostico;
}

Paciente.prototype.toString = function() {
    return this._toString;
}


//CONSULTORIO
function Consultorio(nombre, paciente) {
    this._nombre = nombre;
    this._paciente = [paciente];

}

Consultorio.prototype.getNombre = function() {
    return this._nombre;
}
Consultorio.prototype.setNombre = function(nombre) {
    this._nombre = nombre;
}

Consultorio.prototype.getPaciente = function() {
    return this._paciente;
}
Consultorio.prototype.setPaciente = function(paciente) {
    this._paciente = paciente;
}

Consultorio.prototype.addPaciente = function(paciente) {
    this._paciente.push(paciente)
}

Consultorio.prototype.searchPaciente = function(paciente_nombre) {
    var result = this._paciente.filter(paciente => paciente.getNombre() === paciente_nombre)
    result.forEach(e => {
        console.log(e.toString());
    })
}

Consultorio.prototype.showAll = function() {
    this._paciente.forEach(element => {
        console.log(element.toString());
    });
}



// Se crean 4 pacientes
var paciente1 = new Paciente('Diego', 27, '1-9', 'Dolor de cabeza');
var paciente2 = new Paciente('Fernando', 55, '2-8', 'Murió');
var paciente3 = new Paciente('Marco', 18, '2-8', 'Dolor de espalda');
var paciente4 = new Paciente('Diego', 25, '2-8', 'Dolor de Muela');
// Se crea consultorio
var consultorio1 = new Consultorio('Mafioletti', paciente1);

//se añaden pacientes al consultorio
consultorio1.addPaciente(paciente2);
consultorio1.addPaciente(paciente3);
consultorio1.addPaciente(paciente4);

//MOSTRAR TODOS LOS PACIENTES
console.log('Mostrar todos los pacientes');
consultorio1.showAll();
console.log("====================================");

//Se modifican datos de paciente2
paciente2.setNombre('Fabian');
paciente2.setEdad(8);

//BUSCAR POR NOMBRE
console.log("Se busca paciente por nombre Fabian");
consultorio1.searchPaciente('Fabian');
console.log("====================================");