import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SettingsCounter} from "./components/SettingsCounter";


function App() {
    let minValue = 0
    let maxValue = 7

    /*------------state---------------*/
    const [showSetting, setShowSetting] = useState<boolean>(false)
    const [currentValue, setCurrentValue] = useState<number>(minValue)
    // let [minValue, setMinValue] = useState(0)
    // let [maxValue, setMaxValue] = useState(0)


    /*------------action-------------*/
    const settingCounter = (min: number, max: number) => {
        minValue = min
        maxValue = max
    }

    const increment = (currentValue: number, minValue: number, maxValue: number): number => {
        if (currentValue < maxValue) {
            currentValue++
            setCurrentValue(currentValue)
        }
        return currentValue
    }
    const reset = () => {
        return setCurrentValue(0)
    }

    const toggleSet = () => {
        setShowSetting(!showSetting)
    }

    return (
        <div className="App">
            <button onClick={() => setShowSetting(!showSetting)}>change</button>
            {
                !showSetting
                    ? <Counter increment={increment}
                               currentValue={currentValue}
                               minValue={minValue}
                               maxValue={maxValue}
                               settingCounter={settingCounter}
                               reset={reset}
                               toggleSet={toggleSet}/>
                    : <SettingsCounter
                        toggleSet={toggleSet}
                        settingCounter={settingCounter}
                    />
            }
            {/*<Counter increment={increment}
                     currentValue={currentValue}
                     minValue={minValue}
                     maxValue={maxValue}
                     settingCounter={settingCounter}
                     reset={reset}/>
            <SettingsCounter/>*/}
        </div>
    );
}

export default App;
