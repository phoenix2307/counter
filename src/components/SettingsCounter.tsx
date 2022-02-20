import React, {ChangeEvent, useState} from "react";
import '../App.css'
import {ErrorHandlingType} from "../App";

type SettingsType = {
    toggleSet: (newMinValue?: number, newMaxValue?: number) => void
    settingCounter: (min: number, max: number) => void
    errorHandling: ErrorHandlingType
    minValue: number
    maxValue: number
}

export const SettingsCounter = ({errorHandling, ...props}: SettingsType) => {
    let disableBtnApply = false

    let [valueInputMin, setValueInputMin] = useState(props.minValue)
    let [valueInputMax, setValueInputMax] = useState(props.maxValue)

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

    const toggleHandler = () => {
        props.toggleSet(valueInputMin, valueInputMax)
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
                    {/*---------input minimum--------------*/}
                    <input
                        value={valueInputMin}
                        onChange={onChangeHandlerMin}
                        className={errorHandling.errorInput}
                    /> min value
                </div>
                <div className={errorHandling.incorrect}>{errorHandling.errorMessage}</div>
                <div className={'inputSet'}>
                    {/*---------input maximum--------------*/}
                    <input
                        value={valueInputMax}
                        onChange={onChangeHandlerMax}
                        className={errorHandling.errorInput}
                    /> max value
                </div>

            </div>
            <div className={'buttons'}>
                <button onClick={toggleHandler}
                        disabled={disableBtnApply}
                >Apply
                </button>
            </div>

        </div>
    )
}