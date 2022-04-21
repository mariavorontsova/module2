let buttonToDo = document.querySelector('.button-container'); //находим кнопку добавить
let inputToDo = document.querySelector('.form-to-do-list') //находим инпут
let buttonSort = document.querySelector('.sort-button-list'); // находим копку сортировки 
let formList = document.querySelector('.form'); // находим список задач
let toDoList = document.querySelector('.list'); //находим todolist

let arrayToDo = []; //массив списка задач

buttonToDo.addEventListener('click', (e) => {
    clickButtonToDo(e);
})
buttonSort.addEventListener('click', (e) => {
    clickSortButton(e);
}) 
//document.addEventListener('keydown', (e) => e.key == enter)

function clickButtonToDo (event) {
    console.log('click'); //event.prevent ставим в том случае, 
    //если в индексе стоит button вместо div
if (inputToDo.value === '' || inputToDo.value === ' ') { //проверка на пробел и пустую строку
    console.log('error')
    return
} else {
    arrayToDo.push(inputToDo.value) //добавляем значение инпута в массив
    addTask(inputToDo.value) //вызов функции/передача строки, которую ввел пользователь
    inputToDo.value = ''; // зачищение инпута после ввода текста
    toDoList.style.display = 'block'; //todolist сделали видимым

}}

function addTask (newTaskName) { //обновление и стилизация блока, создание визуала
let newElementDiv = document.createElement('div'); //создаем div пустой
newElementDiv.innerText = newTaskName; //записывается переданная строка 
toDoList.append(newElementDiv); //добавялем элемент в todolist
let newDeleteButton = createDeleteButton(); //создаем новую переменную и присваиваем выполнение функции
newElementDiv.classList.add('text-list');
//добавить стилизацию
createDeleteButton(newElementDiv);
newElementDiv.append(newDeleteButton);
}
    
function createDeleteButton () {
let deleteButton = document.createElement('button'); //создаем кнопку
deleteButton.type = 'button'; //тип
deleteButton.innerText = 'X'; 
let deleteButtonClass = deleteButton.classList; 
deleteButtonClass.add('delete-button');
deleteButton.style.position = 'relative'; 
deleteButton.style.border = '#C4C4C4';
deleteButton.style.cursor = 'pointer';
deleteButton.style.borderRadius = '50%';
deleteButton.style.right = '16px';
deleteButton.addEventListener('click', clickDeleteButton);
return deleteButton //результат выполнения функции
}

function clickDeleteButton () {  //удалить из div и удалить из массива 
let previousElementDiv = this.closest('.text-list');
console.log(previousElementDiv);
previousElementDiv.remove();
let str = previousElementDiv.innerText;
console.log('str', str);
console.log('arrayToDo', arrayToDo);
toDoList.style.display = 'block';
let elementArr = arrayToDo.indexOf(str);
arrayToDo.splice(elementArr, 1);
console.log(arrayToDo);
}

function clickSortButton () {
if (toDoList.innerText = '') {
    return
} else {
  let formSort = document.querySelectorAll('.text-list'); //находим все элементы с классом text-list
  arrayToDo.sort(compareList);//сортировка массива в который пушим task
  console.log(arrayToDo);
  //console.log(formSort);

  formSort.forEach((element, i, array) => {
      arr[i].innerHTML = ''; //очистка каждого элемента
      arr[i].innerHTML = arrayToDo[i]; //вставляем значение из отсортированного массива

      let deleteButton = createDeleteButton();
      element.append(deleteButton); 
  })
  buttonSort.classList = buttonSort.classList = 'sort-button-list' 
  ? 'sort-button-list-two' : 'sort-button-list'
  //buttonSort.classList = buttonSort.classList == 'button-sort-list-one - стрелка сортировки вверх' ? 'button-sort-list-two 
  //- стрелка сортировки вниз' : 'button-sort-list-one - стрелка сортировки вверх'
}
console.log(arrayToDo);
}


function compareList (a,b) { // ? не поняла функцию
return buttonSort.classList == 'sort-button-list'
? a < b
? -1
: a > b 
? 1
: 0
: a < b 
? 1
: a > b 
? -1
: 0;
}









