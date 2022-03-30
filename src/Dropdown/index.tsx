import React, {createContext, useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react';

export interface IDropdownContext {
    open: boolean
    setOpen(v: boolean): any
}

export const DropdownContext = createContext<IDropdownContext>({
    open: false,
    setOpen: () => {},
});

const Dropdown: React.FC = ({children}) => {
    const [open, setOpen] = useState(false);
    const toggleOpen = useCallback((v: boolean) => {
            if(open !== v) {
                setOpen(v);
            }
            return;
        }, [open, setOpen])
    const value = useMemo(
        () => ({
            open,
            setOpen: (v: boolean) => toggleOpen(v)
        }), [open, toggleOpen]
    )
    return (
        <DropdownContext.Provider value={value}>
            <div>
                {children}
            </div>
        </DropdownContext.Provider>
    )
}

export const DropdownTrigger: React.FC = ({children}) => {
    const {setOpen, open} = useContext(DropdownContext)
    return(
        <div onClick={() => setOpen(!open)}>
            {children}
        </div>
    )
}

export const DropdownContent: React.FC = ({children}) => {
    const {setOpen, open} = useContext(DropdownContext);
    const contentRef = useRef<HTMLDivElement>(null);
    // Отслеживает события клика в том числе и на другие триггеры, поэтому может быть открыт только один Dropdown за раз
    useEffect(() => {
        const handleClickAway = (e: Event) => {
            if (contentRef.current && e.target instanceof Node && !contentRef.current.contains(e.target)){
                open && setOpen && setOpen(false);
            }
        }
        document && document.addEventListener('click', handleClickAway);
        return () => {
            document && document.removeEventListener('click', handleClickAway)
        }
    }, [setOpen])
    return (
            open ? (
            <div ref={contentRef}>
                {children}
            </div>
            ) : null
    )
}

export default Dropdown;
