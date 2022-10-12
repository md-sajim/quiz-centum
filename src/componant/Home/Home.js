import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Topics from '../Topics/Topics';

const Home = () => {
    return (
        <div>
            <div className='header-text'>
                <h4>Welcome to the world's largest quiz community. Play a quiz or create your own.<br></br> Join a virtual or live event. There's a QuizCentum <FontAwesomeIcon icon={faBrain}></FontAwesomeIcon> for everyone!</h4>
            </div>
            <Topics></Topics>
        </div>
    );
};

export default Home;