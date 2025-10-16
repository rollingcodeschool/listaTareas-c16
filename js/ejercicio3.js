const btnAgregar = document.getElementById("agregar");
const listadoTareas = document.getElementById('listadotareas')
btnAgregar.addEventListener("click", agregarTarea);

console.log(btnAgregar);

function agregarTarea(e) {
  e.preventDefault();

  let input = document.querySelector("input");
  let dato = input.value;
  if (dato) {
    let tarea = document.createElement("li");
    tarea.innerHTML = `${dato} <button type="button" class="btn btn-danger borrar">Eliminar Tarea</button>`;
    listadoTareas.appendChild(tarea);
    borrarTarea();
    input.value = "";
  } else {
    alert("Usted no ingreso una tarea");
  }
}

function borrarTarea() {
  const tareas = document.querySelectorAll(".borrar");
  console.log(tareas)
  tareas.forEach((borrar) =>
    borrar.addEventListener("click", (tarea) =>
      tarea.currentTarget.parentElement.remove()
    )
  );
}