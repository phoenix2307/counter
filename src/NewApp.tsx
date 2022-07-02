import React, {useState} from "react";
// import './NewCounter.module.css'

import {NewCounter} from "./NewCounter";

export function NewApp() {
    let [count, setCount] = useState(0)
    let [disabledCount, setDisabledCount] = useState(false)
    let [disabledReset, setDisabledReset] = useState(true)
    const limitCount = 5


    const addCount = () => {
        setCount(++count)
        if (count === limitCount) {
            setDisabledCount(true)
            setDisabledReset(false)
        }
        if (count === limitCount || count > 0) {
            setDisabledReset(false)
        }
    }

    const resetCount = () => {
        setCount(0)
        setDisabledCount(false)
        setDisabledReset(true)
    }

    return (
        <div className={'AppStart'}>

            <NewCounter
                count={count}
                addCount={addCount}
                resetCount={resetCount}
                disabledCount={disabledCount}
                disabledReset={disabledReset}
                limitCount={limitCount}
            />

        </div>
    )
}