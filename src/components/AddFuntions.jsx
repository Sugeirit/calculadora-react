import React from "react"
import PropTypes from 'prop-types'
import Button from './Button'

const AddFuntions = ({onContentClear,onClickOperation,onClickPi})=>(
    <section className="functions">
        <Button type="button-long-text" text="%" clickHandler={onClickOperation}/>
        <Button text="&#960;" clickHandler={onClickPi} />
        <Button type="button-long-text" text="C" clickHandler={onContentClear}/>
    </section>
)

AddFuntions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onClickOperation: PropTypes.func.isRequired,
    onClickPi: PropTypes.func.isRequired
}


export default AddFuntions;