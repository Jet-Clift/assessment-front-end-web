let form = document.querySelector('#task-form')
let input = document.querySelector('#task-input')
let taskContainer = document.querySelector('#task-container')

let handleSubmit = (evt) => {
    evt.preventDefault()
    let newTask = input.value
    let task = document.createElement('h4')
    task.className = "task"
    task.textContent = newTask
    taskContainer.appendChild(task)
    input.value = ''
    input.focus()
    console.log(task)
}

form.addEventListener('submit', handleSubmit)

































