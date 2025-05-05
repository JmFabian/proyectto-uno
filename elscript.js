const vercontra = () =>  {
    let input = document.querySelector("#CLAVE")
    if (input.type === "password"){

        input.type = "text"

    } else{

        input.type = "password"

    }

}


function FCambioColor() {

    let vTexto1 =document.getElementById("EjmDOM1");
    vTexto1.textContent="Bienvenido";
    vTexto1.style.color="magenta"; //tambien puedes ponerle background color//
    vTexto1.insertAdjacentHTML("");
    vTexto1.insertAdjacentHTML("beforeend",varGlobal1)
    console.log("texto por consola")
    

}


function FCambioClase1() {

    let vTexto2=document.getElementsByClassName("classDOM1");
    vTexto2[0].innerHTML="que Pressur esta abierto 24/7  a su disponibilidad";
    console.log("tamaño del array=",vTexto2.length);

}


function FCambiodeTag1() {

    let vTexto3=document.getElementsByTagName("h2");
    vTexto3[0].innerHTML="Datos del usuario";
    vTexto3[0].style.color="white";

}

function FcrearH1(){
    var elemento =document.getElementById("idCrearH1");
    var nuevoH1 =document.createElement("H1");
    var texto = document.createTextNode("tenga un excelente dia");
    nuevoH1.appendChild(texto);
    elemento.appendChild(nuevoH1);
}

function FAgregarTextoPermanente(){
    let textoAdicional ="texto adicional";
    vTexto1 = vTexto1 + textoAdicional;
    console.log("tipo de variable de vTexto1 =",typeof vTexto1);
    console.log(vTexto1); 
}

    