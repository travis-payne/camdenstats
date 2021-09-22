import { useEffect, useState, forwardRef } from 'react'

import {Container, Row } from 'react-bootstrap'

import AddPlayer from './AddPlayer.js'

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

import GraphQlUtils from '../utils/graphqlUtils.js';

import '../css/AdminControlsPlayer.css'

const AdminControlsPlayer = () => {
  const [players, setPlayers] = useState([])

  GraphQlUtils.fetchPlayers();

  const fetchPlayers = async () => {
    setPlayers(await GraphQlUtils.fetchPlayers());
  }

  const deletePlayer = async (evt, data) => {
    var deletedIds = [];
    try {
      await Promise.all(
        data.map(async (d) => {
          await GraphQlUtils.deletePlayer(d.id);

          deletedIds.push( d.id);
        }),
      )
    } catch (err) {
      console.log(err);
    }
    var filtered = players.filter( (player) => !deletedIds.includes(player.id));
    setPlayers(filtered)
  }

  const childProps = {
    onPlayerAdd: fetchPlayers,
  }

  useEffect(() => {
    fetchPlayers()
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
        <Row className="playerPanel d-flex justify-content-center">
          <AddPlayer props={childProps} />
        </Row>
        <hr />
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
            data={players}
            title="Player Database"
            actions={[
              (rowData) => ({
                tooltip: 'Remove All Selected Users',
                icon: DeleteOutline,
                onClick: deletePlayer,
              }),
            ]}
          />
        </Row>
    </Container>
  );
}

export default AdminControlsPlayer
