document.addEventListener('DOMContentLoaded',function(){
    let wrapper = getElementById('wrapper');
    let topLayer = document.querySelector('.top');
    let hanlde =document.querySelector('handle');
    let skew = 0;
    let delta =0;
    
    if(wrapper.className.indexof('skewed')!=-1){
    skew = 1000;
    };
    wrapper.addEventListener('mousemove', function(e){
        delta =(e.clientX - window.innerWidth/2)*0.5;
        hanlde.style.left =e.clientX + delta +skew + delta +'px'; 
    });
});