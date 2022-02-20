import React from "react";
import '../App.css'
import {ErrorHandlingType} from "../App";

type CounterType = {
    increment: (currentValue: number) => void
    reset: () => void
    currentValue: number
    minValue: number
    maxValue: number
    errorHandling: ErrorHandlingType
    toggleSet: () => void
}
export const Counter = ({currentValue, minValue, maxValue, errorHandling, ...props}: CounterType) => {
    let disabledBtnCount = false
    let disabledBtnReset = false

    if (currentValue === minValue) {
        disabledBtnReset = true
    }
    if (currentValue === maxValue) {
        disabledBtnCount = true
        errorHandling.colorMaxValue = 'limit'
    }

    const incrementHandler = () => {
        props.increment(currentValue)
    }
    const resetHandler = () => {
        props.reset()
    }
    const toggleHandler = () => {
        props.toggleSet()
    }

    return (
        <div className={'wrapper'}>
            {/*<div className={errorHandling.incorrect ? `incorrectValue` : `table ${errorHandling.colorMaxValue}`}>*/}
            {/*    {errorHandling.incorrect ? errorHandling.incorrect: currentValue}</div>*/}
            <div className={errorHandling.colorMaxValue ? `table ${errorHandling.colorMaxValue}`: `table`}>
                {errorHandling.incorrect ? errorHandling.incorrect: currentValue}</div>

            <div className={'buttons'}>
                <button onClick={incrementHandler} disabled={disabledBtnCount}>Count</button>
                <button onClick={resetHandler} disabled={disabledBtnReset}>Reset</button>
                <button onClick={toggleHandler}>SET</button>
            </div>

        </div>
    )
}



