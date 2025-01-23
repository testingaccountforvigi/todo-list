// Filter tasks (example: show only incomplete tasks)
function filterTasks() {
    const filterInput = document.getElementById('filterInput'); // Assuming you have an input for filtering
    const filterValue = filterInput.value.toLowerCase();

    taskList.innerHTML = ''; 

    tasks.forEach(task => {
        if (filterValue === '' || !task.completed) { 
            // Show all tasks or only incomplete tasks
            const listItem = createListItem(task); 
            taskList.appendChild(listItem);
        }
    });
}

// Create reusable list item function
function createListItem(task) { 
    // ... (same as in script.js)
}

// Add event listener to filter input
if (document.getElementById('filterInput')) { // Check if filter input exists
    document.getElementById('filterInput').addEventListener('input', filterTasks);
}

// Validation (example: disallow empty tasks)
// (Already implemented in script.js: addTask function)