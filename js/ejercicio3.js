const formulario = document.querySelector("form");
const listadoTareas = document.getElementById("listadotareas");
formulario.addEventListener("submit", agregarTarea);

listadoTareas.addEventListener('click', (e)=>{
  console.log(e.target)
  if(e.target.classList.contains('borrar')){
    console.log(e.target.parentElement)
   e.target.parentElement.remove()
  }
})

function agregarTarea(e) {
  e.preventDefault();
  let input = document.querySelector("input");
  let dato = input.value;
  if (dato) {
    let tarea = document.createElement("li");
    tarea.innerHTML = `${dato} <button type="button" class="btn btn-danger borrar">Eliminar Tarea</button>`;
    listadoTareas.appendChild(tarea);
    input.value = "";
  } else {
    alert("Usted no ingreso una tarea");
  }
}
