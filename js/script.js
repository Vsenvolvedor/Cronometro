const 
    start = document.querySelector('.js-start'),
    reset = document.querySelector('.js-reset'),
    pause = document.querySelector('.js-pause'),
    display = document.querySelector('.js-display'),
    mili = document.querySelector('.js-mili'),
    seg = document.querySelector('.js-seg'),
    min = document.querySelector('.js-min')
let 
    nm = 1,
    ns = 1,
    nmi = 1

start.addEventListener('click', startCrom)

function startCrom()
{   
    start.setAttribute('disabled','')
    let 
        milInter =  setInterval(()=>addNum("m"),10),
        segInter =  setInterval(()=>addNum("s"),1000)

    function addNum(p)
    {
        if(p =="m")
        {
          if(nm >= 100)
          {
              nm = 0
          }  
            mili.innerHTML = `.${nm}`
            nm += 1  
        }
        else if(p =="s")
        {
          if(ns >= 60)
          {
              min.innerHTML = `${nmi}:`
              nmi += 1
              ns = 0
          }  
            seg.innerHTML = ns
            ns += 1  
        }
    }

    pause.addEventListener('click', ()=>{
        clearInterval(milInter)
        clearInterval(segInter)
        start.removeAttribute('disabled')
       
    })

    reset.addEventListener('click', ()=>{
        clearInterval(milInter)
        clearInterval(segInter) 
        nm = 1
        ns = 1
        nmi = 1
        mili.innerHTML = ".0"
        seg.innerHTML = "0"
        min.innerHTML = ""
        start.removeAttribute('disabled')
        
    })
}


