import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";


function App() {
    let [count, setCount] = useState<number>(0)
    const increment = () => {
        if (count < 5) {
            count++
            setCount(count)
        }
    }

    const reset = () => {
        return setCount(0)
    }

    return (
        <div className="App">
            <Counter increment={increment} value={count} reset={reset}/>
        </div>
    );
}

export default App;
