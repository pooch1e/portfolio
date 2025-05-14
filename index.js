// capture elements
const aboutTextDiv = document.getElementById('about-text-box');
const listItems = document.querySelectorAll('li');
const headerTextBox = document.getElementById('text-box');

// object for text
const contentMap = {
  intro: `Hello! I'm Joel Kram
  A multidisciplinary developer and designer who is interested in creating engaging and entertaining user experiences. ✨ `,
  draw: 'tLorem ipsum dolor sit amet consectetur adipisicing elit. Vel id error, assumenda quisquam dolore architecto corporis saepe cupiditate nemo nam esse ratione ipsum at, porro, cum autem! Neque, itaque eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus doloremque quam voluptatibus, suscipit nulla. Nisi tempore, rerum fugit suscipit fugiat, hic saepe dignissimos officiis animi quibusdam ducimus, facere accusamus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel id error, assumenda quisquam dolore architecto corporis saepe cupiditate nemo nam esse ratione ipsum at, porro, cum autem! Neque, itaque eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus doloremque quam voluptatibus, suscipit nulla. Nisi tempore, rerum fugit suscipit fugiat, hic saepe dignissimos officiis animi quibusdam ducimus, facere accusamus!',
  project2:
    'tLorem ipsum dolor sit amet consectetur adipisicing elit. Vel id error, assumenda quisquam dolore architecto corporis saepe cupiditate nemo nam esse ratione ipsum at, porro, cum autem! Neque, itaque eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus doloremque quam voluptatibus, suscipit nulla. Nisi tempore, rerum fugit suscipit fugiat, hic saepe dignissimos officiis animi quibusdam ducimus, facere accusamus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel id error, assumenda quisquam dolore architecto corporis saepe cupiditate nemo nam esse ratione ipsum at, porro, cum autem! Neque, itaque eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus doloremque quam voluptatibus, suscipit nulla. Nisi tempore, rerum fugit suscipit fugiat, hic saepe dignissimos officiis animi quibusdam ducimus, facere accusamus!hoo',
  project3:
    'thLorem ipsum dolor sit amet consectetur adipisicing elit. Vel id error, assumenda quisquam dolore architecto corporis saepe cupiditate nemo nam esse ratione ipsum at, porro, cum autem! Neque, itaque eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus doloremque quam voluptatibus, suscipit nulla. Nisi tempore, rerum fugit suscipit fugiat, hic saepe dignissimos officiis animi quibusdam ducimus, facere accusamus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel id error, assumenda quisquam dolore architecto corporis saepe cupiditate nemo nam esse ratione ipsum at, porro, cum autem! Neque, itaque eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus doloremque quam voluptatibus, suscipit nulla. Nisi tempore, rerum fugit suscipit fugiat, hic saepe dignissimos officiis animi quibusdam ducimus, facere accusamus!t 3 ok',
};

// add event listener for list items and update content when clicked on list
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
      headerTextBox.innerText = 'INTRODUCTION';
    } else if (content === contentMap.draw) {
      headerTextBox.innerText = 'DRAW ON ME';
    } else if (content === contentMap.project2) {
      headerTextBox.innerText = 'PROJECT 2';
    } else if (content === contentMap.project3) {
      headerTextBox.innerText = 'ART';
    }
  });
});

// add dots to index line
function addDots() {
  // Select the parent container where the dots will be added
  const indexBox = document.getElementById('index-box');

  // Function to add a line of dots dynamically
  function addDotsLine() {
    // Create a container for the dots
    const lineContainer = document.createElement('div');

    // Create the dots
    for (let i = 0; i < 1; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      lineContainer.appendChild(dot); // Add each dot to the container
    }

    // Add a line break after the dots
    const lineBreak = document.createElement('br');
    lineContainer.appendChild(lineBreak);

    // Append the line container to the parent container
    indexBox.appendChild(lineContainer);
  }

  let listLength = Object.keys(contentMap).length; // length of content map
  console.log(listLength);

  // Add multiple lines of dots dynamically
  for (let i = 0; i < listLength; i++) {
    // adds as many contentMap items there are
    addDotsLine();
  }
}

//on load

addDots();
