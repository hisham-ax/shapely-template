/* start section related articles */

    // global variable
let relatedArticles = document.querySelector('.related-articles'),
        
    containerArticles = document.querySelector('.related-articles ul'),

    ourArticles = document.querySelectorAll('.related-articles ul li'),

    widthArticle = ourArticles[0].clientWidth,
    
    translateValue = widthArticle,

    buttonNext = document.getElementById("next"),

    buttonPrev = document.getElementById("prev");
    
    // function to create the carousel
function carouselArticles() {

    containerArticles.style.width=`${widthArticle * ourArticles.length}px`;

        setInterval(() => {
    
            containerArticles.style.transform = `translateX(-${translateValue}px)`;
            
            translateValue+= widthArticle;
            
            if(translateValue > containerArticles.clientWidth - (relatedArticles.clientWidth - widthArticle)){
            
                translateValue = 0;
            }
        }, 3000)
        
    }
    carouselArticles();
    
    buttonNext.onclick = function() {

        translateValue++;

        containerArticles.style.transform = `translateX(-${translateValue}px)`;
    }   
    buttonPrev.onclick = function() {

        translateValue--;

        containerArticles.style.transform = `translateX(-${translateValue}px)`;
    }
    /* end section our articles */
    