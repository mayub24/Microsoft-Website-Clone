// Select section class
const section = document.querySelector('.section');

// Selecting text for section
const sectionHead = document.querySelectorAll('.section-head');
const sectionPar = document.querySelectorAll('.section-par');
const btn = document.querySelectorAll('.btn');

const imgArray = ['slide-main.webp', 'games.png', 'surfaces.jpg']
let i = 0;
section.style.backgroundImage = `url('./imgs/slide-main.webp')`;

setInterval(() => {
    console.log(i);
    if (i == imgArray.length) {
        i = 0;
    }

    section.style.backgroundImage = `url('./imgs/${imgArray[i]}')`;

    // Editing header for background img
    sectionHead.forEach((each) => {
        if (i == 0) {
            each.innerHTML = `<h2>$390 off select Surface Laptop 3</h2>`;
            each.style.color = 'black';
        }
        else if (i == 1) {
            each.innerHTML = '<h2>Save big on games</h2>';
            each.style.color = 'white';
            document.querySelector('.added-info .section-head').style.color = 'black';
        }
        else if (i == 2) {
            each.style.color = 'black';
            each.innerHTML = '<h2>Save up to $300 on Surface Pro 7</h2>';
        }
    })


    // Editing paragraph for background img
    sectionPar.forEach((eachPar) => {
        if (i == 0) {
            eachPar.innerHTML = `<p>Power through assignments and reflect your style with long-lasting battery life in a stunning design.
                    Starting at $1,199
                    CAD</p>`;
            eachPar.style.color = 'black';
        }
        else if (i == 1) {
            eachPar.innerHTML = '<p>Take up to 50% off select xbox games<p>';
            eachPar.style.color = 'white';
            document.querySelector('.added-info .section-par').style.color = 'black';
        }
        else if (i == 2) {
            eachPar.innerHTML = '<p>Ultra-light, versatile, and perfect for learning from anywhere</p>';
            eachPar.style.color = 'black';
        }
    })

    i++;
    // if img is something else, change context and color again
}, 5000)


// Clicking bar and adding active to microsoft
const hambar = document.querySelector('.bar');
const overlayz = document.querySelector('.overlay');
const linez = document.querySelectorAll('.bar-line');

hambar.addEventListener('click', () => {
    if (overlayz.className == 'overlay') {
        overlayz.classList.add('active');
        linez.forEach((line) => {
            line.classList.add('active');
        })
    }
    else {
        overlayz.classList.remove('active');
        linez.forEach((line) => {
            line.classList.remove('active');
        })
    }
    console.log('bruh');
    console.log(overlayz.className);
})
