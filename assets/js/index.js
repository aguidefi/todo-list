const totalTask = document.querySelector('#total')
const readyTask = document.querySelector('#ready')
const formAddTask = document.querySelector('#addTask')
const taskTable = document.querySelector('#taskTable')
const taskInput = document.querySelector('#taskInput')
const addBtn = document.querySelector('#add-btn')

let tareas = [
  {
    titulo:'tomar agua al despertar',
    estado: false,
    id: Math.floor(Math.random() * 100)
  },
  {
    titulo: 'hacer ejercicio',
    estado: true,
    id: Math.floor(Math.random() * 100)
  },
  {
    titulo: 'Escrituras matutinas',
    estado: false,
    id: Math.floor(Math.random() * 100)
  }
];


function agregarTarea(tareas){
  let html = "";
  for (let todo of tareas){
    html += `
    <tr>
        <td>
            <p>${todo.id}</p>
        </td>
        <td>
            <p ${todo.estado ? 'class="green"' : ''}>${todo.titulo}</p>
        </td>
        <td>
            <input type="checkbox" id="${todo.id}" class="task-check" ${todo.estado ? 'checked' : ''}>
        </td>
        <td>
            <button onclick="eliminarTarea(${todo.id}" class="delete")>X</button>
        </td>
    </tr> 
    `
  }
  taskTable.innerHTML = html;
  validacion();
  contador (tareas)
}

  addBtn.addEventListener("click", () => {
    const task = taskInput.value
    const tareaNueva = {
      id: Math.floor(Math.random() * 100),
      titulo: task,
      estado: false
    }
    tareas.push(tareaNueva)
    taskInput.value = ""
    agregarTarea(tareas);
  })
  
  function eliminarTarea(id){
    const index = tareas.findIndex((e) => e.id === id)
    tareas.splice(index,1)
    agregarTarea(tareas)
  }
  
  function validacion () {
    const actividades = document.querySelectorAll('input [type="checkbox"]')
    actividades.forEach(doneTodo => {
      doneTodo.addEventListener("change", function () {
        const todoId = Numbre(this.id)
        const xId = tareas.findIndex(todo => todo.id === todoId)
        tareas[xId].estado = !tareas[xId].estado
        agregarTarea(tareas)
      })
    })
  }

  function contador (tareas) {
    totalTask.innerHTML = `<li>Total: <b> ${tareas.length} </b>`
    const findDone = tareas.filter( todo => todo.estado === true)
    readyTask.innerHTML = `<li>Realizadas: <b> ${findDone.length} </b>`
  }

agregarTarea(tareas);