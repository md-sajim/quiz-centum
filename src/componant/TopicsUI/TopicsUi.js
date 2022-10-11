import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './TopicsUi.css'
const TopicsUi = ({ singalData }) => {
    const navigate = useNavigate()
    const hendlebtn = id => {

        navigate(`/quizs/${id}`)
    }
    const { id, name, logo, total } = singalData;
    return (
        <Card style={{ width: "100%" }}>
            <Card.Img className="card-img" variant="top" src={logo} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text><strong>
                    Total quiz: {total}
                </strong>
                </Card.Text>
                <Button variant="primary" onClick={() => hendlebtn(id)} className='quiz-btn'>Quiz {name} <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Button>
            </Card.Body>
        </Card>
    );
};

export default TopicsUi;