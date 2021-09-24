import { useEffect, useState } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import '../css/Home.css'
import GraphQlUtils from '../utils/graphqlUtils.js'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import LiveScoreCard from './LiveScoreCard.js'

const Home = () => {
  const [goals, setGoals] = useState([])
  const [assists, setAssists] = useState([])
  const [points, setPoints] = useState([])
  const [turnovers, setTurnovers] = useState([])
  const [games, setGames] = useState([])


  const fetchPlayerData = async () => {
    var aggregatedData = await GraphQlUtils.fetchAndAggregatePlayers()
    const goalData = [...aggregatedData]
    const assistData = [...aggregatedData]
    const pointsData = [...aggregatedData]
    const turnoverData = [...aggregatedData]
    goalData.sort((a, b) => b.goals - a.goals)
    assistData.sort((a, b) => b.assists - a.assists)
    pointsData.sort((a, b) => b.points - a.points)
    turnoverData.sort((a, b) => b.turnovers - a.turnovers)

    setGoals(goalData.slice(0, 5))
    setAssists(assistData.slice(0, 5))
    setPoints(pointsData.slice(0, 5))
    setTurnovers(turnoverData.slice(0, 5))
  }

  const fetchGames = async () => {
    setGames(await GraphQlUtils.fetchGames())
  }


  useEffect(() => {
    fetchPlayerData()
  }, [])

  useEffect(() => {
    fetchGames()
  }, [])

  const renderGoals = (player, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{player.name}</td>
        <td>{player.team}</td>
        <td>{player.position}</td>
        <td>
          <b>{player.goals}</b>
        </td>
      </tr>
    )
  }

  const renderAssists = (player, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{player.name}</td>
        <td>{player.team}</td>
        <td>{player.position}</td>
        <td>
          <b>{player.assists}</b>
        </td>
      </tr>
    )
  }

  const renderPoints = (player, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{player.name}</td>
        <td>{player.team}</td>
        <td>{player.position}</td>
        <td>
          <b>{player.points}</b>
        </td>
      </tr>
    )
  }

  const renderTurnovers = (player, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{player.name}</td>
        <td>{player.team}</td>
        <td>{player.position}</td>
        <td>
          <b>{player.turnovers}</b>
        </td>
      </tr>
    )
  }

  return (
    <Container className="home text-center">
      <h4> Live Scores </h4>
      <Row>
        <Carousel
          plugins={[
            'infinite',
            'arrows',
          ]}
        >
        
          {games.map((game) => {
            if(game.live){
              return  <LiveScoreCard gameData={game} />
            }
            return null
          })}

        </Carousel>
      </Row>
      <br />
      <h2 className="d-flex justify-content-center">Points Leaders</h2>

      <br />
      <Row>
        <Col className="text-center">
          <h4>Goals</h4>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Team</th>
                <th>Position</th>
                <th>Goals</th>
              </tr>
            </thead>
            <tbody>{goals.map(renderGoals)}</tbody>
          </Table>
        </Col>
        <Col className="text-center">
          <h4>Assists</h4>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Team</th>
                <th>Position</th>
                <th>Assists</th>
              </tr>
            </thead>
            <tbody>{assists.map(renderAssists)}</tbody>
          </Table>
        </Col>
        <Col className="text-center">
          <h4>Points</h4>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Team</th>
                <th>Position</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>{points.map(renderPoints)}</tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Caused Turnovers</h4>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Team</th>
                <th>Position</th>
                <th>CTOs</th>
              </tr>
            </thead>
            <tbody>{turnovers.map(renderTurnovers)}</tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
