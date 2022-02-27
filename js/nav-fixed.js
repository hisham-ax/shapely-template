// navbar position fixed
window.onscroll = function() {

    if(window.outerWidth >= 767) {

        if(window.pageYOffset >= 200) {
            document.querySelector('.navbar').classList.add('fixed');
        }else{
            document.querySelector('.navbar').classList.remove('fixed');
        }
    }else{
        document.querySelector('.navbar').classList.remove('fixed');
    }
}
    // search box
let siteSreach = document.getElementById('site-search'),
    searchBox = document.querySelector('.search-box');
    
    siteSreach.onclick = function() {
        searchBox.classList.toggle('active');
    }
