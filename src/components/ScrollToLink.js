import {useEffect} from 'react'

export const ScrollToLink = () => {

    useEffect((header, scrollPos, elPos) => {
        header = document.querySelector('header');
        elPos = document.querySelector('.hero-start');
        scrollPos = window.pageYOffset;

        window.addEventListener('scroll', scrollFunc(header, elPos, scrollPos));
    });  
    
    const scrollFunc = (header, elPos, scrollPos) => {
        scrollPos = window.pageYOffset;
        console.log(scrollPos);
        console.log(elPos);
        console.log(header);
    }
}