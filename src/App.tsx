import React, {useState} from 'react';
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

    /*------------state---------------*/
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

    /*------------action-------------*/
    const settingCounter = (min: number, max: number) => {
        setMinValue(min) // localStorage.getItem(key)
        setMaxValue(max) //localStorage.getItem(key)
    }

    const increment = (currentValue: number): number => {
        if (currentValue === maxValue || currentValue > maxValue) {

        }
        if (currentValue < maxValue) {
            currentValue++
            setCurrentValue(currentValue)
        }
        return currentValue
    }
    const reset = () => {
        return setCurrentValue(minValue)
    }
    const toggleSet = (startValue?: number) => {
        if (startValue) {
            setCurrentValue(startValue)
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
