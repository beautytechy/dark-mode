import {useLocalStorage} from "../hooks/useLocalStorage";
import React, {useEffect} from "react";

export const useDarkMode = (key) => {
    const [darkKey, setDarkKey] = useLocalStorage(key)

    useEffect(() => {
        if (darkKey === true) {
            document.querySelector("body").classList.add("dark-mode")
        } else {
            document.querySelector("body").classList.remove("dark-mode")
        }
    }, [darkKey]);
    return [darkKey, setDarkKey];
};
