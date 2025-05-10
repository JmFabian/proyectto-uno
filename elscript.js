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

function FUsoFor1(){
    const vTextoClass = document.getElementsByClassName("classFOR1");
    var vTextoTotal="";
    // como length=4 --> ira desde 0 hasta 3
    for(let i=0 ; i< vTextoClass.length ; i++ )
    {
      vTextoClass[i].style.border ="2px solid red" ;
      vTextoTotal=vTextoTotal + vTextoClass[i].innerText+'-';
  
    } // fin de for
    var nuevoH1 =document.createElement("h1");
    var texto = document.createTextNode(vTextoTotal);
    nuevoH1.appendChild(texto);
    vTextoClass[3].appendChild(nuevoH1);
    
    const miBoton = document.getElementById('miBoton'); // Reemplaza 'miBoton' con el ID de tu botón
  
      console.log("¡La función del botón se ejecutó!");
      // Aquí va el código de tu función
    
      // Deshabilitar el botón después de la primera ejecución
      miBoton.disabled = true;
      miBoton.hidden = true;
      miBoton.textContent = 'Ya se ejecutó'; // Opcional: cambiar el texto del botón
  
  
  }  // fin de function
  
  function FEliminarConcat()
  {
    const vTextoClass = document.getElementsByClassName("classFOR1");
    let rpta =prompt("Estas seguro de eliminar el texto concatenado?(S/N)",'');
    if (rpta=="S" || rpta=="s")  //  doble || significa o
      { vTextoClass[3].remove();  // eliminar la class de posicion [3]
        alert("CONCATENCION ELMINADA");
      }  
    else
      { if(rpta=="N" || rpta=="n")
        { alert("NO SE elimnará");
        }
        else
        { alert("OPCION INCORRECTA-INgresa nuevamente");
        }
      }
    //removeChild funciona cuando un nodo(class, id, etx) esta dentro de otro
  }
    