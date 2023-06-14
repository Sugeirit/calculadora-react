import React from "react"
import PropTypes from 'prop-types'
import Button from './Button'

const Functions = ({onClickE,onClickNumber,onClickDiv})=>(
    <section className="functions">
        <Button  text="1/x" clickHandler={onClickDiv} />
        <Button  text="e" clickHandler={onClickE} />
        <Button  text="." clickHandler={onClickNumber} />
    </section>
)

Functions.propTypes = {
    onClickE: PropTypes.func.isRequired,
    onClickNumber: PropTypes.func.isRequired,
    onClickDiv: PropTypes.func.isRequired
}


export default Functions;