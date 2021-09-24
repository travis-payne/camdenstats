import React, {useState, useEffect} from 'react';
import { Col, Container, Row, Form, Button, Nav } from 'react-bootstrap'

import '../../css/RecordStats.css';
import RecordGoalModal from './RecordGoalModal.js';
import RecordTurnoverModal from './RecordTurnoverModal.js';
import GraphQlUtils from '../../utils/graphqlUtils.js'


const RecordStats = (props) => {
    const [goalModalShow, setGoalModalShow] = useState(false);
    const [turnoverModalShow, setTurnoverModalShow] = useState(false);

    const [playersInGame, setPlayersInGame] = useState([])


    const recordClickedGoal = async () => {
        await fetchPlayersInGame()
        setGoalModalShow(true)
    }
    const recordClickedTurnover = async () => {
        await fetchPlayersInGame()
        setTurnoverModalShow(true)
  }


    const fetchPlayersInGame = async () => {
      const playerArray = [];
      const result = await GraphQlUtils.getPlayersByGame(props.gameId);
        result.forEach( (p) => {
            playerArray.push(p.player);
        });
    setPlayersInGame(playerArray);
  }

  useEffect(() => {
    fetchPlayersInGame()
  }, []);



  return (
    <Container className="d-flex h-100 justify-content-center align-items-center">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Item as={Button} size="lg" className='recordButton' onClick={recordClickedGoal} >Record Goal</Nav.Item>
        {/* <Nav.Item as={Button} size="lg"className='recordButton' >Record Save</Nav.Item> */}
        <Nav.Item as={Button} size="lg" className='recordButton' onClick={recordClickedTurnover}>Record Caused Turnover</Nav.Item>
      </Nav>
      <RecordGoalModal
        show={goalModalShow}
        onHide={() => setGoalModalShow(false)}
        players={playersInGame}
        gameid={props.gameId}
        goalscored={props.goalScored}
      />
        <RecordTurnoverModal
        show={turnoverModalShow}
        onHide={() => setTurnoverModalShow(false)}
        players={playersInGame}
        gameid={props.gameId}
        turnovercaused={props.turnoverCaused}
      />
    </Container>
  )
}

export default RecordStats
