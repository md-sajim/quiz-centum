import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicsUi from '../TopicsUI/TopicsUi';
import "./Topics.css"
import Image from "../../img/quiz_img.jpg"

const Topics = () => {
    const quizData = useLoaderData();
    const { data } = quizData;
    return (
        <div>
            <div className='header-text'>
                <h4>Welcome to the world's largest quiz community. Play a quiz or create your own.<br></br> Join a virtual or live event. There's a QuizCentum <FontAwesomeIcon icon={faBrain}></FontAwesomeIcon> for everyone!</h4>
            </div>
            <div className='flex'>
                {
                    data.map(singalData => <TopicsUi key={singalData.id} singalData={singalData}></TopicsUi>)
                }

            </div>
        </div>
    );
};

export default Topics;