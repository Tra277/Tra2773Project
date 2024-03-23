const addBtn = document.getElementById('add-task-btn');
const inputBox = document.querySelector('#input-box');
const taskList = document.querySelector('.task-list');
const audio = document.querySelector('audio');
window.onclick = function(){
    audio.play();
}

// Xử lý khi ấn thêm tác vụ
addBtn.addEventListener('click',addToListTask);
// Xử lý khi người dúng nhấn "Enter"
inputBox.addEventListener('keydown', (event) => {
    if (event.keyCode === 13 || event.which === 13) {
        // Xử lý sự kiện khi người dùng nhấn phím Enter
        addToListTask();
    }
});
// Event with each task
taskList.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        setData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        setData();
    }
},false);
loadData();

// FUNCTION HANDLING
function addToListTask(){
    if(inputBox.value === ""){
        alert('you must enter something...');
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;        
        let span = document.createElement('span');
        span.innerHTML = 'x';
        li.appendChild(span);
        taskList.appendChild(li);
    }
    inputBox.value = "";
    setData();
}
function setData(){
    localStorage.setItem('data',taskList.innerHTML);
}

function loadData(){
    taskList.innerHTML = localStorage.getItem('data');
}

