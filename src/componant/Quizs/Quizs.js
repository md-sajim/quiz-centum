import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import './Quizs.css'

const Quizs = () => {
    const quizsData = useLoaderData()
    console.log(quizsData)
    const questions = quizsData.data.questions;
    const [countAns, setCountAns] = useState(0)
    return (
        <div>
            <div className='question-main-container'>
            <h3>Quiz Of {quizsData.data.name}</h3>
                {
                    questions.map((question, _id) => <QuizQuestion key={question.id} questions={{ question, _id}}></QuizQuestion>)
                }
            </div>
        </div>
    );
};

export default Quizs;