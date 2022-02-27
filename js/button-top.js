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