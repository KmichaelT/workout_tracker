var day = localStorage.getItem("days");
counter=document.getElementById('number');
counter.textContent=`${day}`
const gridwrapper=document.getElementById('parent');
const tracker=gridwrapper.children

for (let i = 0; i < day; i++) {
    tracker[i].setAttribute("class", "sqr-done position-relative text-center");
    tracker[i].children[1].textContent='done'
    tracker[i].children[0].setAttribute('style', 'filter: grayscale(0%);')
  }

gridwrapper.addEventListener('click', onclick);
function onclick(e){
    if(e.target.classList.contains('trgtt')){
        
        if(e.target.parentElement.classList.contains('sqr-done')){
            e.target.parentElement.setAttribute("class", "sqr position-relative text-center");
            day--;
            counter=document.getElementById('number');
        label=document.getElementById('lbl');
        counter.textContent=`${day}`
        e.target.textContent='200'
        
            
        }
        else{
        
        e.target.parentElement.setAttribute("class", "sqr-done position-relative text-center")
        e.target.parentElement.children[0].setAttribute('style', 'filter: grayscale(0%);')
        day++;
        counter=document.getElementById('number');
        label=document.getElementById('lbl');
        counter.textContent=`${day}`
        e.target.textContent='done'

        Swal.fire({
            icon: 'success',
            title: 'Good Job',
            text: 'Keep The Momentum!',
            confirmButtonColor: '#00a724',
            confirmButtonText: '👍'
          })
        
        }
        localStorage.setItem("days",day)
    }
}