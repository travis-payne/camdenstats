import { Col, Container, Row, Form, Button, Table } from 'react-bootstrap'
import { useEffect, useState, forwardRef } from 'react'

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
import ViewColumn from '@material-ui/icons/ViewColumn'
import MaterialTable from 'material-table'

import GraphQlUtils from '../utils/graphqlUtils.js'

import RecordStats from './RecordStats.js'

const AdminControlsRecord = () => {
  const [games, setGames] = useState([])
  const [gameId, setGameId] = useState('')
  const [goalData, setGoalData] = useState([])

  const fetchGames = async () => {
    setGames(await GraphQlUtils.fetchGames())
  }

  const getGoals = async (id) => {
    setGoalData(await GraphQlUtils.getGoalsByGame(id))
  }

  const gameSelected = (evt, data) => {
    setGameId(data.id)
    getGoals(data.id)
  }

  const renderGoal = (goalData, index) => {
    console.log(goalData);
    return (
      <tr key={index}>
        <td>{goalData.player.name}</td>
        <td>{goalData.player.position}</td>
        <td>{goalData.player.team}</td>
        <td>{goalData.assist.player ? goalData.assist.player.name : 'Unassisted'}</td>
      </tr>
    )
  }

  useEffect(() => {
    fetchGames()
  }, [])

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
    <Container fluid>
      <Row>
        <Col>
          <MaterialTable
            icons={tableIcons}
            columns={[
              { title: 'Team', field: 'team' },
              { title: 'Against', field: 'against' },
              { title: 'Date', field: 'date', type: 'date' },
              { title: 'Location', field: 'location' },
              { title: 'Live', field: 'live', type: 'boolean' },
            ]}
            data={games}
            title="Games"
            actions={[
              {
                icon: Edit,
                tooltip: 'Record Game Stats',
                onClick: gameSelected,
              },
            ]}
          />
        </Col>
        <Col>{gameId !== '' ? <RecordStats gameId={gameId} onGoal={getGoals} /> : null}</Col>
      </Row>
      <Row>
        <Col>
        <h4>Goals/Assists</h4>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Team</th>
                <th>Assisted</th>
              </tr>
            </thead>
            <tbody>{goalData.map(renderGoal)}</tbody>
          </Table>
        </Col>
        <Col>
        <h4>Saves</h4>
        </Col>
        <Col>
        <h4>Caused Turnovers</h4>

        </Col>
      </Row>
    </Container>
  )
}

export default AdminControlsRecord
