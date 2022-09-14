//gallery animations
const lazyImgs = document.querySelectorAll('.lazy');
const options = {
    threshold:.5
}
const observer = new IntersectionObserver(function(entries,observer){
    console.log(entries[0]);
    if(entries[0].isIntersecting){
        if(entries[0].boundingClientRect.y<0){
            //entries[0].target.classList.add('show-from-top');
        }
        else{
            entries[0].target.classList.add('show-from-bottom');
        }
        
    }
    else{
        entries[0].target.classList.remove('show-from-bottom')
    }
    
},options);
lazyImgs.forEach((img,index) => {
    observer.observe(img);
});