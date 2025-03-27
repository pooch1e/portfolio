// capture elements
const aboutTextDiv = document.getElementById('about-text-box');
const listItems = document.querySelectorAll('li');
const headerTextBox = document.getElementById('text-box');

// object for text 
const contentMap = {
  intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel id error, assumenda quisquam dolore architecto corporis saepe cupiditate nemo nam esse ratione ipsum at, porro, cum autem! Neque, itaque eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus doloremque quam voluptatibus, suscipit nulla. Nisi tempore, rerum fugit suscipit fugiat, hic saepe dignissimos officiis animi quibusdam ducimus, facere accusamus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel id error, assumenda quisquam dolore architecto corporis saepe cupiditate nemo nam esse ratione ipsum at, porro, cum autem! Neque, itaque eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus doloremque quam voluptatibus, suscipit nulla. Nisi tempore, rerum fugit suscipit fugiat, hic saepe dignissimos officiis animi quibusdam ducimus, facere accusamus!',
  project1: 'tLorem ipsum dolor sit amet consectetur adipisicing elit. Vel id error, assumenda quisquam dolore architecto corporis saepe cupiditate nemo nam esse ratione ipsum at, porro, cum autem! Neque, itaque eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus doloremque quam voluptatibus, suscipit nulla. Nisi tempore, rerum fugit suscipit fugiat, hic saepe dignissimos officiis animi quibusdam ducimus, facere accusamus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel id error, assumenda quisquam dolore architecto corporis saepe cupiditate nemo nam esse ratione ipsum at, porro, cum autem! Neque, itaque eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus doloremque quam voluptatibus, suscipit nulla. Nisi tempore, rerum fugit suscipit fugiat, hic saepe dignissimos officiis animi quibusdam ducimus, facere accusamus!',
  project2: 'tLorem ipsum dolor sit amet consectetur adipisicing elit. Vel id error, assumenda quisquam dolore architecto corporis saepe cupiditate nemo nam esse ratione ipsum at, porro, cum autem! Neque, itaque eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus doloremque quam voluptatibus, suscipit nulla. Nisi tempore, rerum fugit suscipit fugiat, hic saepe dignissimos officiis animi quibusdam ducimus, facere accusamus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel id error, assumenda quisquam dolore architecto corporis saepe cupiditate nemo nam esse ratione ipsum at, porro, cum autem! Neque, itaque eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus doloremque quam voluptatibus, suscipit nulla. Nisi tempore, rerum fugit suscipit fugiat, hic saepe dignissimos officiis animi quibusdam ducimus, facere accusamus!hoo',
  project3: 'thLorem ipsum dolor sit amet consectetur adipisicing elit. Vel id error, assumenda quisquam dolore architecto corporis saepe cupiditate nemo nam esse ratione ipsum at, porro, cum autem! Neque, itaque eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus doloremque quam voluptatibus, suscipit nulla. Nisi tempore, rerum fugit suscipit fugiat, hic saepe dignissimos officiis animi quibusdam ducimus, facere accusamus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel id error, assumenda quisquam dolore architecto corporis saepe cupiditate nemo nam esse ratione ipsum at, porro, cum autem! Neque, itaque eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus doloremque quam voluptatibus, suscipit nulla. Nisi tempore, rerum fugit suscipit fugiat, hic saepe dignissimos officiis animi quibusdam ducimus, facere accusamus!t 3 ok'
}

// add event listener for list items
listItems.forEach((listItems) => {
  listItems.addEventListener('click', (e) => {
    const key = e.target.getAttribute('data-key');

    const content = contentMap[key];
    

    //update text div
    if (content) {
      aboutTextDiv.innerText = content;
    }

    // update title if intro is clicked
    if (content === contentMap.intro) {
      headerTextBox.innerText = 'INTRODUCTION'
    } else if (content === contentMap.project1) {
      headerTextBox.innerText = 'PROJECT 1'
    } else if (content === contentMap.project2) {
      headerTextBox.innerText = 'PROJECT 2'
    } else if (content === contentMap.project3) {
      headerTextBox.innerText = 'PROJECT 3'
    };
  })
})