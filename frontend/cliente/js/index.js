var loginContainer = document.getElementById(`login-usuario-container`);
var registroContainer = document.getElementById(`registro-usuario-container`);
var anclaRegistro = document.getElementById(`ancla-registro`);
var usuariosRegistrados = [];

const obtenerusuario = (id) => {
    return new Promise((resolve, reject) => {
        const usuario = {
            email: document.getElementById("input-usuario"),
            contraseña: document.getElementById("")
        };

        fetch(`http://localhost:2000/usuarios/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario),
            redirect: 'follow'
        })
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}

const crearUsuario = () => {
    return new Promise((resolve, reject) => {
        const usuario = {
            primerNombre: document.getElementById("inp-nombre"),
            PrimerAppelido: document.getElementById("inp-apellido"),
            email: document.getElementById("inp-email"),
            contraseña: document.getElementById("inp-contraseña"),
            direccion: document.getElementById("inp-direccion"),
            telefono: document.getElementById("inp-telefono"),
            tarjetaDeCredito: document.getElementById("inp-tarjeta")
        }

        fetch("localhost:2000/usuarios/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario),
            redirect: 'follow'
        })
            .then(result => resolve(response))
            .catch(error => reject(error));
    })
}

//es para que implementemos el registro del usuario por mientras.
var principal = 'keneth sosa';
var password = '1234';

const renderizarLogin = () => {
    loginContainer.style.display = `grid`;
    registroContainer.style.display = `none`;
}

renderizarLogin();

const ocultarLogin = () => {
    loginContainer.style.display = `none`;
    registroContainer.style.display = `grid`;
}

const ocultarRegistro = () => {
    loginContainer.style.display = `grid`;
    registroContainer.style.display = `none`;
}

/* js 2 */
var banderaValidaciones = 0;

function limpiarRegistroInicial() {
    document.getElementById('input-usuario').value = " ";
    document.getElementById('input-password').value = " ";
}

function limpiarInputs() {
    var inputs = document.getElementsByClassName('input-bonito');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = " ";
    }
}
function validacionInputs() {
    var nombre = document.getElementById('inp-nombre');
    var email = document.getElementById('inp-email');
    var telefono = document.getElementById('inp-telefono');
    var contraseña = document.getElementById('inp-contraseña');
    var contraseña2 = document.getElementById('inp-contraseña-2');

    //expresiones regulares
    var letras = /^[a-zA-Z\s]+$/; //para el nombre
    var email_valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var tel = /\d{4}-\d{4}$/;

    if ((letras.test(nombre.value))) {
        valido(nombre);
    } else {
        error(nombre);
        banderaValidaciones++;
    }

    if (email_valido.test(email.value)) {
        valido(email);
    } else {
        error(email);
        banderaValidaciones++;
    }

    if (tel.test(telefono.value)) {
        valido(telefono);
    } else {
        error(telefono);
        banderaValidaciones++;
    }

    if (banderaValidaciones > 0) {
        mensajeError();
    }

    /*aqui luego puede ser que si banderaValidaciones == 0
        significa que no hay errores entonces podemos avanzar, espero entendás jaja.
    */
    if (banderaValidaciones == 0) {
        nuevoUsuario();
    }
    banderaValidaciones = 0;
}
function valido(etiqueta) {
    etiqueta.classList.remove('input-error');
    etiqueta.classList.add('input-succes');
};
function error(etiqueta) {
    etiqueta.classList.remove('input-succes');
    etiqueta.classList.add('input-error');
}
function mensajeError() {
    alert("Por favor corrija los inputs en rojo");
}

function entradaRegistro() {
    let user = document.getElementById('input-usuario').value;
    let contra = document.getElementById('input-password').value;
    if ((user == principal) && (contra == password)) {
        document.getElementById('ir-categorias').setAttribute('href', "../categorias/categorias.html");
    } else {
        alert("credenciales incorrectas");
    }


}

limpiarInputs();

limpiarRegistroInicial();
