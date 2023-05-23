import React from "react"
import PropTypes from 'prop-types'
import Button from './Button'

const op=["+","-","*","/"]

const renderOp=(onClickOperation)=>{
    const render=op =>(
        <Button 
            key={op} 
            text={op} 
            clickHandler={onClickOperation}/>
        )
    return op.map(render)
}

const MathOp = ({onClickOperation,onClickEqual})=>(
    <section className="math-operations">
        {
            renderOp(onClickOperation)
        }
        <Button text="=" clickHandler={onClickEqual} />
    </section>
)

MathOp.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}


export default MathOp;