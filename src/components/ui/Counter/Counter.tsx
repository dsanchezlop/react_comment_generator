/*
 * Author: Luigelo Davila Vilchez (luigelo.davila@applus.com)
 * -----
 * Last Modified: Wednesday, 21st June 2023 5:44:52 pm
 * -----
 * Copyright ©2023, Applus+ Laboratories
 */

// React Modules
import { JSX, useState} from 'react'

// Types
import type { CounterComponentProps } from '@/types'

/**
 * Counter component.
 *
 * @returns {JSX.Element} The rendered Counter component.
 */
const Counter = (props: CounterComponentProps) : JSX.Element => {
    const [count, setCount] = useState(0)

    return(
        <button onClick={() => setCount((count) => count + 1)}>
            {props.title} {count}
        </button>
    )
}

export default Counter