import { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import GraphQlUtils from '../../utils/graphqlUtils.js'
import { API, graphqlOperation } from 'aws-amplify'
import * as mutations from '../../graphql/mutations'

const blankState = { player: '', assist: '' }

const RecordTurnoverModal = (props) => {
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
      await API.graphql(
        graphqlOperation(mutations.createCausedTurnover, {
          input: {
            playerID: playerId,
            gameID: props.gameid,
          },
        }),
      )
    } catch (err) {
      console.log('error creating turnover:', err)
    }
    e.target.reset()
    props.onHide()
    props.turnovercaused(props.gameid)
  }
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Record Caused Turnover
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Caused By:</Form.Label>
            <Form.Select
              aria-label="Caused By:"
              onChange={(e) => setField('player', e.target.value)}
            >
              <option> </option>
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

export default RecordTurnoverModal
