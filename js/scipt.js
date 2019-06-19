let tasks = ([{
    id: 0,
    name: "Learn OOP in JavaScript",
    category: "Others",
    date: "2019-06-18",
    ifDone: false
}])

const btnAddTasks = document.querySelector('.form__item__task--button');
const taskName = document.querySelector('.form__item__task');
const taskCategories = document.querySelectorAll(".item__wrapper__button");
const taskDate = document.querySelector('.form__item__date');
const addButton = document.querySelector('.main__button--add');
const searchButton = document.querySelector('.main__button--search');
const addSection = document.querySelector('.main__add');
const searchSection = document.querySelector('.main__search');
let taskId = 0;
let chooseCategories = [];
let ifActiveCategory = false;

//document.querySelector('.form__item__date').valueAsDate = new Date();

addButton.addEventListener('click', () => {
    addButton.classList.add('main__button--active');
    searchButton.classList.remove('main__button--active');
    addSection.classList.add('main__add--active');
    searchSection.classList.remove('main__search--active');
})

searchButton.addEventListener('click', () => {
    addButton.classList.remove('main__button--active');
    searchButton.classList.add('main__button--active');
    addSection.classList.remove('main__add--active');
    searchSection.classList.add('main__search--active');
})


const createDiv = (Id, Name, Category, date) => {
    const br = document.createElement('br');

    const divTask = document.createElement('div');
    divTask.classList.add("main__active-tasks__item")
    divTask.dataset.id = `${Id}`;
    document.querySelector(".main__active-tasks").appendChild(divTask);

    
    const hTaskName = document.createElement('h3');
    hTaskName.classList.add("active-tasks__item__name");
    hTaskName.textContent = `Task: `;
    document.querySelector(`[data-id = "${Id}"]`).appendChild(hTaskName);

    const hSpanName = document.createElement('span');
    hSpanName.classList.add("item__name--span");
    hSpanName.textContent = ` ${Name}`;
    hSpanName.dataset.span_name = `${Id}`;
    document.querySelector(`[data-id = "${Id}"]`).appendChild(hSpanName);
    document.querySelector(`[data-span_name = "${Id}"]`).appendChild(br);


    const hTaskCategory = document.createElement('h3');
    hTaskCategory.classList.add("active-tasks__item__category");
    hTaskCategory.textContent = `Category: `;
    document.querySelector(`[data-id = "${Id}"]`).appendChild(hTaskCategory);

    const hSpanCategory = document.createElement('span');
    hSpanCategory.classList.add("item__category--span");
    hSpanCategory.textContent = ` ${Category}`;
    hSpanCategory.dataset.span_cat = `${Id}`;
    document.querySelector(`[data-id = "${Id}"]`).appendChild(hSpanCategory);
    document.querySelector(`[data-span_cat = "${Id}"]`).appendChild(br);

    const hTaskDate = document.createElement('h3');
    hTaskDate.classList.add("active-tasks__item__date");
    hTaskDate.textContent = `Deadline: `;
    document.querySelector(`[data-id = "${Id}"]`).appendChild(hTaskDate);
    
    const hSpanDate = document.createElement('span');
    hSpanDate.classList.add("item__category--date");
    hSpanDate.textContent = ` ${date}`;
    hSpanDate.dataset.span_date = `${Id}`;
    document.querySelector(`[data-id = "${Id}"]`).appendChild(hSpanDate);

}

createDiv(tasks[0].id, tasks[0].name, tasks[0].category, tasks[0].date);


[...taskCategories].forEach(category => {
    category.addEventListener('click', (event) => {
        event.preventDefault();
        if (!category.classList.contains('item__wrapper__button--active')) {
            category.classList.add('item__wrapper__button--active');
            chooseCategories.push(category.textContent);
            console.log(chooseCategories);
        } else if (category.classList.contains('item__wrapper__button--active')) {
            category.classList.remove('item__wrapper__button--active');
            chooseCategories.forEach((singleCategory) => {
                if (singleCategory == category.textContent) {
                    const index = chooseCategories.indexOf(singleCategory);
                    chooseCategories.splice(index, 1);
                    console.log(chooseCategories);
                }
            })
        }
    })
})

const cleanContent = () => {

}

btnAddTasks.addEventListener('click', (event) => {
    event.preventDefault();
    taskId++;
    const tName = taskName.value;
    let tCategory = "";
    tCategory = chooseCategories.join(' , ')
    const tDate = taskDate.value;

    tasks.push({
        id: taskId,
        name: tName,
        category: tCategory,
        date: tDate,
        ifDone: false
    });

    createDiv(taskId, tName, tCategory, tDate);
    singleCategory = "";
})

//tasks.filter((task) => {console.log(task.name == "JS")})