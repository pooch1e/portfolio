// start small, target about me div to fill text when page called and when intro is clicked

// capture intro div text box
const pageContent = document.getElementById('page-content');
const rightFrameDiv = document.getElementById('right-frame');
const aboutTextDiv = document.getElementById('about-text-box');
const introDiv = document.getElementById('li');
const introTextBox = document.getElementById('text-box')
// text box intro = joel at the beginning
// introTextBox.innerHTML = 'JOEL KRAM';


// function for when clicked to load the content
const introClick = introDiv.addEventListener('click', (e) => {
  console.log(e);
  console.log("Attempting to add text to info div dynamically")
  aboutTextDiv.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel id error, assumenda quisquam dolore architecto corporis saepe cupiditate nemo nam esse ratione ipsum at, porro, cum autem! Neque, itaque eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus doloremque quam voluptatibus, suscipit nulla. Nisi tempore, rerum fugit suscipit fugiat, hic saepe dignissimos officiis animi quibusdam ducimus, facere accusamus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel id error, assumenda quisquam dolore architecto corporis saepe cupiditate nemo nam esse ratione ipsum at, porro, cum autem! Neque, itaque eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus doloremque quam voluptatibus, suscipit nulla. Nisi tempore, rerum fugit suscipit fugiat, hic saepe dignissimos officiis animi quibusdam ducimus, facere accusamus!'
  
  // STARTING WITH JOELKRAM AND CHANGING TO INTRODCUTION
  introTextBox.innerText = 'INTRODUCTION';

})