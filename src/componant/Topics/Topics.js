import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicsUi from '../TopicsUI/TopicsUi';
import "./Topics.css"


const Topics = () => {
    const quizData = useLoaderData();
    const { data } = quizData;
    return (
        <div>
            <div className='flex'>
                {
                    data.map(singalData => <TopicsUi key={singalData.id} singalData={singalData}></TopicsUi>)
                }

            </div>
        </div>
    );
};

export default Topics;