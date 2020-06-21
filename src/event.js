
export const event = () => {
    const menu = document.querySelector('#menu');
    const header = document.querySelector('#header');
    const embed = document.querySelector('.embed');

    const mainSection = document.querySelector('.main-section');
    const details = document.querySelector('.details');
    const portfolio = document.querySelector('#portfolio');

    const myItems = {
        projects: document.querySelector('#projects'),
        skills: document.querySelector('#skills'),
        resume: document.querySelector('#resume')
    }

    menu.querySelectorAll('.action').forEach(element => {
        element.addEventListener('click', () => {
            effect(myItems, element);
            header.classList.remove('d-none');
            mainSection.classList.add('d-none');
            details.classList.add('d-none');
        })
    });

    const effect = ({projects, skills, resume}, value) => {
       
        switch (value.textContent) {
            case (projects.textContent):
                embed.classList.add('d-none');
                classEffect([projects, skills, resume], 'active');
                break;
            case (skills.textContent):
                embed.classList.add('d-none');
                classEffect([skills, projects, resume], 'active');
                break;
            case (resume.textContent):
                classEffect([resume, projects, skills], 'active');
                embed.classList.remove('d-none');
                //alert('resume');
                break;
        }
    }

    portfolio.addEventListener('click', () => {
        embed.classList.add('d-none');
        classEffect([header, mainSection, details], 'd-none');
    });

    Object.values(myItems).forEach(item => {
        item.addEventListener('click', () => {
            effect(myItems, item);
        }); 
    });
}

const classEffect = (addRemove, name) => {
    const [first, ...last] = addRemove;
    first.classList.add(name);
    last.forEach(elt => elt.classList.remove(name));
}
