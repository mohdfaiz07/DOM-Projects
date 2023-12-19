const container = document.querySelector('.container')
const buttons = document.querySelectorAll('.btn')

buttons.forEach( (btn)=>{
    btn.addEventListener('click', (e)=>{

        switch(e.target.id){
            case 'yellow' :
            case 'pink' :
            case 'purple' :
            case 'grey' :
            case 'orange' :
            case 'palegreen' :
            container.style.backgroundColor = e.target.id
            break;
                        
            

        }










        // if(e.target.id === 'yellow'){
        //     container.style.backgroundColor = e.target.id
        // }

        // if(e.target.id === 'pink'){
        //     container.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'purple'){
        //     container.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'grey'){
        //     container.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'orange'){
        //     container.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'palegreen'){
        //     container.style.backgroundColor = e.target.id
        // }

    })


} )