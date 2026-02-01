const iconUrl = "assets/images/icons/";
const imgProjectUrl = "assets/images/projects/";


const dataBase = {
    tech: {
        "SCSS": { icon: iconUrl + 'scss.svg', color: "#FAAADD" },
        "JS": { icon: iconUrl + 'js.svg', color: "#EFF687" },
        "HTML5": { icon: iconUrl + 'html5.svg', color: "#FF946D" },
        "Gulp": { icon: iconUrl + 'gulp.svg', color: "#F68789" },
        "CSS3": { icon: iconUrl + 'css3.svg', color: "#87A6F6" },
    },
    projects: {
        "Lawliet": { tech: ["HTML5", "CSS3", "JS"], link: "./Lawliet", describe: "Корпоративный лендинг", imgs: [imgProjectUrl + "/Lawliet/main.png"] },
        "PicProject": { tech: ["HTML5", "CSS3", "JS"], link: "./PicProject", describe: "Проект редактора фото", imgs: [imgProjectUrl + "/PicProject/main.png"] },
        "Relvise": { tech: ["HTML5", "CSS3", "JS"], link: "./Relvise", describe: "Бизнес лендинг", imgs: [imgProjectUrl + "/Relvise/main.png"] },
        "Robo-School": { tech: ["HTML5", "SCSS", "JS", "Gulp"], link: "./Robo-School", describe: "Школа робототехники", imgs: [imgProjectUrl + "/Robo-School/main.png"] },
        "Ump": { tech: ["HTML5", "SCSS", "JS", "Gulp"], link: "./Ump", describe: "Музыкальная платформа", imgs: [imgProjectUrl + "/Ump/main.png"] },
    }
}


const cardsContainer = document.querySelector('.layout-cards');
const filterFunctionsContainer = document.querySelector('.filter-functions');
const clearFilterButton = document.querySelector('.filter-clear-button');

let selectedFilters = [];

function renderFilterButtons() {
    filterFunctionsContainer.innerHTML = '';
    Object.keys(dataBase.tech).forEach(techName => {
        const techData = dataBase.tech[techName];

        const iconHTML = techData.icon ? `<img src=${techData.icon} alt=${techName} class="icon-badge icon-badge"> </img>` : '';
        const buttonHTML = `
            <button class="filter-functions__filter-button filter-button" style="--filter-color:${techData.color}" data-tech=${techName}>
                ${iconHTML}
                <span>${techName !== 'JS' ? techName : ""}</span>
            </button>
        `;
        filterFunctionsContainer.insertAdjacentHTML('beforeend', buttonHTML);
    });
    addFilterListeners();
}


function renderProjects(projects) {
    cardsContainer.innerHTML = '';
    const techInfo = dataBase.tech;
    Object.entries(projects).forEach(([title, info]) => {

        const badgesHTML = info.tech.map(techName => {
            if (!techInfo[techName]) return "";
            return `
                <div class="card-filter-badges__card-filter-badge card-filter-badge" style="--filter-color:${techInfo[techName].color}">
                    <img src="${techInfo[techName].icon}" alt="${techName}" class="card-filter-badge__icon-badge icon-badge">
                </div>
            `
        }).join(' ');

        const cardHTML = `
            <a href="${info.link}" class="layout-cards__layout-card layout-card">
                <div class="layout-card__image-box image-box">
                    <img src=${info.imgs[0]} alt=${title} class="image-box__image">
                    <div class="image-box__card-filter-badges card-filter-badges">
                        ${badgesHTML}
                    </div>
                </div>
                <div class="layout-card__card-information card-information">
                    <h3 class="card-information__medium-title medium-title">${title}</h3>
                    <p class="card-information__card-text card-text">${info.describe}</p>
                </div>
            </a>
        `;
        cardsContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

function addFilterListeners() {
    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {

            const techName = btn.dataset.tech;


            btn.classList.toggle('active');
            if (btn.classList.contains("active")) {
                selectedFilters.push(techName);
            } else {
                selectedFilters = selectedFilters.filter(item => item !== techName);
            }

            filterProjects();

        })
    })
}

function filterProjects() {
    if (selectedFilters.length === 0) {
        renderProjects(dataBase.projects);
        return;
    }

    const filteredProjects = {}
    Object.entries(dataBase.projects).forEach(([title, info]) => {
        const isMatch = selectedFilters.every(filter => info.tech.includes(filter));
        if (isMatch) filteredProjects[title] = info;
    });
    renderProjects(filteredProjects);
}

clearFilterButton.addEventListener('click', () => {
    document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));

    selectedFilters = [];

    renderProjects(dataBase.projects);
})

renderFilterButtons();
renderProjects(dataBase.projects);