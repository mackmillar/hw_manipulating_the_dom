document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleNewItem);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItem = function (event) {
    event.preventDefault();
  
    const stackItem = createStackItem(event.target);
    const stackList = document.querySelector('#stack-list');
    stackList.appendChild(stackItem);
  
    event.target.reset();
}

const createStackItem = function (form) {
    const stackItem = document.createElement('li');
    stackItem.classList.add('stack-list-item');

    const title = document.createElement('h1');
    title.textContent = form.title.value;
    stackItem.appendChild(title);

    const confusion = document.createElement('h2');
    confusion.textContent = form.confusion.value;
    stackItem.appendChild(confusion); 

    const framework = document.createElement('h3');
    framework.textContent = form.framework.value;
    stackItem.appendChild(framework);

    return stackItem;
  }

  const handleDeleteAllClick = function () {
    const stackList = document.querySelector('#stack-list');
    stackList.remove();
  }