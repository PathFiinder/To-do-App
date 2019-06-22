let tasks = ([{
    id: 0,
    name: "Learn OOP in JavaScript",
    category: "Others",
    date: "2019-06-18",
    checked: false
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
let activeList = [];
let deleteList = [];
let finishedList = [];
let searchedList = [];
let chooseCategories = [];



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
    switchDivWrapperFalse.classList.add('active-tasks__item__switch--active-false')
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



}

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


activeList.push(tasks[0]);

if (activeList != []) {
    createDivActive(activeList[0].id, activeList[0].name, activeList[0].category, activeList[0].date);
}


btnAddTasks.addEventListener('click', (event) => {
    event.preventDefault();
    const tName = taskName.value;
    let tCategory = "";
    tCategory = chooseCategories.join(' , ')
    const tDate = taskDate.value;

    if (tName != "" && tCategory != []) {


        let name;
        activeList.forEach(element => {
            if (element != null) {
                name = element.name
            }
        })

        if (tName == name) {
            alert("Task name already exists");
        } else {

            taskId++;

            tasks.push({
                id: taskId,
                name: tName,
                category: tCategory,
                date: tDate,
                checked: false
            });

            activeList.push(tasks[taskId]);
            createDivActive(activeList[taskId].id, activeList[taskId].name, activeList[taskId].category, activeList[taskId].date);
        }
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
    activeTask.classList.remove("main__active-tasks--disable")

})


activeTask.addEventListener('click', function (event) {
    if (event.target.dataset.bin) {
        const idBin = event.target.dataset.bin;
        deleteList.push(activeList[idBin]);
        activeList.splice(idBin, 1, null);
        document.querySelector(`[data-id = "${idBin}"]`).remove();
        

        let activeL = 0;

        activeList.forEach(element => {
            if (element == null) {
                activeL++;
            }
        })
        
        if (activeList.length == activeL) {
            activeTask.classList.add("main__active-tasks--disable")
        }





    } else if (event.target.dataset.true) {
        const switchTrueId = event.target.dataset.true;
        document.querySelector(`[data-false = "${switchTrueId}"]`).classList.remove('active-tasks__item__switch--active-false');
        finishedList.push(activeList[switchTrueId]);
        document.querySelector(`[data-id = "${switchTrueId}"]`).remove();
        const nameF = activeList[switchTrueId].name;
        let idF;

        finishedList.forEach((element, index) => {
            if (element != null) {
                if (element.name == nameF) {
                    idF = finishedList.indexOf(element);
                }
            }
        });


        createDivFinished(finishedList[idF].id, finishedList[idF].name, finishedList[idF].category, finishedList[idF].date);
        document.querySelector(`[data-truef = "${switchTrueId}"]`).classList.add('finished-tasks__item__switch--active-true');
        if (finishedList != []) {
            finishedTask.classList.add('main__finished-tasks--active');
        }

        let activeL = 0;

        activeList.forEach(element => {
            if (element == null) {
                activeL++;
            }
        })
        
        if (activeList.length == activeL) {
            activeTask.classList.add("main__active-tasks--disable");
        }


    }


})


finishedTask.addEventListener('click', function (event) {
    if (event.target.dataset.binf) {
        finishedList = [];
        const idBin = event.target.dataset.binf;
        deleteList.push(activeList[idBin]);
        activeList.splice(idBin, 1, null);
        document.querySelector(`[data-idf = "${idBin}"]`).remove();
        let finishId;


        finishedList.forEach((element) => {
            if (element != null) {
                if (element.name == finishedList[idBin].name) {
                    finishId = finishedList.indexOf(element);
                }
            }
        });

        finishedList.splice(finishId, 1, null);

        let activeL = 0;

        activeList.forEach(element => {
            if (element == null) {
                activeL++;
            }
        })
        
        if (activeList.length == activeL) {
            activeTask.classList.add("main__active-tasks--disable")
            finishedTask.classList.remove('main__finished-tasks--active');
        }
    }
})

searchSection.addEventListener('input', (event) => {
    event.preventDefault();
    searchedTask.classList.add('main__searched-tasks--active');
    searchedList.forEach(element => {
        document.querySelector(`[data-ids = "${element.id}"]`).remove();
    })


    searchedList = [];
    const inputValue = event.target.value.toLowerCase();

    activeList.forEach((element) => {
        if (element != null) {
            element.checked = false;
        }
    })




    activeList.forEach((element) => {
        if (element != null) {
            const eleValue = element.name.toLowerCase();
            if (inputValue != "") {
                if (eleValue.includes(inputValue)) {
                    //console.log(element.name);
                    if (element.checked == false) {
                        searchedList.push(element);
                        element.checked = true;
                    }
                }
            }
        }
    })


    searchedList.forEach((element) => {
        createDivSearched(element.id, element.name, element.category, element.date);
    })
    //console.log(searchedList);

})