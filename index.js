//Variaveis
const input = document.getElementById('input-task');
const inputBtn = document.getElementById('add-task');
const body = document.body;
const taskDiv = document.getElementById('task-div');


//Capturando input e criando task
inputBtn.addEventListener( 'click', function enviar(){
    console.log(input.value);

    let newTask = document.createElement("div");
    newTask.classList.add("newTask");

    let task = document.createElement("p");
    task.innerHTML = input.value;
    task.style.cssText = "fontSize: 20px;";

    let divTask = document.createElement('div');
    divTask.classList.add('pDiv')
    divTask.appendChild(task)
    newTask.appendChild(divTask);

    let complete = document.createElement("button");
    complete.innerHTML = `<span>&#10004</span>`;
    complete.addEventListener('click', function(){
        taskDiv.removeChild(newTask);
    });
    complete.classList.add('btn');

    let remove = document.createElement("button");
    remove.innerHTML = `<span>&#10006</span>`;
    remove.addEventListener('click', function(){
        taskDiv.removeChild(newTask);
    });
    remove.classList.add('btn');

    let divBtn = document.createElement("div");
    divBtn.appendChild(complete);
    divBtn.appendChild(remove);
    newTask.appendChild(divBtn);
    
    if (input.value === ""){
        alert('Please enter the text!');
    } else {
        taskDiv.appendChild(newTask);
        input.value = "";
    }
    
});

//



