const container = document.querySelector('.container')
const start = document.querySelector('#start-btn')
const stop = document.querySelector('#stop-btn')
let interval ;

const randomColor = function (){
    let hexa = '123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++ ){
        color += hexa[Math.floor(Math.random()*16)]
    }
    return color;
}

start.addEventListener('click', function(){
if(!interval){
    interval = setInterval(function(){
        container.style.backgroundColor = randomColor();
        console.log('clicked')
    }, 1000)
}
    start.style.backgroundColor = '#9e8d8d'
    stop.style.backgroundColor = 'black'

})

stop.addEventListener('click', function (){
    clearInterval(interval);
    stop.style.backgroundColor = '#9e8d8d'
    start.style.backgroundColor = 'black'
})




    




