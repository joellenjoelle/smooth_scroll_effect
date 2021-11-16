function smoothScroll(target,duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        console.log(startTime);
        var timeElapse = currentTime - startTime;
        var run = ease(timeElapse,startPosition,distance,duration);
        window.scrollTo(0,run);
        if(timeElapse < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    };
    
    requestAnimationFrame(animation);
}

var section1 = document.querySelector('.section1');
var section2 = document.querySelector('.section2');

section1.addEventListener('click',function(){
    smoothScroll('.section2',1000);
});
section2.addEventListener('click',function(){
    smoothScroll('.section1',3000);
});
