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
const activeTask = document.querySelector('.main__active-tasks');
const finishedTask = document.querySelector('.main__finished-tasks');
const searchedTask = document.querySelector('.main__searched-tasks');
const searchedTaskName = document.querySelector('.search__item__task');
let taskId = 0;
let chooseCategories = [];
let ifDone = false;



document.querySelector('.form__item__date').valueAsDate = new Date();

addButton.addEventListener('click', () => {
    addButton.classList.add('main__button--active');
    searchButton.classList.remove('main__button--active');
    addSection.classList.add('main__add--active');
    searchSection.classList.remove('main__search--active');
    activeTask.classList.remove('main__active-tasks--disable');
    finishedTask.classList.remove('main__finished-tasks--disable');
    searchedTask.classList.remove('main__searched-tasks--active');
})

searchButton.addEventListener('click', () => {
    addButton.classList.remove('main__button--active');
    searchButton.classList.add('main__button--active');
    addSection.classList.remove('main__add--active');
    searchSection.classList.add('main__search--active');
    activeTask.classList.add('main__active-tasks--disable');
    finishedTask.classList.add('main__finished-tasks--disable');
    searchedTask.classList.add('main__searched-tasks--active');

})


const createDivActive = (Id, Name, Category, date) => {

    const divTask = document.createElement('div');
    divTask.classList.add("main__active-tasks__item")
    divTask.dataset.id = `${Id}`;
    document.querySelector(".main__active-tasks").appendChild(divTask);


    const hTaskName = document.createElement('h3');
    hTaskName.classList.add("active-tasks__item__name");
    hTaskName.textContent = `Task: `;
    hTaskName.dataset.name = `${Id}`
    document.querySelector(`[data-id = "${Id}"]`).appendChild(hTaskName);

    const hSpanName = document.createElement('span');
    hSpanName.classList.add("item__name--span");
    hSpanName.textContent = ` ${Name}`;
    hSpanName.dataset.span_name = `${Id}`;
    document.querySelector(`[data-name = "${Id}"]`).appendChild(hSpanName);


    const hTaskCategory = document.createElement('h3');
    hTaskCategory.classList.add("active-tasks__item__category");
    hTaskCategory.textContent = `Category: `;
    hTaskCategory.dataset.cat = `${Id}`
    document.querySelector(`[data-id = "${Id}"]`).appendChild(hTaskCategory);

    const hSpanCategory = document.createElement('span');
    hSpanCategory.classList.add("item__category--span");
    hSpanCategory.textContent = ` ${Category}`;
    hSpanCategory.dataset.span_cat = `${Id}`;
    document.querySelector(`[data-cat = "${Id}"]`).appendChild(hSpanCategory);


    const hTaskDate = document.createElement('h3');
    hTaskDate.classList.add("active-tasks__item__date");
    hTaskDate.textContent = `Deadline: `;
    hTaskDate.dataset.date = `${Id}`;
    document.querySelector(`[data-id = "${Id}"]`).appendChild(hTaskDate);

    const hSpanDate = document.createElement('span');
    hSpanDate.classList.add("item__date--span");
    hSpanDate.textContent = ` ${date}`;
    hSpanDate.dataset.span_date = `${Id}`;
    document.querySelector(`[data-date = "${Id}"]`).appendChild(hSpanDate);


    const hBinIcon = document.createElement('i');
    hBinIcon.classList.add("fas");
    hBinIcon.classList.add("fa-trash-alt");
    hBinIcon.classList.add("active-tasks__item__icon");
    hBinIcon.dataset.bin = `${Id}`;
    document.querySelector(`[data-id = "${Id}"]`).appendChild(hBinIcon);

    const switchDiv = document.createElement('div');
    switchDiv.classList.add('active-tasks__item__switch')
    switchDiv.textContent = "Finished ?";
    switchDiv.dataset.switch = `${Id}`;
    document.querySelector(`[data-id = "${Id}"]`).appendChild(switchDiv);

    const switchDivWrapper = document.createElement('div');
    switchDivWrapper.classList.add('active-tasks__item__switch--wrapper');
    switchDivWrapper.dataset.wrapper = `${Id}`;
    document.querySelector(`[data-switch = "${Id}"]`).appendChild(switchDivWrapper);

    const switchDivWrapperFalse = document.createElement('div');
    switchDivWrapperFalse.classList.add('active-tasks__item__switch--false');
    switchDivWrapperFalse.textContent = "false"
    switchDivWrapperFalse.dataset.false = `${Id}`;
    document.querySelector(`[data-wrapper = "${Id}"]`).appendChild(switchDivWrapperFalse);

    const switchDivWrapperTrue = document.createElement('div');
    switchDivWrapperTrue.classList.add('active-tasks__item__switch--true');
    switchDivWrapperTrue.textContent = "true"
    switchDivWrapperTrue.dataset.true = `${Id}`;
    document.querySelector(`[data-wrapper = "${Id}"]`).appendChild(switchDivWrapperTrue);
}

const createDivFinished = (Id, Name, Category, date) => {

    const divTask = document.createElement('div');
    divTask.classList.add("main__finished-tasks__item")
    divTask.dataset.idf = `${Id}`;
    document.querySelector(".main__finished-tasks").appendChild(divTask);


    const hTaskName = document.createElement('h3');
    hTaskName.classList.add("finished-tasks__item__name");
    hTaskName.textContent = `Task: `;
    hTaskName.dataset.namef = `${Id}`
    document.querySelector(`[data-idf = "${Id}"]`).appendChild(hTaskName);

    const hSpanName = document.createElement('span');
    hSpanName.classList.add("item__name--span");
    hSpanName.textContent = ` ${Name}`;
    hSpanName.dataset.span_namef = `${Id}`;
    document.querySelector(`[data-namef = "${Id}"]`).appendChild(hSpanName);


    const hTaskCategory = document.createElement('h3');
    hTaskCategory.classList.add("finished-tasks__item__category");
    hTaskCategory.textContent = `Category: `;
    hTaskCategory.dataset.catf = `${Id}`
    document.querySelector(`[data-idf = "${Id}"]`).appendChild(hTaskCategory);

    const hSpanCategory = document.createElement('span');
    hSpanCategory.classList.add("item__category--span");
    hSpanCategory.textContent = ` ${Category}`;
    hSpanCategory.dataset.span_catf = `${Id}`;
    document.querySelector(`[data-catf = "${Id}"]`).appendChild(hSpanCategory);


    const hTaskDate = document.createElement('h3');
    hTaskDate.classList.add("finished-tasks__item__date");
    hTaskDate.textContent = `Deadline: `;
    hTaskDate.dataset.datef = `${Id}`;
    document.querySelector(`[data-idf = "${Id}"]`).appendChild(hTaskDate);

    const hSpanDate = document.createElement('span');
    hSpanDate.classList.add("item__date--span");
    hSpanDate.textContent = ` ${date}`;
    hSpanDate.dataset.span_datef = `${Id}`;
    document.querySelector(`[data-datef = "${Id}"]`).appendChild(hSpanDate);


    const hBinIcon = document.createElement('i');
    hBinIcon.classList.add("fas");
    hBinIcon.classList.add("fa-trash-alt");
    hBinIcon.classList.add("finished-tasks__item__icon");
    hBinIcon.dataset.binf = `${Id}`;
    document.querySelector(`[data-idf = "${Id}"]`).appendChild(hBinIcon);

    const switchDiv = document.createElement('div');
    switchDiv.classList.add('finished-tasks__item__switch')
    switchDiv.textContent = "Finished ?";
    switchDiv.dataset.switchf = `${Id}`;
    document.querySelector(`[data-idf = "${Id}"]`).appendChild(switchDiv);

    const switchDivWrapper = document.createElement('div');
    switchDivWrapper.classList.add('finished-tasks__item__switch--wrapper');
    switchDivWrapper.dataset.wrapperf = `${Id}`;
    document.querySelector(`[data-switchf = "${Id}"]`).appendChild(switchDivWrapper);

    const switchDivWrapperFalse = document.createElement('div');
    switchDivWrapperFalse.classList.add('finished-tasks__item__switch--false');
    switchDivWrapperFalse.textContent = "false"
    switchDivWrapperFalse.dataset.falsef = `${Id}`;
    document.querySelector(`[data-wrapperf = "${Id}"]`).appendChild(switchDivWrapperFalse);

    const switchDivWrapperTrue = document.createElement('div');
    switchDivWrapperTrue.classList.add('finished-tasks__item__switch--true');
    switchDivWrapperTrue.textContent = "true"
    switchDivWrapperTrue.dataset.truef = `${Id}`;
    document.querySelector(`[data-wrapperf = "${Id}"]`).appendChild(switchDivWrapperTrue);
}

const createDivSearched = (Id, Name, Category, date) => {

    const divTask = document.createElement('div');
    divTask.classList.add("main__searched-tasks__item")
    divTask.dataset.ids = `${Id}`;
    document.querySelector(".main__searched-tasks").appendChild(divTask);


    const hTaskName = document.createElement('h3');
    hTaskName.classList.add("searched-tasks__item__name");
    hTaskName.textContent = `Task: `;
    hTaskName.dataset.names = `${Id}`
    document.querySelector(`[data-ids = "${Id}"]`).appendChild(hTaskName);

    const hSpanName = document.createElement('span');
    hSpanName.classList.add("item__name--span");
    hSpanName.textContent = ` ${Name}`;
    hSpanName.dataset.span_names = `${Id}`;
    document.querySelector(`[data-names = "${Id}"]`).appendChild(hSpanName);


    const hTaskCategory = document.createElement('h3');
    hTaskCategory.classList.add("searched-tasks__item__category");
    hTaskCategory.textContent = `Category: `;
    hTaskCategory.dataset.cats = `${Id}`
    document.querySelector(`[data-ids = "${Id}"]`).appendChild(hTaskCategory);

    const hSpanCategory = document.createElement('span');
    hSpanCategory.classList.add("item__category--span");
    hSpanCategory.textContent = ` ${Category}`;
    hSpanCategory.dataset.span_cats = `${Id}`;
    document.querySelector(`[data-cats = "${Id}"]`).appendChild(hSpanCategory);


    const hTaskDate = document.createElement('h3');
    hTaskDate.classList.add("searched-tasks__item__date");
    hTaskDate.textContent = `Deadline: `;
    hTaskDate.dataset.dates = `${Id}`;
    document.querySelector(`[data-ids = "${Id}"]`).appendChild(hTaskDate);

    const hSpanDate = document.createElement('span');
    hSpanDate.classList.add("item__date--span");
    hSpanDate.textContent = ` ${date}`;
    hSpanDate.dataset.span_dates = `${Id}`;
    document.querySelector(`[data-dates = "${Id}"]`).appendChild(hSpanDate);


    const hBinIcon = document.createElement('i');
    hBinIcon.classList.add("fas");
    hBinIcon.classList.add("fa-trash-alt");
    hBinIcon.classList.add("searched-tasks__item__icon");
    hBinIcon.dataset.bins = `${Id}`;
    document.querySelector(`[data-ids = "${Id}"]`).appendChild(hBinIcon);
}
createDivActive(tasks[0].id, tasks[0].name, tasks[0].category, tasks[0].date);


let binId = [...document.querySelectorAll('.active-tasks__item__icon')];

binId[0].addEventListener('click', () => {
    const deleteTask = document.querySelector(`[data-id = "${binId[0].dataset.bin}"]`);
    console.log(binId[0].dataset.bin);
    deleteTask.remove();
    //deleteTask.parentNode.removeChild(deleteTask);
    tasks.splice(binId[0].dataset.bin, 1);
});




let switchIds = [...document.querySelectorAll('.active-tasks__item__switch--true')];
document.querySelector(`[data-false = "0"]`).classList.add("active-tasks__item__switch--active-false");
//switchIds[0].addEventListener('click',)

switchIds.forEach((index, nr) => {
    index.addEventListener('click', () => {
        document.querySelector(`[data-false = "${nr}"]`).classList.remove('active-tasks__item__switch--active-false');
        document.querySelector(`[data-id = "${nr}"]`).remove();
        document.querySelector('.main__finished-tasks').classList.add('main__finished-tasks--active');
        createDivFinished(tasks[nr].id, tasks[nr].name, tasks[nr].category, tasks[nr].date);
        document.querySelector(`[data-truef = "${nr}"]`).classList.add('finished-tasks__item__switch--active-true')
        //index.classList.add('active-tasks__item__switch--active-true');
    })
});





[...taskCategories].forEach(category => {
    category.addEventListener('click', (event) => {
        event.preventDefault();
        if (!category.classList.contains('item__wrapper__button--active')) {
            category.classList.add('item__wrapper__button--active');
            chooseCategories.push(category.textContent);
        } else if (category.classList.contains('item__wrapper__button--active')) {
            category.classList.remove('item__wrapper__button--active');
            chooseCategories.forEach((singleCategory) => {
                if (singleCategory == category.textContent) {
                    const index = chooseCategories.indexOf(singleCategory);
                    chooseCategories.splice(index, 1);
                }
            })
        }
    })
})

const cleanContent = () => {
    const buttons = [...taskCategories];
    buttons.forEach((element) => {
        if (element.classList.contains("item__wrapper__button--active")) {
            element.classList.remove("item__wrapper__button--active");
        }
    })
    chooseCategories = [];

    document.querySelector('.form__item__date').valueAsDate = new Date();

    taskName.value = "";

}


btnAddTasks.addEventListener('click', (event) => {
    event.preventDefault();
    taskId++;
    const tName = taskName.value;
    let tCategory = "";
    tCategory = chooseCategories.join(' , ')
    const tDate = taskDate.value;

    if (tName != "" && tCategory != []) {

        tasks.push({
            id: taskId,
            name: tName,
            category: tCategory,
            date: tDate,
            ifDone: false
        });

        createDivActive(taskId, tName, tCategory, tDate);
        binId.push(document.querySelector(`[data-bin = "${taskId}"]`));
        switchIds.push(document.querySelector(`[data-true = "${taskId}"]`));
        document.querySelector(`[data-false = "${taskId}"]`).classList.add("active-tasks__item__switch--active-false");
    } else {
        if (tName == "" && tCategory == []) {
            alert("Insert task name and choose category");
        } else if (tName == "") {
            alert("Insert task name");
        } else if (tCategory == []) {
            alert("Choose category");
        }
    }


    cleanContent();

})

searchedTaskName.addEventListener('input', (event) => {
    event.preventDefault()
    const searchedTask = searchedTaskName.value.toLowerCase();
    let idTask = -1;

    tasks.forEach(element => {
        const eleName = element.name.toLowerCase();
        const addedSearchedTasks = document.querySelector('.main__searched-tasks__item');
        //console.log(addedSearchedTasks.dataset.ids);
        if (searchedTaskName.value != "") {
            if (eleName.includes(searchedTask) == true) {
                idTask = element.id;
                /*if (addedSearchedTasks.dataset.ids != idTask) {*/
                    createDivSearched(tasks[idTask].id, tasks[idTask].name, tasks[idTask].category, tasks[idTask].date);
                //}
            } else {
                idTask = -1;
            }
        } else {
            addedSearchedTasks.remove();
        }
    });




})



/*if (binId.length > 1) {
    for (let i = 1; i < binId.length; i++) {
        binId[i].addEventListener('click', () => {
            const deleteTask = document.querySelector(`[data-id = "${binId[i].dataset.bin}"]`);
            deleteTask.remove();
            console.log(binId[i].dataset.bin);
            // tasks.splice()
        })
    }

}*/




//tasks.filter((task) => {console.log(task.name == "JS")})