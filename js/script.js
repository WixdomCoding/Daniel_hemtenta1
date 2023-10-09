var form = document.querySelector('form');
var uppgiftslista = document.getElementById('uppgiftslista');
var uppgiftArray = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var uppgiftText = document.getElementById('uppgift').value;
    var nyUppgift = document.createElement('li');
    var nyButton = document.createElement('button');
    var editButton = document.createElement('button');

    nyUppgift.className = 'list-group-item border';
    
    var row = document.createElement('div');
    row.className = 'row';

    var colText = document.createElement('div');
    colText.className = 'col';
    colText.textContent = uppgiftText;

    var colButton = document.createElement('div');
    colButton.className = 'col-auto';

    nyButton.textContent = 'Delete';
    nyButton.className = 'btn btn-dark me-2';

    nyButton.addEventListener('click', function() {
        var listParentNode = nyUppgift.parentNode;
        var listContainerParentNode = listParentNode.parentNode;
        var listItems = Array.from(listContainerParentNode.children);
        var indexToRemove = listItems.indexOf(listParentNode);

        uppgiftArray.splice(indexToRemove, 1);
        nyUppgift.remove();
        printValues();
    });

    editButton.textContent = 'Edit';
    editButton.className = 'btn btn-dark';
    editButton.addEventListener('click', function() {
        var updatedText = prompt('Edit the text:', uppgiftText);
        if (updatedText !== null) {
            colText.textContent = updatedText;
            uppgiftArray[uppgiftArray.indexOf(uppgiftText)] = updatedText;
        }
    });

    colButton.appendChild(nyButton);
    colButton.appendChild(editButton);
    row.appendChild(colText);
    row.appendChild(colButton);
    nyUppgift.appendChild(row);

    uppgiftArray.push(uppgiftText);

    uppgiftslista.appendChild(nyUppgift);

    document.getElementById('uppgift').value = '';
    printValues();
});

function printValues() {
    console.log(uppgiftArray);
}