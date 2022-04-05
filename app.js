var day
if(localStorage.getItem("days")==undefined){
    day=0
}else{
    day = localStorage.getItem("days");
}

counter=document.getElementById('number');
counter.textContent=`${day}`
const gridwrapper=document.getElementById('parent');
const tracker=gridwrapper.children
const help=document.getElementById('help')

for (let i = 0; i < day; i++) {
    tracker[i].setAttribute("class", "sqr-done position-relative text-center");
    tracker[i].children[1].textContent='done'
    tracker[i].children[0].setAttribute('style', 'filter: grayscale(0%);')
  }
help.addEventListener('click', helper)
gridwrapper.addEventListener('click', onclick);
function helper(e){
    Swal.fire({
        title: 'The Rules',
        text: "To complete the challenge, do 200 push-ups a day and 200 sit-ups the next day for 140 days. You must complete 200 repetitions of the exercise for that day within 24 hours.",
        
        confirmButtonColor: '#00a724',
        confirmButtonText: 'Yes, I Got This!'
      })
}

function onclick(e){


    if(e.target.classList.contains('trgtt')){
        
        if(e.target.parentElement.classList.contains('sqr-done')){
            e.target.parentElement.setAttribute("class", "sqr position-relative text-center");
            e.target.parentElement.children[0].setAttribute('style', 'filter: grayscale(100%);')
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