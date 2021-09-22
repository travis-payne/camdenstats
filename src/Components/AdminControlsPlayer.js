import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap'
import { API, graphqlOperation } from 'aws-amplify';
import { listPlayers } from '../graphql/queries';
import { Col, Container, Row } from 'react-bootstrap';

import AddPlayer from './AddPlayer.js';

const AdminControlsPlayer = () => {
    
const [players, setPlayers] = useState([])
  
useEffect(() => {
  fetchPlayers()
}, [])

const renderPlayer = (player, index) => {
    return (<tr key = {index}>
        <td>{player.name}</td>
        <td>{player.position}</td>
        <td>{player.team}</td>
    </tr> );
}

const fetchPlayers = async ()  => {
  try {
    const playerData = await API.graphql(graphqlOperation(listPlayers));
    const players = playerData.data.listPlayers.items;
    setPlayers(players);
  } catch (err) {
    console.log('error fetching Players')
  }
}
    const childProps = {
        onPlayerAdd: fetchPlayers,
    };


  return (
    <Container>
      <br />
      <br />
      <Row>
        <Col className="d-flex justify-content-center"><AddPlayer props={childProps} /></Col>
        <Col>
            <h4 className="d-flex justify-content-center">Player List</h4>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Team</th>
            </tr>
        </thead>
        <tbody>
            {players.map(renderPlayer)}
        </tbody>
        
    </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminControlsPlayer
