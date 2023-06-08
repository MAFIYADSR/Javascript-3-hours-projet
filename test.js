function test(event) {
    event.preventDefault();
    const expenseamount = document.getElementById('expenseamount').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;

    const obj = {
        expenseamount,
        description,
        category
    }
    localStorage.setItem(obj.category, JSON.stringify(obj));
    showUserOnScreen(obj);
}

function showUserOnScreen(obj)
{
    const parentElem = document.getElementById('listofitems');
    const childElem = document.createElement('li');
    childElem.textContent = obj.expenseamount + ' - ' + obj.description + ' - ' + obj.category;
    parentElem.appendChild(childElem);

    const deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.value = "Delete Expenses";
    deleteButton.onclick = () =>{
        localStorage.removeItem(obj.category);
        parentElem.removeChild(childElem);
    }
    childElem.appendChild(deleteButton);

    const editButton = document.createElement('input');
    editButton.type = "button";
    editButton.value = "Edit Expenses";
    editButton.onclick = () =>{
        localStorage.removeItem(obj.category);
        document.getElementById('expenseamount').value = obj.expenseamount;
        document.getElementById('description').value = obj.description;
        document.getElementById('category').value = obj.category;
        parentElem.removeChild(childElem);
    }
    childElem.appendChild(editButton);

}