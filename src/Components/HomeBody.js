import { Container, Row, Col } from 'react-bootstrap'
import '../css/HomeBody.css'

const HomeBody = () => {
  return (
    <Container className="home">
      <h2 className="d-flex justify-content-center">Leaderboards</h2>
      <br />
      <br />
      <Row>
        <Col className="d-flex justify-content-center">Points</Col>
        <Col className="d-flex justify-content-center">Goals</Col>
        <Col className="d-flex justify-content-center">Assists</Col>
      </Row>
    </Container>
  )
}

export default HomeBody
