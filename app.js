var day = 0;
const gridwrapper=document.getElementById('parent');

gridwrapper.addEventListener('click', onclick);
function onclick(e){
    if(e.target.classList.contains('trgtt')){
        
        
        e.target.parentElement.setAttribute("class", "sqr-done position-relative text-center");
        day++;
        counter=document.getElementById('number');
        label=document.getElementById('lbl');
        counter.textContent=`${day}`
        e.target.textContent='done'
        console.log(day)
        
    }
}