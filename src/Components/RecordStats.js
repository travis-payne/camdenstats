import React, {useState, useEffect} from 'react';
import { Col, Container, Row, Form, Button, Nav } from 'react-bootstrap'

import '../css/RecordStats.css';
import RecordGoalModal from './RecordGoalModal.js';
import GraphQlUtils from '../utils/graphqlUtils.js'


const RecordStats = (props) => {
    const [goalModalShow, setGoalModalShow] = useState(false);
    const [playersInGame, setPlayersInGame] = useState([])

    const recordClicked = async () => {
        await fetchPlayersInGame()
        setGoalModalShow(true)
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
        <Nav.Item as={Button} size="lg" className='recordButton' onClick={recordClicked} >Record Goal</Nav.Item>
        <Nav.Item as={Button} size="lg"className='recordButton' >Record Save</Nav.Item>
        <Nav.Item as={Button} size="lg" className='recordButton'>Record Caused Turnover</Nav.Item>
      </Nav>
      <RecordGoalModal
        show={goalModalShow}
        onHide={() => setGoalModalShow(false)}
        players={playersInGame}
        gameId={props.gameId}
        onGoal={props.onGoal}
      />
    </Container>
  )
}

export default RecordStats
