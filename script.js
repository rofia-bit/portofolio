function scrollToTop(){
    window.scrollTo({
        top: 0,
    });

    window.addEventListener ('scroll', function() {
        var scrollToTopButton = document.querySelector('scroll-top');
            if (this.window.pageYOffset > 200){
                scrollToTopButton.style.display = 'block';

            }else{
                scrollToTopButton.style.display = 'none';
            }
    }
});