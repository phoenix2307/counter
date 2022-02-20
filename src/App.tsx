import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SettingsCounter} from "./components/SettingsCounter";

export type ErrorHandlingType = {
    incorrect: string
    colorMaxValue: string
    errorInput: string
    errorMessage: string
}

function App() {

    /*------------state--------------------------------------------------*/


    let [minValue, setMinValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(10)


    const [showSetting, setShowSetting] = useState<boolean>(true)
    const [currentValue, setCurrentValue] = useState<number>(minValue)

    const errorHandling: ErrorHandlingType = {
        incorrect: '',
        colorMaxValue: '',
        errorInput: '',
        errorMessage: ''
    }

    /*------------action----------------------------------------------*/
    const settingCounter = (min: number, max: number) => {
        setMinValue(min)
        setMaxValue(max)
    }

    const increment = (currentValue: number) => {
        currentValue++
        setCurrentValue(currentValue)
    }
    const reset = () => {
        return setCurrentValue(minValue)
    }
    const toggleSet = (newMinValue?: number, newMaxValue?: number) => {
        if (newMinValue && newMaxValue) {
            setCurrentValue(newMinValue)
            setShowSetting(!showSetting)
        } else {
            setShowSetting(!showSetting)
        }

    }

    return (
        <div className="App">
            {
                showSetting
                    ? <SettingsCounter
                        toggleSet={toggleSet}
                        settingCounter={settingCounter}
                        errorHandling={errorHandling}
                        minValue={minValue}
                        maxValue={maxValue}
                    />
                    : <Counter increment={increment}
                               currentValue={currentValue}
                               minValue={minValue}
                               maxValue={maxValue}
                               errorHandling={errorHandling}
                               reset={reset}
                               toggleSet={toggleSet}/>
            }

        </div>
    );
}

export default App;
