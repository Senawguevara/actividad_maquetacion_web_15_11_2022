function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
    
}

function changeCircleColor(color){
   const circle =  document.querySelector('.circle');
   circle.style.background = color;
}

function toggleMenu(){
    let menuToggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    menuToggle.classlist.toggle('active');
    navigation.classlist.toggle('active');
}