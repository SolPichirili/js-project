//Ingresar como usuario
const arrayDeDatos = [];

let registro = document.querySelector(`#botonRegistrar`);
let primeraVez = document.querySelector(`#botonUsuario`);
let primeraVezModal = document.querySelector(`#cuerpoModal`);
let tituloModal = document.querySelector(`#modalTitulo`);

function recuperar() {
    let recupero = JSON.parse(localStorage.getItem(`usuario`));
    arrayDeDatos.push(recupero);
};

function comenzar() {
    if (localStorage.usuario) {
        if (window.matchMedia("(min-width: 300px) and (max-width:540px").matches) {
            $(`#botonUsuario`).animate({ marginLeft: `15rem` })
        } else {
            $(`#botonUsuario`).animate({ marginLeft: `25rem` });
        }
        primeraVez.innerText = `Bienvenidx ${arrayDeDatos[0].nombre}`;
        tituloModal.remove();
        primeraVezModal.innerHTML = `<p class="parrafos">Ya se encuentra registradx.</p>`
    }
    else {
    }
};

function tomarDatos(e) {
    e.preventDefault()
    let nombre = document.querySelector(`#name`).value;
    let edad = document.querySelector(`#edad`).value;
    let experiencia = document.querySelector(`#exp`).value;

    if (nombre && edad && experiencia != 0) {
        class Usuario {
            constructor(nombre, edad, experiencia) {
                this.nombre = nombre,
                    this.edad = edad,
                    this.experiencia = experiencia
            }

            bienvenida() {
                swal({
                    text: `¡Bienvenidx a una nueva aventura!`,
                    className: "sweetWelcome",
                });
                primeraVez.innerText = `Bienvenidx ${this.nombre}`;
                if (window.matchMedia("(min-width: 300px) and (max-width:540px").matches) {
                    $(`#botonUsuario`).animate({ marginLeft: `15rem` })
                } else {
                    $(`#botonUsuario`).animate({ marginLeft: `25rem` });
                }
                tituloModal.remove();
                primeraVezModal.innerHTML = `<p class="parrafos">Ya se encuentra registradx.</p>`
            }
        }

        const usuario1 = new Usuario(nombre, edad, experiencia);
        usuario1.bienvenida();

        let objetoJson = JSON.stringify(usuario1);
        localStorage.setItem(`usuario`, objetoJson);
    } else {
        swal({
            text: `Por favor complete todos los campos.`,
            className: "sweetWelcome",
        });
    }
}

registro.addEventListener(`click`, tomarDatos);

recuperar();
comenzar();

//Scroll animado para cada Sección

$(document).ready(function () {
    $("#menuAbout").click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 500);
    });
});

$(document).ready(function () {
    $("#menuPersonajxs").click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#personajxs").offset().top
        }, 1000);
    });
});

$(document).ready(function () {
    $("#menuPrueba").click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#prueba").offset().top
        }, 1000);
    });
});

$(document).ready(function () {
    $("#menuSuscripcion").click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#suscripcion").offset().top
        }, 2500);
    });
});

$(document).ready(function () {
    $("#menuSoporte").click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#soporte").offset().top
        }, 3000);
    });
});

$(document).ready(function () {
    $("#scrollArriba").click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#menu").offset().top
        }, 2000);
    });
});


//Personajes
class Personaje {
    constructor(tipo, poder, afiliacion, arma, imagen, id) {
        this.tipo = tipo,
            this.poder = poder,
            this.afiliacion = afiliacion,
            this.arma = arma,
            this.imagen = imagen,
            this.id = id
    }
}

const brujx = new Personaje(`brujx`, `Magia`, `Rebelde`, `Varita`, `imagenes/avatarbrujx.jpg`, `1`);
const caballerx = new Personaje(`caballerx`, `Esgrima`, `A favor de El Reino`, `Espada`, `imagenes/avatarcaballerx.jpg`, `2`);
const orcx = new Personaje(`orcx`, `Fuerza`, `Rebelde`, `Hacha`, `imagenes/avatarorcx.png`, `3`);
const elfx = new Personaje(`elfx`, `Destreza`, `A favor de El Reino`, `Arco y flecha`, `imagenes/avatarelfx.jpg`, `4`);


//Creación de elementos en HTML con jQuery

$(`#brujx`).append(`<p class="parrafos">Poder: ${brujx.poder}</p>
                    <p class="parrafos">Afiliación: ${brujx.afiliacion}</p>
                    <p class="parrafos">Arma: ${brujx.arma}</p>`
)

$(`#orcx`).append(`<p class="parrafos">Poder: ${orcx.poder}</p>
                    <p class="parrafos">Afiliación: ${orcx.afiliacion}</p>
                    <p class="parrafos">Arma: ${orcx.arma}</p>`
)

$(`#elfx`).append(`<p class="parrafos">Poder: ${elfx.poder}</p>
                    <p class="parrafos">Afiliación: ${elfx.afiliacion}</p>
                    <p class="parrafos">Arma: ${elfx.arma}</p>`
)

$(`#caballerx`).append(`<p class="parrafos">Poder: ${caballerx.poder}</p>
                    <p class="parrafos">Afiliación: ${caballerx.afiliacion}</p>
                    <p class="parrafos">Arma: ${caballerx.arma}</p>`
)

//Array de Personajes
const personajes = [brujx, caballerx, orcx, elfx];

//Prueba del juego

// Elegir Personaje
function mostrarPersonajes(array) {
    array.forEach((persj) => {
        let prueba = document.querySelector(`#modalPersonajes`);
        let ficha = document.createElement(`div`)

        ficha.innerHTML += `<img src="${persj.imagen}" id="imgPersj${persj.id}">`

        prueba.appendChild(ficha);

        $(`#imgPersj${persj.id}`).click(function () {
            $(`#modalPersonajes`).html(`<img src="${persj.imagen}">`)
            $(`#modalElegido`).prepend(`<p>Bienvenidx guerrerx, emprenderás desde hoy el camino del bosque que impuso el reino para ti. Comienza la aventura.</p>`).addClass(`parrafos`).fadeIn(1000)
            $(`#botonAndar`).fadeIn(1000).one(`click`, function () {
                $(`#botonAndar`).remove()
                $(`#modalAndar`).prepend(`<img src="imagenes/giphy.gif" class="img-fluid">`)
                $(`#monstruo`).slideDown(3000)
                $(`#modalMonstruo`).append(`<img src="imagenes/monstrux.jpg" class="img-fluid">`).delay(2000)
                $(`#botonAtacar`).fadeIn(1000)
                $(`#botonHuir`).fadeIn(1000)
            })
        })
    })
}

mostrarPersonajes(personajes);

//Batalla
let vidaPersonaje = 100;
let vidaMonstruo = 100;

const atacar = () => Math.round(Math.random() * 10);

const ambxsVivxs = () => { return vidaPersonaje > 0 && vidaMonstruo > 0 };

$(`#botonAtacar`).one(`click`, function () {
    $(`#botonHuir`).remove()
    $(`#botonAtacar`).remove()
    while (ambxsVivxs()) {
        vidaPersonaje -= atacar();
        console.log(`La energía de su personaje es de ${vidaPersonaje}`);
        vidaMonstruo -= atacar();
        console.log(`La energía del monstruo es de ${vidaMonstruo}`);
    }

    if (vidaMonstruo <= 0) {
        $(`#botonesMonstruo`).append(`<p>¡Felicidades! Ha ganado.</p>`).addClass(`parrafos`)
    } else {
        $(`#modalMonstruo`).append(`<p>¡Oh no! Usted ha sido devorado.</p>`).addClass(`parrafos`)
    }
})



//Huida
$(`#botonHuir`).one(`click`, function () {
    $(`#botonAtacar`).remove()
    $(`#botonHuir`).remove()
    $(`#botonesMonstruo`).prepend(`<p>Para escapar del temible monstruo, deberá responder lo siguiente: ¿Cuánto es 800 x 350?</p><br>`).addClass(`parrafos`)
    $(`#respuesta`).fadeIn(1000).delay(1000)
    $(`#botonRespuesta`).fadeIn(1000).one(`click`, function () {
        $(`#botonRespuesta`).remove()
        let valor = document.querySelector(`#respuesta`).value
        if (valor == `280000`) {
            $(`#botonesMonstruo`).append(`<p>Ha ganado.</p>`)
        } else {
            $(`#botonesMonstruo`).append(`<p>Ha perdido.</p>`)
        }
    })
})

//Suscripciones (AJAX con JSON local)

let arraySuscripciones = [];

const comprar = document.querySelector(`#comprar`);

function Suscripciones(id, tiempo, precio, img) {
    this.id = id,
        this.tiempo = tiempo,
        this.precio = precio,
        this.img = img
}

$.get(`ajax.json`, function mostrarSuscripciones(data) {
    data.results.forEach((prod) => {
        arraySuscripciones.push(
            new Suscripciones(prod.id, prod.tiempo, prod.precio, prod.img)
        )

        let tarjeta = document.createElement(`card`);

        tarjeta.innerHTML += `
                            <div class="card tarjeta">
                                <img src="${prod.img}" class="card-img-top img-fluid">
                                    <div class="card-body">
                                        <h5 class="parrafotarj card-title">${prod.tiempo}</h5>
                                            <p class="parrafotarj card-text">${prod.precio}</p>
                                            <button id="boton${prod.id}" class="boton botonAgregar">Agregar <i class="fas fa-shopping-cart"></i></button>
                                    </div>
                                </div>`

        comprar.appendChild(tarjeta);

        let boton = document.getElementById(`boton${prod.id}`)

        boton.addEventListener('click', () => {
            agregarAlCarrito(prod.id)
        })

    })
});

//Carrito

let carritoDeCompras = [];
let contenedorCarrito = document.getElementById(`contenedorCarrito`);

function actualizarCarrito() {
    localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras))
}

function agregarAlCarrito(id) {
    $(`#carroVacio`).hide();
    let agregarSuscripcion = arraySuscripciones.filter((el) => el.id == id)[0];
    carritoDeCompras.push(agregarSuscripcion);

    let productoEnCarrito = document.createElement(`div`);

    productoEnCarrito.innerHTML = `<p>${agregarSuscripcion.tiempo}</p>
                                    <p>${agregarSuscripcion.precio}</p>
                                    <button class="boton cesto" id="${agregarSuscripcion.id}"><i class="fas fa-trash-alt cesto"></button>`


    contenedorCarrito.appendChild(productoEnCarrito);

    let botonEliminar = document.getElementById(`${agregarSuscripcion.id}`);

    botonEliminar.addEventListener(`click`, () => {
        botonEliminar.parentElement.remove();
        carritoDeCompras = carritoDeCompras.filter((el) => el.id != agregarSuscripcion.id);
        $(`#carroVacio`).show();
    })

    actualizarCarrito()
}

//Formulario

function validarNombre(e) {
    e.preventDefault();
    if (formulario.nombre.value == 0) {
        swal({
            icon: "error",
            text: "Por favor coloque su nombre en el formulario.",
            className: "sweetWelcome",
        });
    }
}

function validarMail(e) {
    e.preventDefault();
    if (formulario.mail.value == 0) {
        swal({
            icon: "error",
            text: "Por favor coloque su correo en el formulario.",
            className: "sweetWelcome",
        });
    }
}

function validarConsulta(e) {
    e.preventDefault();
    if (formulario.question.value == 0) {
        swal({
            icon: "error",
            text: "Por favor coloque su consulta en el formulario.",
            className: "sweetWelcome",
        });
    }
}

function enviar(e) {
    e.preventDefault();
    if (formulario.nombre.value && formulario.mail.value && formulario.question.value != 0) {

        let data = {
            service_id: 'service_649j9ek',
            template_id: 'template_7if4flg',
            user_id: 'user_b6y25Mc169KlrB4qrgaqN',
            template_params: {
                'username': 'James',
                'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
            }
        };

        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function () {
            swal({
                icon: "success",
                text: "Su formulario ha sido enviado.",
                className: "sweetWelcome",
            });
        }).fail(function (error) {
            swal({
                icon: "error",
                text: 'Oops... ' + JSON.stringify(error),
                className: "sweetWelcome",
            });
        });


    }
}

function validar(e) {
    validarNombre(e);
    validarMail(e);
    validarConsulta(e);
    enviar(e);
}

$(`#formulario`).submit(validar);

