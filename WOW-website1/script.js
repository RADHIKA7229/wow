var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
crsr.style.left=dets.x+30+"px"
crsr.style.top=dets.y+"px"
blur.style.left=dets.x -100 +"px"
blur.style.top=dets.y -100 +"px"
})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2
        crsr.style.border="0.5px solid #fff"
        crsr.style.backgroundColor="transparent"

    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95C11E"
        crsr.style.backgroundColor="#95C11E"

    })
})




gsap.to("#nav",{
    backgroundColor: "#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -75%",
        scrb:2
    }
})

gsap.from("about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // marker:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }


})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
}
    )
    gsap.from("#colon2",{
        y:+70,
        x:+70,
        scrollTrigger:{
            trigger:"#colon1",
            scroller:"body",
            start:"top 70%",
            end:"top 100%",
            scrub:4
        }
    }
        )

        gsap.from("#page4 h1",{
            y:50,
            scrollTrigger:{
                trigger:"#page4 h1",
            scroller:"body",
            start:"top 75%",
            end:"top 70%",
            scrub:3
            }
        })