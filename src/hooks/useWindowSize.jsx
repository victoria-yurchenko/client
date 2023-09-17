import { useLayoutEffect } from "react";
import { useState } from "react";

const useWindowSize = (products) => {

    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        console.log(products)
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export { useWindowSize };