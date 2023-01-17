import React from 'react'
import { useState } from 'react'
import "./Quiz.css"

const Quiz = () => {
    var questionBank=[
        {
            Question:"Javascript is an _______ language?",
            Answers:[
                {Answer:"Object-Oriented",isCorrect:true},
                {Answer:"Object-Based",isCorrect:false},
                {Answer:"Procedural",isCorrect:false},
                {Answer:"None of above",isCorrect:false}
            ]
        },
        {
            Question:"Which of the following keywords is used to define a variable in Javascript?",
            Answers:[
                {Answer:"var",isCorrect:false},
                {Answer:"let",isCorrect:false},
                {Answer:"both",isCorrect:true},
                {Answer:"None of above",isCorrect:false}
            ]
        },
        {
            Question:"How can a datatype be declared to be a constant type?",
            Answers:[
                
                {Answer:"constant",isCorrect:false},
                {Answer:"var",isCorrect:false},
                {Answer:"const",isCorrect:true},
                {Answer:"let",isCorrect:false}
            ]
        },
        {
            Question:"What is mongoose?",
            Answers:[
                
                {Answer:"Language",isCorrect:false},
                {Answer:"Framework",isCorrect:false},
                {Answer:"Library",isCorrect:true},
                {Answer:"Module",isCorrect:false}
            ]
        },
        {
            Question:"What is javascript ?",
            Answers:[
                
                {Answer:"Language",isCorrect:false},
                {Answer:"Dynamic Programmimg Language",isCorrect:true},
                {Answer:"Framework",isCorrect:false},
                {Answer:"Module",isCorrect:false}
            ]
        },
        {
            Question:"What is NodeJS ?",
            Answers:[
                
                {Answer:"Language",isCorrect:false},
                {Answer:"Runtime Environment",isCorrect:true},
                {Answer:"Framework",isCorrect:false},
                {Answer:"Module",isCorrect:false}
            ]
        },
        {
            Question:"Find is used for?",
            Answers:[
                
                {Answer:"Fetch all documents from DB",isCorrect:true},
                {Answer:"Finding Data",isCorrect:false},
                {Answer:"Find all only document from DB",isCorrect:false},
                {Answer:"Option not available",isCorrect:false}
            ]
        },
        {
            Question:"Express is used for?",
            Answers:[
                
                {Answer:"Building backend for web and Phones",isCorrect:true},
                {Answer:"For Https Methods",isCorrect:false},
                {Answer:"Is used for connecting nodejs to Mongodb",isCorrect:false},
                {Answer:"Option not available",isCorrect:false}
            ]
        },{
            Question:"When an operator’s value is NULL, the typeof returned by the unary operator is :",
            Answers:[
                
                {Answer:"Object",isCorrect:false},
                {Answer:"Null",isCorrect:true},
                {Answer:"Boolean",isCorrect:false},
                {Answer:"Undefined",isCorrect:false}
            ]
        },
        {
            Question:"Which function is used to serialize an object into a JSON string in Javascript?",
            Answers:[
                
                {Answer:"parse()",isCorrect:false},
                {Answer:"stringify()",isCorrect:true},
                {Answer:"convert()",isCorrect:false},
                {Answer:"none of above",isCorrect:false}
            ]
        }
    ]
    //console.log(questionBank)
    const [currentQuestion,setCurrentQuestion]=useState(0)
    const [score,setScore]=useState(0)
    const [showScore,setShowScore]=useState(false);

    const handleAnswerResponse=(isCorrect)=>{
        if(isCorrect){
            setScore(score+1);
        }
        const nextQuestion =currentQuestion+1
        if(nextQuestion<questionBank.length)
        {
            setCurrentQuestion(nextQuestion)
        }
        else{
            setShowScore(true)
        }
    }

const resetQuiz =()=>{
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
}

  return (
    
    <div className='app'>
        {showScore ?(
        <div className='score-section'>
            You have scored {score} out of {questionBank.length}
            <>
                <button type='submit' onClick={resetQuiz}>Retry !</button>
                </>
        </div>)
        :(
            <>
            <div className='question-section'>

                <div className='question-count'>
                <span>{currentQuestion+1}</span>/{questionBank.length}
                
                </div>

                <div className='question-text'>
                {questionBank[currentQuestion].Question}
                </div>
            </div>

            <div className='answer-section'>
                {questionBank[currentQuestion].Answers.map((answer,)=> (
                    <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                ))}
            </div>
            </>
        )
        }
        </div>
  )
}

export default Quiz