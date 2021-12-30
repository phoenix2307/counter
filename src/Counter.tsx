import React from "react";
import './App.css'


type PropsType = {
    increment: () => void
    reset: () => void
    value: number
}
export const Counter = (props: PropsType) => {
    let colorLimit = ''
    let disabledCount = false
    let disabledReset = false

    if (props.value === 0) {
        disabledReset = true
    }
    if (props.value === 5) {
        disabledCount = true
        colorLimit = 'limit'
    }

    return (
        <div className={'wrapper'}>
            <div className={`table ${colorLimit}`} >{props.value}</div>
            <div className={'buttons'}>

                <button onClick={() => props.increment()}
                        disabled={disabledCount}>Count</button>

                <button onClick={() => props.reset()}
                        disabled={disabledReset}>Reset</button>

            </div>
        </div>
    )
}

/*

4. есть условие по которому при достижении числа 5 кнопка count ловит disabled
. цвет в счетчика в табло меняется на красный
5. кнопка сброс сбрасывает значение стейта в ноль, то есть передает туда это значение
. после чего ловит disabled
. при этом активируется кнопка count
. цвет меняется на белый - решить через присвоение и затирание класа limit

*/



