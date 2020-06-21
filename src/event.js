
export const event = () => {
    const menu = document.querySelector('#menu');
    const header = document.querySelector('#header');

    const mainSection = document.querySelector('.main-section');
    const details = document.querySelector('.details');

    //const dNone = document.querySelector('.d-none');
    menu.querySelectorAll('.action').forEach(element => {
        element.addEventListener('click', () => {
            header.classList.remove('d-none');
            mainSection.classList.add('d-none');
            details.classList.add('d-none');
        })
    });

    const portfolio = document.querySelector('#portfolio');
    portfolio.addEventListener('click', () => {
        header.classList.add('d-none');
        mainSection.classList.remove('d-none');
        details.classList.remove('d-none');
    })
}