const click = document.querySelector('.clock')



setInterval( function(){
    const date = new Date()
    click.innerHTML = `<h1>${date.toLocaleTimeString()}</h1>`

},1000 )
