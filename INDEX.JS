// Función para agregar un nuevo recordatorio a la lista
function agregarRecordatorio() {
    var input = document.getElementById("nuevoRecordatorio");
    var varBotonEliminar = document.getElementById("botonEliminar");
    
    var recordatorio = input.value;
    
    if (recordatorio !== "") {
      var lista = document.getElementById("listaRecordatorios");
      
      // Crear un nuevo elemento de lista
      var nuevoElemento = document.createElement("li");
      var varBotonEliminar = document.createElement("button");
      
      nuevoElemento.innerHTML = recordatorio;
      varBotonEliminar.innerHTML = "eliminar";
      varBotonEliminar.setAttribute("style", "color: blue; background-color: yellow");


      lista.appendChild(nuevoElemento);
      
      // Limpiar el campo de texto
      input.value = "";
    }
    //ELIMINAR NOTAR
    nuevoElemento.appendChild(varBotonEliminar);
    varBotonEliminar.addEventListener("click", function () {nuevoElemento.remove();}); 
  }
  
