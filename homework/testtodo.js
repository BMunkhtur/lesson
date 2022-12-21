const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
//
todoBtn.addEventListener('click', createPost);
todoList.addEventListener('click', deletePost);
todoList.addEventListener('click', completePost);
todoList.addEventListener('click', editPost);
//
function createPost(e) {
  event.preventDefault();

  const item = document.createElement("li");
  item.classList.add('todo-item');
  
  const task = document.createElement("input");
  task.setAttribute('readonly', true);
  task.value = todoInput.value;
  task.classList.add('todo');
  item.append(task);
//
  const completedBtn = document.createElement('button');
  completedBtn.innerHTML = '<i class="fas fa-check"></i>';
  completedBtn.classList.add("completed-btn");
  completedBtn.type = 'button';
  item.appendChild(completedBtn);
//
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.classList.add("trash-btn");
  deleteBtn.type = 'button';
  item.appendChild(deleteBtn);
//
  const editBtn = document.createElement('button');
  editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square "></i>';
  editBtn.classList.add("edit-btn");
  editBtn.type = 'button';
  item.appendChild(editBtn);
//
  todoList.appendChild(item);
  todoInput.value = "";
}
//
function deletePost(e) {
  const item = e.target;
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.remove();
  }
}
//
function completePost(e) {
  const item = e.target;
  if (item.classList[0] === 'completed-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}
//
function editPost(e) {
  const item = e.target;
  if (item.classList[0] === 'edit-btn') {
    const todo = item.parentElement;
    item.classList.toggle('editMode');
    todo.firstElementChild.toggleAttribute('readonly');
  }
}