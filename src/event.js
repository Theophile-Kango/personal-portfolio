
export const event = () => {
    const menu = document.querySelector('#menu');
    const header = document.querySelector('#header');

    const mainSection = document.querySelector('.main-section');
    const details = document.querySelector('.details');
    const portfolio = document.querySelector('#portfolio');
    const projects = document.querySelector('#projects');
    const skills = document.querySelector('#skills');
    const resume = document.querySelector('#resume');

    //const dNone = document.querySelector('.d-none');
    menu.querySelectorAll('.action').forEach(element => {
        element.addEventListener('click', () => {
            if (element.textContent == "Projects"){
                classEffect([projects, skills, resume], 'active')
            }else if(element.textContent == "Skills"){
                classEffect([skills, projects, resume], 'active');
            }else if(element.textContent == "Resume"){
                classEffect([resume, skills, projects], 'active');
            }
            header.classList.remove('d-none');
            mainSection.classList.add('d-none');
            details.classList.add('d-none');
        })
    });

    portfolio.addEventListener('click', () => {
        classEffect([portfolio, mainSection, details], 'd-none');
    });

    projects.addEventListener('click', () => {
        classEffect([projects, skills, resume], 'active');
    });

    skills.addEventListener('click', () => {
        classEffect([skills, projects, resume], 'active');
    });

    resume.addEventListener('click', () => {
        classEffect([resume, skills, projects], 'active');
    });

}

const classEffect = (addRemove, name) => {
    const [first, ...last] = addRemove;
    first.classList.add(name);
    last.forEach(elt => elt.classList.remove(name));
}