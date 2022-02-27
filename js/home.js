/* start section our customers */
    //set up a custom carousel 
        // golbal variable
let slideItem = Array.from(document.querySelectorAll('.slide-item')),

    buttonNext = document.getElementById('next'),

    buttonPrev = document.getElementById('prev'),

    nextSlide = 1;
    // create a function to set a carousel
function setUpSlide() {

    setInterval(() => {

        checker();
        
        nextSlide++;

        if(nextSlide == slideItem.length){

            nextSlide = 0;
        }  
    }, 4000)
}
setUpSlide();

// checking the active class for the slide
function checker() {

    slideItem.forEach(element => {
            
        element.classList.remove('active');
    });
    
    slideItem[nextSlide].classList.add('active');
}
// function to hundle the next slide button
buttonNext.onclick = function() {

    if(nextSlide == slideItem.length){

        nextSlide = 0;
    }

    checker();

    nextSlide++;
}
// function to hundle the previous slide button
buttonPrev.onclick = function() {

    if(nextSlide == 0){
 
        nextSlide = slideItem.length - 1;
    }
  
    checker();

    nextSlide--;
}
/* end section our customers */
/* start section our clients */

    // global variable

    
    function carouselClients() {
    let containerClients = document.querySelector('.our-clients ul'),
    
        ourClients = document.querySelectorAll('.our-clients ul li'),
    
        widthClient = ourClients[0].clientWidth,
    
        translateValue = widthClient;

    
    setInterval(() => {

        containerClients.style.transform = `translateX(-${translateValue}px)`;
        
        translateValue+= widthClient;
        
        if(translateValue > containerClients.clientWidth - (window.outerWidth - widthClient)) {
        
            translateValue = 0;
        }

    }, 3000)
}
carouselClients();


/* end section our clients */

/* start footer */
    // create function button to top the window
let buttonTop = document.querySelector('.button_top');
 
buttonTop.onclick = function() {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

/* end footer */