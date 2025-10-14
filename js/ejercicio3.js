const btnAgregar = document.getElementById("agregar");
btnAgregar.addEventListener("click", agregarTarea);

console.log(btnAgregar);
function agregarTarea(e) {
  e.preventDefault();
  const padre = document.querySelector("form");
  let input = document.querySelector("input");
  let dato = input.value;
  if (dato) {
    let tarea = document.createElement("li");
    tarea.innerHTML = `${dato} <button type="button" class="btn btn-danger borrar">Eliminar Tarea</button>`;
    padre.appendChild(tarea);
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