import {Card} from 'react-bootstrap'
import capslogo from '../media/capslogo.png';
import '../css/LiveScoreCard.css'

const LiveScoreCard = (props) => {
  return (
    <Card
      bg='success'
      text='success'
      style={{ width: '18rem' }}
      className="mb-2 liveCard"
    >
        {console.log(props)}
    <Card.Header> <img className='liveLogo' src={capslogo}></img></Card.Header>
      <Card.Body>
        <Card.Text>
          <h5>Camden {props.gameData.team}s: {props.gameData.goals.items.length}    </h5>
          <h5>{props.gameData.against}: {props.gameData.oppositionscore} </h5>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default LiveScoreCard
