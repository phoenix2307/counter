import React from "react";
import '../App.css'


type CounterType = {
    increment: (currentValue: number) => void
    reset: () => void
    currentValue: number
    minValue: number
    maxValue: number
    errorHandling: {
        incorrect: string,
        colorMaxValue: string,
        errorInput: string
    }
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
    if (currentValue > maxValue) {
        disabledBtnCount = true
        disabledBtnReset = true
        errorHandling.colorMaxValue = 'limit'
        errorHandling.incorrect = 'Enter correct values'
    }

    return (
        <div className={'wrapper'}>
            <div className={errorHandling.incorrect ? `incorrectValue` : `table ${errorHandling.colorMaxValue}`}>
                {errorHandling.incorrect ? errorHandling.incorrect: currentValue}</div>
            <div className={'buttons'}>

                <button onClick={() => props.increment(currentValue)}
                        disabled={disabledBtnCount}>Count
                </button>

                <button onClick={() => props.reset()}
                        disabled={disabledBtnReset}>Reset
                </button>

                <button onClick={props.toggleSet}>SET</button>
            </div>
        </div>
    )
}



