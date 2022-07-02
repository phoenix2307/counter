import s from './NewCounter.module.css'

type NewCounterType = {
    count: number
    addCount: () => void
    resetCount: () => void
    disabledCount: boolean
    disabledReset: boolean
    limitCount: number
}

export const NewCounter = (props: NewCounterType) => {

    const displayStyle = props.count === props.limitCount ? s.limitCount : s.displayStyle
    let buttonCountStyle = props.disabledCount ? `${s.buttonStyle} ${s.disabledBtn}` : s.buttonStyle
    let buttonResetStyle = props.disabledReset ? `${s.buttonStyle} ${s.disabledBtn}` : s.buttonStyle

    const countHandler = () => {
            props.addCount()
    }
    const resetHandler = () => {
        props.resetCount()
    }

    return (

        <div className={s.wrapper}>

            <div className={displayStyle}>{props.count}</div>

            <div className={s.buttomBlock}>

                <div>
                    <button className={buttonCountStyle}
                            onClick={countHandler}
                            disabled={props.disabledCount}>count
                    </button>
                </div>

                <div>
                    <button className={buttonResetStyle}
                            onClick={resetHandler}
                            disabled={props.disabledReset}>reset
                    </button>
                </div>
            </div>


        </div>

    )
}