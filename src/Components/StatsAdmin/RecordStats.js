import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Form, Button, Nav } from 'react-bootstrap'

import '../../css/RecordStats.css'
import RecordGoalModal from './RecordGoalModal.js'
import RecordTurnoverModal from './RecordTurnoverModal.js'
import GraphQlUtils from '../../utils/graphqlUtils.js'

const RecordStats = (props) => {
  const [goalModalShow, setGoalModalShow] = useState(false)
  const [turnoverModalShow, setTurnoverModalShow] = useState(false)
  const [gameData, setGameData] = useState({})
  const [playersInGame, setPlayersInGame] = useState([])


  const recordClickedGoal = async () => {
    await fetchPlayersInGame()
    setGoalModalShow(true)
  }
  const recordClickedTurnover = async () => {
    await fetchPlayersInGame()
    setTurnoverModalShow(true)
  }

  const recordOppositionGoal = async () => {
    const clone = {
      id: gameData.id,
      against: gameData.against,
      date: gameData.date,
      team: gameData.team,
      location: gameData.location,
      live: gameData.live,
      oppositionscore: gameData.oppositionscore + 1
    }
    const result = await GraphQlUtils.updateGame(clone)
    setGameData(result.data.updateGame)
    props.refreshGames()
  }

  const removeOppositionGoal = async () => {
    const clone = {
      id: gameData.id,
      against: gameData.against,
      date: gameData.date,
      team: gameData.team,
      location: gameData.location,
      live: gameData.live,
      oppositionscore: gameData.oppositionscore - 1
    }
    const result = await GraphQlUtils.updateGame(clone)
    setGameData(result.data.updateGame)
    props.refreshGames()
  }

  const fetchPlayersInGame = async () => {
    const playerArray = []
    const result = await GraphQlUtils.getPlayersByGame(props.gameId)
    result.forEach((p) => {
      playerArray.push(p.player)
    })
    setPlayersInGame(playerArray)
  }

  const fetchGameData = async () => {
    const result = await GraphQlUtils.getGame(props.gameId)
    setGameData(result)
  }

  const setGameLive = async () => {
    const clone = {
      id: gameData.id,
      against: gameData.against,
      date: gameData.date,
      team: gameData.team,
      location: gameData.location,
      live: !gameData.live,
      oppositionscore: gameData.oppositionscore
    }
    const result = await GraphQlUtils.updateGame(clone)
    props.setLive(!gameData.live)
    props.refreshGames()
    setGameData(result.data.updateGame)
  }

  useEffect(() => {
    fetchPlayersInGame()
  }, [])

  useEffect(() => {
    fetchGameData()
  }, [])

  return (
    <Container className="d-flex h-100 justify-content-center align-items-center">
      {console.log(props.live)}
      {props.live ? (
        <Nav className="flex-column">
          <Nav.Item
            as={Button}
            size="lg"
            className="recordButton"
            onClick={recordClickedGoal}
          >
            Record Goal
          </Nav.Item>
          <Nav.Item
            as={Button}
            size="lg"
            className="recordButton"
            onClick={recordClickedTurnover}
          >
            Record Caused Turnover
          </Nav.Item>
          <Nav.Item
            as={Button}
            size="lg"
            className="recordButton"
            onClick={recordOppositionGoal}
          >
            Record Opposition Goal
          </Nav.Item>
          <Nav.Item
            as={Button}
            size="lg"
            className="recordButton"
            onClick={removeOppositionGoal}
          >
            Remove Opposition Goal
          </Nav.Item>
          <Nav.Item
            as={Button}
            size="lg"
            className="recordButton"
            onClick={setGameLive}
          >
            End Game
          </Nav.Item>
        </Nav>
      ) : (
        <Button onClick={setGameLive}>Go Live!</Button>
      )}
      <RecordTurnoverModal
        show={turnoverModalShow}
        onHide={() => setTurnoverModalShow(false)}
        players={playersInGame}
        gameid={props.gameId}
        turnovercaused={props.turnoverCaused}
      />
      <RecordGoalModal
        show={goalModalShow}
        onHide={() => setGoalModalShow(false)}
        players={playersInGame}
        gameid={props.gameId}
        goalscored={props.goalScored}
      />
    </Container>
  )
}

export default RecordStats
