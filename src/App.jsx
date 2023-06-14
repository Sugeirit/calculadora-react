import React,{useState} from "react"
import './App.css'
import Result from './components/Result'
import MathOp from './components/MathOp'
import Numbers from './components/Numbers'
import Functions from './components/Functions'
import words from 'lodash.words'
import AddFuntions from "./components/AddFuntions"

const App=()=>{
    const [resultValue,setResultValue]=useState("")
    const items=words(resultValue,/[^%^-^+^*^/]+/g)
    const lastValue=items.length>0 ? items[items.length-1] : "0";

    const onClickNumber=value=>{
        setResultValue(`${resultValue}${value}`)
    }
    const onClickPi=()=>{
        const pi=3.14159
        setResultValue(`${resultValue}${pi}`)
    }
    const onClickE=()=>{
        const constE=2.718
        setResultValue(`${resultValue}${constE}`)
    }
    
    const onDelete=()=>{
        if(resultValue.length>0){
            const v=resultValue.substring(0,resultValue.length-1)
            setResultValue(v)
        }
    }
    const onClickOperation=value=>{
        if(value.length<=0)
            return;
        if(resultValue.at(-1).search(/[%-+*/]/g)<0)
            setResultValue(`${resultValue}${value}`)
    }
    const onClickEqual=()=>{
        let value=resultValue;
        if(value.length<=0)
            return;
        if(value.at(-1).search(/[%-+*/]/g)>=0)
            value=resultValue.substring(0,resultValue.length-1)
        setResultValue(eval(value).toString())
    }

    const onClickDiv=()=>{
        if(lastValue.length>0){
            const v=eval(`1/${lastValue}`).toString()
            const new_result=resultValue.substring(0,resultValue.length-lastValue.length)
            setResultValue(`${new_result}${v}`)
        }
    }

    return (
        <main className="react-calculator">
            <Result value={lastValue}/>
            <AddFuntions
                onContentClear={()=>setResultValue("")}
                onClickOperation={onClickOperation}
                onClickPi={onClickPi}
            />
            <Numbers onClickNumber={onClickNumber}/>
            <Functions
                onClickE={onClickE}
                onClickNumber={onClickNumber}
                onClickDiv={onClickDiv}
            />
            <MathOp 
                onClickOperation={onClickOperation}
                onClickEqual={onClickEqual}
                onDelete={onDelete}
            />
        </main>
    )
}

export default App