let tasks = ([{
    id: 0,
    name: "Learn OOP in JavaScript",
    category: "others",
    date: "2019-06-18",
    ifDone: false
}])

const btnAddTasks = document.querySelector('.main__button');
const taskName = document.querySelector('#form__text');
const taskCategory = document.querySelector("#form__category");
const taskDate = document.querySelector('#form__date');
let taskId = 0;



const createDiv = (Id, Name, Category, date) => {
    const divTask = document.createElement('div');
    divTask.classList.add("active-tasks__item")
    divTask.dataset.id = `${Id}`;

    const hTaskName = document.createElement('h2');
    hTaskName.classList.add("task__name");
    hTaskName.textContent = `${Name}`;

    const hTaskCategory = document.createElement('h3');
    hTaskCategory.classList.add("task__category");
    hTaskCategory.textContent = `${Category}`;

    const hTaskDate = document.createElement('h4');
    hTaskDate.classList.add("task__date");
    hTaskDate.textContent = `${date}`;

    document.querySelector(".active-tasks").appendChild(divTask);
    document.querySelector(`[data-id = "${Id}"]`).appendChild(hTaskName);
    document.querySelector(`[data-id = "${Id}"]`).appendChild(hTaskCategory);
    document.querySelector(`[data-id = "${Id}"]`).appendChild(hTaskDate);
}

createDiv(tasks[0].id, tasks[0].name, tasks[0].category, tasks[0].date);


const cleanContent = () => {

}

btnAddTasks.addEventListener('click', () => {
    taskId++;
    const tName = taskName.value;
    const tCategory = taskCategory.value;
    const tDate = taskDate.value;

    tasks.push({
        id: taskId,
        name: tName,
        category: tCategory,
        date: tDate,
        ifDone: false
    });

    createDiv(taskId, tName, tCategory, tDate);
})

//tasks.filter((task) => {console.log(task.name == "JS")})