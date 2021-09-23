import { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import GraphQlUtils from '../../utils/graphqlUtils.js'
import { API, graphqlOperation } from 'aws-amplify'
import * as mutations from '../../graphql/mutations'
import { v4 as uuidv4 } from 'uuid'

const blankState = { player: '' }

const RecordGoalModal = (props) => {
  const [form, setForm] = useState(blankState)

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const playerId = form.player;
      var assistPlayerId = form.assist;
      const assistID = uuidv4()
      if (assistPlayerId !== 'Unassisted') {
        // Create assist, get assist ID, assign to assist
        await API.graphql(
          graphqlOperation(mutations.createAssist, {
            input: {
              id: assistID,
              playerID: assistPlayerId,
              gameID: props.gameId,
            },
          }),
        )

      } 
      await API.graphql(
        graphqlOperation(mutations.createGoal, {
          input: {
            playerID: playerId,
            gameID: props.gameId,
            assistID: assistID,
          },
        }),
      )
    } catch (err) {
      console.log('error creating Player:', err)
    }
    e.target.reset()
    props.onHide()
    props.onGoal(props.gameId)
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Record Goal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Scored By</Form.Label>
            <Form.Select
              aria-label="Scored By"
              onChange={(e) => setField('player', e.target.value)}
            >
              <option> </option>
              {props.players.map((player) => {
                return <option value={player.id}> {player.name} </option>
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Assisted By:</Form.Label>
            <Form.Select
              aria-label="Assisted By"
              onChange={(e) => setField('assist', e.target.value)}
            >
              <option value="Unassisted">Unassisted</option>
              {props.players.map((player) => {
                return <option value={player.id}> {player.name} </option>
              })}
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RecordGoalModal
