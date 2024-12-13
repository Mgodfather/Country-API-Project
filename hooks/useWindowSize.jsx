import { useEffect, useState } from 'react'

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            setWindowSize({
                width: e.target.innerWidth,
                height: e.target.innerHeight
            })
        })
    }, [])

    return windowSize;
}

