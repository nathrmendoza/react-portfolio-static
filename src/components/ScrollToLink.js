import React, {useEffect} from 'react'

const ScrollToLink = ({page}) => {

    var scrollstate = false;

    useEffect(() => {
        window.addEventListener('scroll', scrollFunc)
    });  
    
    const scrollFunc = e => {
        e.preventDefault();

        let scrollLoc = window.pageYOffset + window.innerHeight;
        let point = document.documentElement.offsetHeight - 50;

        console.log(scrollstate);

        if (!scrollstate && scrollLoc > point) {
            window.addEventListener("mousewheel", mouseWheel, false);
            scrollstate = true;
        }else if (scrollstate && scrollLoc <= point){
            window.removeEventListener("mousewheel", mouseWheel, false);
            scrollstate = false
        }
    }

    const mouseWheel = e => {
        var f = window.event || e;
        var delta = Math.max(1, Math.min(-1, (f.wheelDelta || -f.detail)));
        
        console.log(delta);
        
        // this is meant to cancel the normal scrolling behavior. Doesn't work here...
        return false;
    }

    return (
        <div className="scroll-to-go">
            <h2>Going to {page} page...</h2>
        </div>
    )
}

export default ScrollToLink
