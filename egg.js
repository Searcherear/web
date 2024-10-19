// Function to switch between sections
function showSection(sectionId) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => section.classList.add('hidden'));

  const targetSection = document.getElementById(sectionId);
  targetSection.classList.remove('hidden');
}

// Add tasks to the to-do list
function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();
  
  if (taskText) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    document.getElementById('todo-list').appendChild(taskItem);
    taskInput.value = ''; // Clear input field
  }
}
