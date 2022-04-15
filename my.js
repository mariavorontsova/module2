let buttonToDo = document.querySelector('.button-container'); //находим кнопку добавить
let inputToDo = document.querySelector('.form-to-do-list') //находим инпут
let buttonSort = document.querySelector('.sort-button'); // находим копку сортировки 
let formList = document.querySelector('.form'); // находим список задач
let toDoList = document.querySelector('.list'); //находим todolist

let arrayToDo = []; //массив списка задач

/*document.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        clickButtonToDo(e)
    } else {
        return;
    }
})

/*buttonSort.addEventListener('click', clickSortButton) // навесили обработчик на кнопку сортировки*/

/*buttonSort.addEventListener('click', (e) => {
    clickSortButton(e)
})*/

buttonToDo.addEventListener('click', (e) => {
    clickButtonToDo(e);
})

function clickButtonToDo (event) {
    console.log('click'); //event.prevent ставим в том случае, 
    //если в индексе стоит button вместо div
if (inputToDo.value === '' || inputToDo.value === ' ') { //проверка на пробел и пустую строку
    console.log('error')
    return
} else {
    arrayToDo.push(inputToDo.value) //добавляем значение инпута в массив
    addTask(inputToDo.value) //вызов функции/передача строки, которую ввел пользователь
    inputToDo.value = ''; //
    toDoList.style.display = 'block'; //todolist сделали видимым
}}

function addTask (newTaskName) { //обновление и стилизация блока, создание визуала
let newElementDiv = document.createElement('div'); //создаем div пустой
newElementDiv.innerText = newTaskName; //записывается переданная строка 
toDoList.append(newElementDiv); //добавялем элемент в todolist
let newDeleteButton = createDeleteButton(); //создаем новую переменную и присваиваем выполнение функции
newElementDiv.classList.add('text-list');
//добавить стилизацию
newElementDiv.append(newDeleteButton);
createDeleteButton(newElementDiv);
}

function createDeleteButton () {
let deleteButton = document.createElement('button'); //создаем кнопку
deleteButton.type = 'button';
deleteButton.innerText = 'X';
let deleteButtonClass = deleteButton.classList; 
deleteButtonClass.add('delete-button');
/*deleteButton.addEventListener('click', clickDeleteButton)*/
return deleteButton
}


/*function clickDeleteButton () {
let elementDiv = this.closest('list_content');
console.log(elementDiv);
elementDiv.remove();
let str = elementDiv.innerText;
}

//function clickSortButton () {}
function clickSortButton {
    сделать проверку на наличие элементов в списке (list)
    если display block, тогда будем сортировать
    let listToSort (находим querySelector('list_content'), если до этого не находили)
    arrayToDO.sort(compareList)
    buttonSort.classList = buttonSort.classList == 'button-sort-list-one - стрелка сортировки вверх' ? 'button-sort-list-two - стрелка сортировки вниз' 
    : 'button-sort-list-one - стрелка сортировки вверх' (тернарный оператор)
    listToSort.forEach((element,index,array) => {
        arr[i] = ''
        arr[i] = arrayToDO[i]
        let deleteButton = createDeleteButton();
        element.append(deleteButton)
    });

}

function compareList () {
buttonSort.classList == 'button-sort-list-one' ?
a > b return 1
}

function clickDeleteButton () {
    let elementDiv = this.closest('list_content');
    elementDiv.remove();
    let str = elementDiv.innerText;
    console.log(str) проверить, чтобы именно текст был в строке
    найти индекс строки
    удалить из массива

    toDoList.innerText = '' сделать невидимым (display none)
}*/




