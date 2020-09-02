tasks = []
if(!localStorage.getItem('Tasks')){
    localStorage.setItem('Tasks', JSON.stringify(tasks))
}

function display(){
    var ul = document.querySelector('ul')
    var h2 = document.querySelector('h2')
    h2.style.display = 'none'
    ul.innerHTML = ''
    var allTasks = JSON.parse(localStorage.getItem('Tasks'))
    tasks = allTasks
    for(i=0;i<tasks.length;i++){
        var li = document.createElement('li')
        var del = document.createElement('h3')
        var val = document.createElement('p')
        val.innerHTML = tasks[i]
        del.innerHTML = '&#9940'
        // del.onclick = deleteTask.val(i)
        
        li.append(del)
        li.innerHTML = `<h3 onclick='deleteTask(index=${i})'>&#9940</h3>`
        li.append(val)
        ul.append(li)
    }
    if(tasks.length === 0){
        h2.style.display = 'flex';
    }
}

function deleteTask(index){
    tasks.splice(index, 1)
    localStorage.setItem('Tasks', JSON.stringify(tasks))
    display()
}

function addTask(task){
    tasks.push(task)
    localStorage.setItem('Tasks', JSON.stringify(tasks))
}


document.querySelector('form').onsubmit = ()=>{
    var task = document.querySelector('input')
    addTask(task.value)
    task.value = ''
    display()
    return false
}

display()