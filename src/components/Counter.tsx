import React, {useState} from "react";
import '../App.css'


type CounterType = {
    increment: (currentValue: number, minValue: number, maxValue: number) => void
    reset: () => void
    currentValue: number
    minValue: number
    maxValue: number
    settingCounter: (min: number, max: number) => void
    toggleSet: () => void
}
export const Counter = (props: CounterType) => {

    let colorLimit = ''
    let disabledCount = false
    let disabledReset = false

    if (props.currentValue === props.minValue) {
        disabledReset = true
    }
    if (props.currentValue === props.maxValue) {
        disabledCount = true
        colorLimit = 'limit'
    }

    return (
        <div className={'wrapper'}>
            <div className={`table ${colorLimit}`}>{props.currentValue}</div>
            <div className={'buttons'}>

                <button onClick={() => props.increment(props.currentValue, props.minValue, props.maxValue)}
                        disabled={disabledCount}>Count
                </button>

                <button onClick={() => props.reset()}
                        disabled={disabledReset}>Reset
                </button>

                <button onClick={props.toggleSet}>SET</button>
            </div>
        </div>
    )
}

type SettingType = {
    settingCounter: (min: number, max: number) => void
}
export const Setting = (props: SettingType) => {



    return (
        <div className={'wrapper'}>
            <div className={`table`}> m</div>
            <div className={'buttons'}>
                {/*<button onClick={()=>props.settingCounter(minValue, maxValue)}>Apply</button>*/}
            </div>

        </div>
    )
}
/*
Сделать переключение между отображением двух окон:
-----
Если true отображать компоненту1, если false - компоненту2
1. монитор с цифрой
2. окно настроек
Посмотреть как реализовано в Accordion
-----
3. add state for max and min values
4. use my button's style from homework by Ignat
5. create animation for show next window my Counter
6. toggle activate - btn SET. Возможно сделать ее одной или две кнопкув двух компонентах, но которые обращаются к одному state и меняют его значение на противоположное


*/



