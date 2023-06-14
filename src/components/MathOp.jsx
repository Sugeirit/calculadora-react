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

const MathOp = ({onDelete,onClickOperation,onClickEqual})=>(
    <section className="math-operations">
        <Button text="&larr;" clickHandler={onDelete}/>
        {
            renderOp(onClickOperation)
        }
        <Button text="=" clickHandler={onClickEqual} />
    </section>
)

MathOp.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired

}


export default MathOp;