let tasks = ([{
    id: 0,
    name: "JS",
    category: "others",
    date: "2019-06-18",
    ifDone: false
}])





const btnAddTasks = document.querySelector('.main__button');
const taskName = document.querySelector('#form__text');
const taskCategory = document.querySelector("#form__category");
const taskDate = document.querySelector('#form__date');
let taskId = 0;


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

    const divTask = document.createElement('div');
    divTask.classList.add("active-task__item")
    divTask.dataset.id = `${taskId}`;

    const hTaskName = document.createElement('h2');
    hTaskName.classList.add("task__name");
    hTaskName.textContent = `${tName}`;

    const hTaskCategory = document.createElement('h3');
    hTaskCategory.classList.add("task__category");
    hTaskCategory.textContent = `${tCategory}`;

    const hTaskDate = document.createElement('h4');
    hTaskDate.classList.add("task__date");
    hTaskDate.textContent = `${tDate}`;

    document.querySelector(".active-tasks").appendChild(divTask);
    document.querySelector(`[data-id = "${taskId}"]`).appendChild(hTaskName);
    document.querySelector(`[data-id = "${taskId}"]`).appendChild(hTaskCategory);
    document.querySelector(`[data-id = "${taskId}"]`).appendChild(hTaskDate);

})

//tasks.filter((task) => {console.log(task.name == "JS")})
