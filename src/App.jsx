import React,{useState} from "react"
import './App.css'
import Result from './components/Result'
import MathOp from './components/MathOp'
import Numbers from './components/Numbers'
import Functions from './components/Functions'
import words from 'lodash.words'

const App=()=>{
    const [resultValue,setResultValue]=useState("")
    const items=words(resultValue,/[^%^-^+^*^/]+/g)
    const lastValue=items.length>0 ? items[items.length-1] : "0";
    return (
        <main className="react-calculator">
            <Result value={lastValue}/>
            <Numbers onClickNumber={value=>{
                setResultValue(`${resultValue}${value}`)
            }}/>
            <Functions
                onContentClear={operation=>setResultValue("")}
                onDelete={()=>{
                    if(resultValue.length>0){
                        const v=resultValue.substring(0,resultValue.length-1)
                        setResultValue(v)
                    }
                    
                }}
                onClickNumber={value=>{
                    setResultValue(`${resultValue}${value}`)
                }}
            />
            <MathOp 
                onClickOperation={operation=>{
                    if(resultValue.at(-1).search(/[%-+*/]/g)<0)
                        setResultValue(`${resultValue}${operation}`)
                }}
                onClickEqual={()=>{
                    let value=resultValue;
                    if(value.at(-1).search(/[%-+*/]/g)>=0)
                        value=resultValue.substring(0,resultValue.length-1)
                    setResultValue(eval(value).toString())
                    
                }}
            />
        </main>
    )
}

export default App