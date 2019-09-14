import { useState, useEffect } from 'react';

export const useDarkMode = (initial) => {
    const [darkMode, setDarkMode] = useState(initial);

    useEffect(() => {
        const body = document.querySelector('body');
        body.classList.toggle('darkMode');
    }, [darkMode])

    return [darkMode, setDarkMode];
}