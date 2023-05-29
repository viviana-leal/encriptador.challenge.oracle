const textArea=document.querySelector(".text-area");
const mensaje=document.querySelector(".mensaje");
const btnEncriptar=document.querySelector(".btn-encriptar");
const btnDesencriptar=document.querySelector(".btn-desencriptar");

// USE ESTE METODO PORDQUE la ruta onclick no funciono para la  funcion desencriptar
btnEncriptar.addEventListener("click", function() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
  });

  btnDesencriptar.addEventListener("click", function() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
  });




//REGLAS DE ENCRIPTACION 
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"




function encriptar(stringEncriptada) {
    // Ejecución de las condiciones de encriptación, según los parámetros del reto
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    // Expresión regular para verificar caracteres especiales y acentos
    const regex = /^[a-z\s]+$/i;

    // Condicional para verificar si el texto contiene caracteres especiales o acentos
    if (!regex.test(stringEncriptada)) {
        return "El texto contiene caracteres especiales o acentos. Por favor, ingresa solo minúsculas sin acentos.";
    } else {
        stringEncriptada = stringEncriptada.toLowerCase();

        for (let i = 0; i < matrizcodigo.length; i++) {
            const regexLetra = new RegExp(matrizcodigo[i][0], "g");
            stringEncriptada = stringEncriptada.replace(regexLetra, matrizcodigo[i][1]);
        }

        return stringEncriptada;
    }
}

function desencriptar(stringDesencriptada){
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizcodigo.length; i++) {
        if (stringDesencriptada.includes(matrizcodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    const mensaje = document.querySelector(".mensaje");
    const texto = mensaje.value;

    navigator.clipboard.writeText(texto)
        .then(() => {
            
        })
        .catch((error) => {
            console.error("Error al copiar el texto", error);
        });
}


