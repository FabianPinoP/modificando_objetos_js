// 1. Crear todo el código usando ES5.
// 2. Crear una función constructora para cada objeto. ok
// 3. Implementar métodos getters y setters para poder acceder y modificar los datos de los pacientes.  ok
// 4. Crear un método mediante la propiedad prototype que permita buscar los datos de los usuarios por nombre y otro método que permita mostrar todos los datos de los usuarios registrados.
// 5. Instanciar cada objeto utilizando la instrucción new.

// Constructor Consultorio
function ConsultingRoom(name, patient) {
  let _name = name;
  let _patient = patient || [];

  Object.defineProperty(this, "_getName", {
    get: function () {
      return _name;
    },
  });

  Object.defineProperty(this, "_setName", {
    set: function (name) {
      _name = name;
    },
  });

  Object.defineProperty(this, "_getPatient", {
    get: function () {
      return _patient;
    },
  });

  Object.defineProperty(this, "setPatient", {
    set: function (patient) {
      _patient = patient;
    },
  });
}

// Constructor Paciente
function Patient(name, rut, age, diagnosis) {
  let _name = name;
  let _rut = rut;
  let _age = age;
  let _diagnosis = diagnosis || [];

  Object.defineProperty(this, "_getName", {
    get: function () {
      return _name;
    },
  });

  Object.defineProperty(this, "_setName", {
    set: function () {
      _name = name;
    },
  });

  Object.defineProperty(this, "_getRut", {
    get: function () {
      return _rut;
    },
  });

  Object.defineProperty(this, "_setRut", {
    set: function (rut) {
      _rut = rut;
    },
  });

  Object.defineProperty(this, "_getAge", {
    get: function () {
      return _age;
    },
  });

  Object.defineProperty(this, "_setAge", {
    set: function (age) {
      _age = age;
    },
  });

  Object.defineProperty(this, "_getDiagnosis", {
    get: function () {
      return _diagnosis;
    },
  });

  Object.defineProperty(this, "_setDiagnosis", {
    set: function (diagnosis) {
      _diagnosis = diagnosis;
    },
  });
}

// get y set funcion constructora Consultorio

ConsultingRoom.prototype.getName = function () {
  return this._getName;
};

ConsultingRoom.prototype.setName = function (name) {
  this._setName = name;
};

ConsultingRoom.prototype.getPatient = function () {
  return this._getPatient;
};

ConsultingRoom.prototype.setPatient = function (patient) {
  this._setPatient = patient;
};

// get y set Funcion constructora Paciente

Patient.prototype.getName = function () {
  return this._getName;
};

Patient.prototype.setName = function (name) {
  this._getName = name;
};

Patient.prototype.getRut = function () {
  return this._getRut;
};

Patient.prototype.setRut = function (rut) {
  this._setRut = rut;
};

Patient.prototype.getAge = function () {
  return this._getAge;
};

Patient.prototype.setAge = function (age) {
  this._setAge = age;
};

Patient.prototype.getDiagnosis = function () {
  return this._getDiagnosis;
};

Patient.prototype.setDiagnosis = function (diagnosis) {
  this._setDiagnosis = diagnosis;
};

// Instanciando pacientes

var firstPatient = new Patient("Yeminson", "12345678-9", 30, [
  "Diagnostico A",
  "Diagnostico A1",
]);
var secondPatient = new Patient("Wilson", "234567890-1", 27, ["Diagnostico B"]);
var thirdPatient = new Patient("Fran", "345678901-2", 17, ["Diagnostico C"]);
var quarterPatient = new Patient("Juan", "456789012-3", 17, [
  "Diagnostico D",
  "Diagnostico D1",
  "Diagnostico D2",
]);
var fifthPatient = new Patient("Benja", "567890123-4", 23, [
  "Diagnostico E",
  "Diagnostico E1",
  "Diagnostico E2",
]);

// Instanciando centro medico
var firstConsulting = new ConsultingRoom("Ñuñoa", [
  firstPatient,
  secondPatient,
  thirdPatient,
  quarterPatient,
  fifthPatient,
]);

// mostrar todos los datos de los usuarios registrados.
ConsultingRoom.prototype.showAllPatients = function () {
  this._getPatient.map((patient) => {
    console.log("Nombre: " + patient._getName);
    console.log("Edad: " + patient._getAge);
    console.log("Rut: " + patient._getRut);
    console.log("Diagnostico: " + patient._getDiagnosis);
    console.log("****************************************");
  });
};

firstConsulting.showAllPatients();
// Metodo buscar por nombre y mostrar datos personales.
ConsultingRoom.prototype.filterPatientForName = function (name) {
  this._getPatient
    .filter((patient) => patient._getName == name)
    .map((patient) => {
      console.log("Nombre: " + patient._getName);
      console.log("Edad: " + patient._getAge);
      console.log("Rut: " + patient._getRut);
      console.log("Diagnostico: " + patient._getDiagnosis);
      console.log("****************************************");
    });
};

firstConsulting.filterPatientForName("Fran");

// tabla de pacientes

function showTable(array) {
  let headers = `
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Edad</th>
          <th scope="col">Rut</th>
          <th scope="col">Diagnostico</th>
        </tr>
      </thead>`;
  array.forEach((element) => {
    headers += `
      <tr>
        <th scope="row">*</th>        
        <td>${element._getName}</td>
        <td>${element._getAge}</td>
        <td>${element._getRut}</td>
        <td>${element._getDiagnosis}</td>
      </tr>`;
  });
  document.querySelector(".showtable").innerHTML = headers;
}
showTable(firstConsulting._getPatient);

// buscador

let search = document.querySelector("#search");

search.addEventListener("click", (e) => {
  e.preventDefault();
  let patientName = document.querySelector("#patientName").value;
  let headers = `
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Edad</th>
          <th scope="col">Rut</th>
          <th scope="col">Diagnostico</th>
        </tr>
      </thead>`;
  let patientFiltered = firstConsulting._getPatient.filter(
    (patient) => patient._getName == patientName
  );
  patientFiltered.forEach((element) => {
    headers += `
      <tr>
        <th scope="row">*</th>        
        <td>${element._getName}</td>
        <td>${element._getAge}</td>
        <td>${element._getRut}</td>
        <td>${element._getDiagnosis}</td>
      </tr>`;
  });
  document.querySelector(".result").innerHTML = headers;
});

// limpiar result
let clean = document.querySelector("#clean");
clean.addEventListener("click", (e) => {
  e.preventDefault();
  $(".result").empty();
});
