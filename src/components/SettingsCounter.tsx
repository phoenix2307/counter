import React, {ChangeEvent, useState} from "react";
import '../App.css'

type SettingsType = {
    toggleSet: () => void
    settingCounter: (min: number, max: number) => void
}

export const SettingsCounter = (props: SettingsType) => {

    let [minValue, setMinValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(10)
    let [valueInputMin, setValueInputMin] = useState(0)
    let [valueInputMax, setValueInputMax] = useState(10)

    const onChangeHandlerMin = (e: ChangeEvent<HTMLInputElement>) => {
        minValue = +e.currentTarget.value
        setMinValue(minValue)
        props.settingCounter(minValue, maxValue)
    }

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        maxValue = +e.currentTarget.value
        setMaxValue(maxValue)
        props.settingCounter(minValue, maxValue)
    }

    return (
            <div className={'wrapper'}>
                <div className={`settings`}>
                    <div className={'inputSet'}>
                        <input value={minValue}
                               onChange={(e)=>onChangeHandlerMin(e)}
                        /> min value
                    </div>
                    <div className={'inputSet'}>
                        <input value={maxValue}
                               onChange={(e)=>onChangeHandlerMax(e)}
                        /> max value
                    </div>

                </div>
                <div className={'buttons'}>
                    <button onClick={props.toggleSet}>Apply</button>
                </div>

            </div>
    )
}