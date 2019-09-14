import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

function Button(){
    const [darken, setDarken] = useDarkMode(false);

    const toggleDarkMode = (e) => {
        e.preventDefault();
        setDarken(!darken);
    }

    return <button onClick={toggleDarkMode}>Darken</button>
}

export default Button;