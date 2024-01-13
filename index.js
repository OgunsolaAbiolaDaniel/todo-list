 let upDate;
 let arrayTasks =[];
 // our button to add
document.querySelector('button').addEventListener('click',add);

const insertedUl = document.querySelector('.inserted')


function remove(taskid){
    arrayTasks = arrayTasks.filter(task => task.id !== taskid)
    updateUI()
}


function updateUI() {
    console.log(arrayTasks)
    insertedUl.innerHTML = ''
    for (let index = 0; index < arrayTasks.length; index++) {
        // array[0]
        const task = arrayTasks[index];
        upDate = document.createElement('li');
        upDate.innerHTML= `${task.time} | ${task.task} <button type="button" onclick="remove(${task.id})">remove</button>`;
        insertedUl.appendChild(upDate);
    }
}

function add(){
    let timeInput = document.querySelector('#time'); 
    let taskInput = document.querySelector('#tasks');
    arrayTasks.push({
        id: arrayTasks.length + 1,
        time: timeInput.value,
        task: taskInput.value,
        isDone: false,

    })
    updateUI()
}