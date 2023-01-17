const sections = document.querySelectorAll('.section');
const sectionButtonParent = document.querySelectorAll('.controls');
const sectionButton = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransition() {
    // Button click, active class
    for(let i = 0; i < sectionButton.length; i++) {
        sectionButton[i].addEventListener('click', function(){
            let currentButton = document.querySelectorAll('.active-btn');
            currentButton[0].className = currentButton[0].className.replace(' active-btn', '');
            this.className += ' active-btn';
        })
    }

    allSections.addEventListener('click', (e)=>{
        const id = e.target.dataset.id;
        if (id) {
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransition();