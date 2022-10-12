import React, { useState } from 'react';
import './QuizQuestion.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const QuizQuestion = ({ questions }) => {
    const [correct, setCorrect] = useState("")
    const notify = () => toast("success!");
    const notify1 = () => toast("fail!");
    // console.log(questions)
    const { question, options, correctAnswer } = questions.question;
    ;
    const heandalCorrectAnswer = ans => {
        setCorrect(ans)
    }
    const  chackCorrectAnswer = corrAns =>{
        console.log(corrAns)
        if(corrAns === correctAnswer){
            notify()
        }
        else{
            notify1()
        }

    } 
    return (
        <div className='question-container'>
            <h6>{correct}</h6>
            <div className='d-flex justify-content-between my-4'>
                <h6>Quiz {questions._id + 1}: {question}</h6>
                <FontAwesomeIcon className='pointer' onClick={() => heandalCorrectAnswer(correctAnswer)} icon={faEye}></FontAwesomeIcon>
            </div>
            <div className='option-container'>
                {
                    options.map((option,id) => {
                        return (
                            <div key={id} className='option'>
                                <input className='pointer' onClick={()=>chackCorrectAnswer(option)} type="radio" name={questions._id} id="" /> {option}
                                <ToastContainer />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default QuizQuestion;