const label1 = document.getElementById('project-1');
const listItems1 = document.getElementById('secret-message-1');

const label2 = document.getElementById('project-2');
const listItems2 = document.getElementById('secret-message-2');

const label3 = document.getElementById('project-3');
const listItems3 = document.getElementById('secret-message-3');

const label4 = document.getElementById('project-4');
const listItems4 = document.getElementById('secret-message-4');

const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}

label1.addEventListener('click', () => {
  toggleHiddenElement(listItems1);
});

label2.addEventListener('click', () => {
  toggleHiddenElement(listItems2);
});

label3.addEventListener('click', () => {
  toggleHiddenElement(listItems3);
});

label4.addEventListener('click', () => {
  toggleHiddenElement(listItems4);
});
