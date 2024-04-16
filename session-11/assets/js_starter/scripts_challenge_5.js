// Challenge 5 Starter
const sidebar = document.querySelector('.sidebar ul');

function toggleSidebarContent() {
  // Your code goes here
  if (sidebar.hasChildNodes()){
    for (let i = 0; i < 2; i ++){
      sidebar.removeChild(sidebar.firstChild);
    }
    // sidebar.removeChild(sidebar.firstChild);
    let paragraph = document.createElement("p");
    paragraph.textContent = "Oh line deleted!"
    sidebar.appendChild(paragraph);
  }
}

// Add a button to toggle the sidebar content
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Sidebar Content';
toggleButton.addEventListener('click', toggleSidebarContent);

// Append the button to the body
document.body.appendChild(toggleButton);
