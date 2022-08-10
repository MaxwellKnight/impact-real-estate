import React, { useState, useEffect, useContext } from 'react'

interface WindowContextInterface {
    children: JSX.Element
}

const WindowContext = React.createContext<boolean>(false)

const WindowWidthContext: React.FC<WindowContextInterface> = ({ children }) => {

    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)


    useEffect(() => {
        const onResize = (): void => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', onResize)
        window.innerWidth < 800 ? setIsMobile(true) : setIsMobile(false)

        return window.removeEventListener('reszie', onResize)
    }, [windowWidth])

    return (
        <WindowContext.Provider value={isMobile}>
            {children}
        </WindowContext.Provider>
    )
}

const useWidth = (): boolean | null => {
    const widthContext = useContext(WindowContext)

    if (widthContext !== undefined) return widthContext
    return null;
}

export { WindowWidthContext, useWidth } 