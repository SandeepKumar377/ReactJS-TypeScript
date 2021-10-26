import { useRef, useEffect } from 'react'

const RefHook = () => {
    const inputRef = useRef<HTMLInputElement>(null!)
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input type="text" name="inputRef" ref={inputRef} />
        </div>
    )
}

export default RefHook
