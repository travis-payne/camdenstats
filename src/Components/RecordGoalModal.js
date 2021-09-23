import {useState, useEffect} from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import GraphQlUtils from '../utils/graphqlUtils.js'

const blankState = {player: ''}

const RecordGoalModal = (props) => {
    const [form, setForm ] = useState(blankState);      
 
    const setField = (field, value) => {
        setForm({
          ...form,
          [field]: value
        })
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
        <Form>
              <Form.Group className="mb-3">
                <Form.Label>Scored By</Form.Label>
                <Form.Select
                  aria-label="Scored By"
                  onChange={(e) => setField('player', e.target.value)}
                >
                    <option> </option>
                    {
                        props.players.map((player) => {
                            return <option value={player.id}> {player.name} </option>
                        })
                    }
                </Form.Select>
              </Form.Group>
                <Button variant="primary" type="submit" >
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

export default RecordGoalModal;