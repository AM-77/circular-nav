"use distinct"

/* the links of the nav bar */
let links = [
    {
        "href":"",
        "value":"<span class='fa fa-facebook'></span>",
        "title": "Facebook",
        "alt":"Facebook",
        "class":"",
        "id": ""
    },
    {
        "href":"",
        "value":"<span class='fa fa-youtube'></span>",
        "title": "Youtube",
        "alt":"Youtube",
        "class":"",
        "id": ""
    },
    {
        "href":"",
        "value":"<span class='fa fa-twitter'></span>",
        "title": "Twitter",
        "alt":"Twitter",
        "class":"",
        "id": ""
    },
    {
        "href":"",
        "value":"<span class='fa fa-github'></span>",
        "title": "Github",
        "alt":"Github",
        "class":"",
        "id": ""
    },
    {
        "href":"",
        "value":"<span class='fa fa-instagram'></span>",
        "title": "Instagram",
        "alt":"Instagram",
        "class":"",
        "id": ""
    }
]
/* set a degree */
let full_degree = 180
/* the distace between the nav button and the nav links */
let distance = 120

let link_list = document.querySelector("ul.link_list")
links.forEach(link => {
    // Fill the ul nav element with the li links
    link_list.innerHTML += "<li class='round_link "+link.class+"' id='"+link.id+"'><a class='"+link.class+"' id='"+link.id+"' href='"+link.href+"' title='"+link.title+"' alt='"+link.alt+"' >"+link.value+"</a></li>"
})

let lis = document.querySelectorAll("ul li.round_link")
let nav_button = document.querySelector("button.nav_button")

nav_button.addEventListener("click", ()=>{
    if(nav_button.classList.contains("open")){
        nav_button.classList.remove("open")
        nav_button.classList.add("close")

        for (let i = 0; i < lis.length; i++) {
            // Reset the value of translateX & translateY 
            lis[i].style.transform = "translateX(0px) translateY(0px)"
            lis[i].style.opacity = "0"  
        }

    }else{
        nav_button.classList.remove("close")
        nav_button.classList.add("open")

        for (let i = 0; i < lis.length; i++) {
            
            /* calculating the angle's degree */
            let angle = full_degree/(lis.length-1)

            /* from degree to radian */
            let radian = angle * (Math.PI / 180)

            /* calculating translateX and translateY */
            let transX = (Math.cos(( radian )*i) * distance)
            let transY = (Math.sin(( radian )*i) * distance)

            //Use transX or -transX  && transY or -transY to change the position of nav lis
            lis[i].style.transform = `translateX( ${ transX }px) translateY( ${ -transY }px)`
            lis[i].style.opacity = "1" 

        }

    }
})
