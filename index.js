//Declaración constantes
const display = document.getElementById("display");
const teclas = document.querySelectorAll("button")

//Se usa un forEach para recorrer los botones.
// y cada vez que se oprime uno llama a un evento
teclas.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        if(btn.id == "="){
            display.value = eval(display.value);// eval, evaluá lo que esta dentro
        }else if (btn.id == "ac"){
            display.value = ""; // devuelve un string vacio
        }else if (btn.id == "de"){
            display.value = display.value.slice(0,-1)// Se usa slice para ur sacando el ultimo elemento
        }else{
            display.value += btn.id
        }
    })
})































