var day = 0;
const gridwrapper=document.getElementById('parent');

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

    }
}