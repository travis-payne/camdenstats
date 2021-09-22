import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { createPlayer } from '../graphql/mutations';
import Amplify, { API, graphqlOperation } from 'aws-amplify';


const blankState = { name: '', position: '', team: '' };

const AddPlayer = (props) => {
    const [ form, setForm ] = useState();

    const setField = (field, value) => {
        setForm({
          ...form,
          [field]: value
        })
      }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            if (!form.name || !form.position) return
            const player = { ...form }
            await API.graphql(graphqlOperation(createPlayer, {input: player}))
          } catch (err) {
            console.log('error creating Player:', err)
          }
        e.target.reset();
        setForm(blankState);
        props.props.onPlayerAdd();
      }

  return (
      <Form className="playerForm" onSubmit={handleSubmit}>
        <Row>
          <Col>
          <Form.Group className="mb-3">
          <Form.Label>Player Name:</Form.Label>
          <Form.Control type="name" placeholder="Enter name" onChange={e => setField('name', e.target.value) } />
        </Form.Group>
        </Col>


        <Col>
        <Form.Group className="mb-3">
        <Form.Label>Player Position:</Form.Label>
        <Form.Select aria-label="Position Selection"  onChange={e => setField('position', e.target.value) }>
          <option></option>
          <option value="Goalkeeper">Goalkeeper</option>
          <option value="Defence">Defence</option>
          <option value="LSM">LSM</option>
          <option value="Defensive Midfield">Defensive Midfield</option>
          <option value="Midfield">Midfield</option>
          <option value="Attack">Attack</option>
        </Form.Select>
        </Form.Group>
        </Col>


        <Col>
        <Form.Group className="mb-3">
        <Form.Label>Player Team:</Form.Label>
        <Form.Select aria-label="Team Selection"  onChange={e => setField('team', e.target.value) }>
          <option></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>
        </Form.Group>
        </Col>


        <Col className="d-flex justify-content-center align-items-center">
        <Button variant="primary" type="submit" >
          Submit
        </Button>
        </Col>
                </Row>
      </Form>
  )
}

export default AddPlayer;
