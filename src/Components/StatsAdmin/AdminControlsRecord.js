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
import MaterialTable from '@material-table/core'

import GraphQlUtils from '../../utils/graphqlUtils.js'

import RecordStats from './RecordStats.js'

const AdminControlsRecord = () => {
  const [games, setGames] = useState([])
  const [gameId, setGameId] = useState('')
  const [goalData, setGoalData] = useState([])

  const fetchGames = async () => {
    setGames(await GraphQlUtils.fetchGames())
  }

  const getGoals = async (id) => {

    const data = await GraphQlUtils.getGoalsByGame(id)
    const newData = data.map((item) => {
      console.log(item)
      return {
        id: item.id,
        assistId: item.assistID,
        player: item.player.name,
        position: item.player.position,
        team: item.player.team,
        assist: (item.assist && item.assist.player) ?  item.assist.player.name : 'Unassisted'

      }
    })
    setGoalData(newData)
  }

  const gameSelected = (evt, data) => {
    setGameId(data.id)
    getGoals(data.id)
  }

  const deleteGoal = async (evt, data) => {
    var deletedIds = [];
    try {
       await GraphQlUtils.deleteGoal(data.id,data.assistId);
      deletedIds.push(data.id);
    } catch (err) {
      console.log(err);
    }
    var filtered = goalData.filter( (goal) => !deletedIds.includes(goal.id));
    setGoalData(filtered)
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
        <Col>{gameId !== '' ? <RecordStats gameId={gameId} goalScored={getGoals} /> : null}</Col>
      </Row>
      <Row>
        <Col>
        <MaterialTable
            icons={tableIcons}
            columns={[
              { title: 'Name', field: 'player' },
              { title: 'Position', field: 'position' },
              { title: 'Team', field: 'team' },
              { title: 'Assist', field: 'assist' },
            ]}
            data={goalData}
            title="Goals/Assists"
            actions={[
              (rowData) => ({
                tooltip: 'Remove All Selected Users',
                icon: DeleteOutline,
                onClick: deleteGoal,
              }),
            ]}
          />
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
