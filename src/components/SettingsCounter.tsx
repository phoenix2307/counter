import React, {ChangeEvent, useState} from "react";
import '../App.css'
import {ErrorHandlingType} from "../App";

type SettingsType = {
    toggleSet: (startValue: number) => void
    settingCounter: (min: number, max: number) => void
    errorHandling: ErrorHandlingType
}

export const SettingsCounter = ({errorHandling, ...props}: SettingsType) => {
    let disableBtnApply = false

    let [valueInputMin, setValueInputMin] = useState(0)
    let [valueInputMax, setValueInputMax] = useState(10)

    const onChangeHandlerMin = (e: ChangeEvent<HTMLInputElement>) => {
        valueInputMin = +e.currentTarget.value
        setValueInputMin(valueInputMin)
        props.settingCounter(valueInputMin, valueInputMax)
    }

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        valueInputMax = +e.currentTarget.value
        setValueInputMax(valueInputMax)
        props.settingCounter(valueInputMin, valueInputMax)
    }

    if (valueInputMin === valueInputMax || valueInputMin > valueInputMax) {
        errorHandling.errorInput = 'setError'
        errorHandling.incorrect = 'incorrectValue'
        errorHandling.errorMessage = 'Enter correct values'
        disableBtnApply = true
    }

    return (
            <div className={'wrapper'}>
                <div className={`settings`}>
                    <div className={'inputSet'}>
                        {/*---------input1--------------*/}
                        <input value={valueInputMin}
                               onChange={(e)=>onChangeHandlerMin(e)}
                               className={errorHandling.errorInput}
                        /> min value
                    </div>
                    <div className={errorHandling.incorrect }>{errorHandling.errorMessage}</div>
                    <div className={'inputSet'}>
                        {/*---------input2--------------*/}
                        <input value={valueInputMax}
                               onChange={(e)=>onChangeHandlerMax(e)}
                               className={errorHandling.errorInput}
                        /> max value
                    </div>

                </div>
                <div className={'buttons'}>
                    <button onClick={()=>props.toggleSet(valueInputMin)}
                    disabled={disableBtnApply}
                    >Apply</button>
                </div>

            </div>
    )
}