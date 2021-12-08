import React, { useState, useEffect, forwardRef } from 'react'
import '../../css/GameDetails.css'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import MaterialTable from '@material-table/core'
import AddBox from '@material-ui/icons/AddBox'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn';

import GraphQlUtils from '../../utils/graphqlUtils.js'
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';

 

const blankState = { player: ''};

const GameDetails = (props) => {
  const [playersInGame, setPlayersInGame] = useState([])
  const [players, setPlayers] = useState([])

  const [form, setForm ] = useState(blankState);

  const setField = (field, value) => {
      setForm({
        ...form,
        [field]: value
      })
    }


  const { against, team, id } = props.props;
 
  const fetchPlayersInGame = async () => {
      const playerArray = [];
    
      const result = await GraphQlUtils.getPlayersByGame(id);
      if(!result){
        return
      }
        result.forEach( (p) => {
          playerArray.push(p.player);
        });

    setPlayersInGame(playerArray);
  }

  useEffect(() => {
    fetchPlayersInGame()
  },[]);

  useEffect(() => {
    fetchAllPlayers()
  },[]);

  const fetchAllPlayers = async () => {
  setPlayers(await GraphQlUtils.fetchPlayers());
}

  const handleSubmit = async e => {
    e.preventDefault();
    try {
        const playerId = form.player;
        await API.graphql(graphqlOperation(mutations.createPlayerGameJoin, {
            input: {
                playerID: playerId,
                gameID: id
            }
        }));
        fetchPlayersInGame()
      } catch (err) {
        console.log('error creating Player:', err)
      }
    e.target.reset();
  }

  const deletePlayer = async (evt, data) => {
    var deletedIds = [];

    data.map(async (player) => {
        try{
            await GraphQlUtils.deletePlayerFromGame(player.id,id);
            deletedIds.push(player.id);
        } catch(err){
            console.log(err);
        }
        var filtered = playersInGame.filter( (game) => !deletedIds.includes(game.id));
        setPlayersInGame(filtered)
    })

  }

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  }

  return (
    <div className="gameDetails">
      <h4>
        {team}s - {against}
      </h4>
      <Container fluid>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Add Player</Form.Label>
                <Form.Select
                  aria-label="Add Player"
                  onChange={(e) => setField('player', e.target.value)}
                >
                    <option> </option>
                    {
                        players.map((player) => {
                            return <option value={player.id}> {player.name} </option>
                        })
                    }
                </Form.Select>
              </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
            </Button>
            </Form>
            <Row></Row>
            <Row>
              <MaterialTable
                icons={tableIcons}
                options={{
                  selection: true,
                }}
                columns={[
                  { title: 'Name', field: 'name' },
                  { title: 'Position', field: 'position' },
                  { title: 'Team', field: 'team', type: 'numeric' },
                ]}
                data={playersInGame}
                title="Player Database"
                actions={[
                  (rowData) => ({
                    tooltip: 'Remove All Selected Players',
                    icon: DeleteOutline,
                    onClick: deletePlayer,
                  }),
                ]}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GameDetails
