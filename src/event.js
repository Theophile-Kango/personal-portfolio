
export const event = () => {
    const menu = document.querySelector('#menu');
    const header = document.querySelector('#header');
    const embed = document.querySelector('.embed');
    const skill = document.querySelector('#skill');
    const myProject = document.querySelector('.my-projects');
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
            classEffect([header, mainSection, details], 'd-none', false);
        })
    });

    const effect = ({projects, skills, resume}, value) => {
       
        switch (value.textContent) {
            case (projects.textContent):
                numActive();
                classEffect([myProject, embed, skill], 'd-none', false);
                classEffect([projects, skills, resume], 'active');
                break;
            case (skills.textContent):
                classEffect([skill, myProject,embed], 'd-none', false);
                classEffect([skills, projects, resume], 'active');
                break;
            case (resume.textContent):
                classEffect([resume, projects, skills], 'active');
                classEffect([embed, skill, myProject], 'd-none', false);
                break;
        }
    }

    portfolio.addEventListener('click', () => {
        embed.classList.add('d-none');
        skill.classList.add('d-none');
        myProject.classList.add('d-none');
        classEffect([header, mainSection, details], 'd-none');
    });

    Object.values(myItems).forEach(item => {
        item.addEventListener('click', () => {
            effect(myItems, item);
        }); 
    });
}

const classEffect = (addRemove, name, test=true) => {
    const [first, ...last] = addRemove;
    if (test){ 
        first.classList.add(name);
        last.forEach(elt => elt.classList.remove(name));
    }else{
        first.classList.remove(name);
        last.forEach(elt => elt.classList.add(name));
    }
   
}

const numActive = () => {
    const num = document.querySelectorAll('.num');
    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    let current = 0;

    num.forEach(elt => {
        elt.addEventListener(('click'), () => {
            elt.classList.add('active');
            current = Number(elt.textContent);
            num.forEach(item => {
                if (item.textContent != elt.textContent){
                    item.classList.remove('active');
                }
            })
        })
    })

    next.addEventListener(('click'),() => {
        current += 1;
        if (current == 6) current = 1
        
        num.forEach(elt =>{
            if(elt.textContent == current) {
                elt.click();
                next.setAttribute('href',elt.getAttribute('href'));
            }
        })
    })

    prev.addEventListener(('click'),() => {
        current -= 1;
        if (current <= 0) current = 5
        num.forEach(elt => {
            if(elt.textContent == current){
                elt.click();
                prev.setAttribute('href',elt.getAttribute('href'));
            }
        })
    })
}
