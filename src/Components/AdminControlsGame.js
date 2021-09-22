import { useEffect, useState, forwardRef } from 'react'

import {Container, Row } from 'react-bootstrap'

import AddGame from './AddGame.js'
import GameDetails from './GameDetails.js'


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

import * as mutations from '../graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import { listGames } from '../graphql/queries'

import '../css/AdminControlsPlayer.css'

const AdminControlsGame = () => {
  const [games, setGames] = useState([])

  const fetchGames = async () => {
      setGames(await GraphQlUtils.fetchGames());
  }
  

  const deleteGame = async (evt, data) => {
    var deletedIds = [];

    data.map(async (game) => {
       try{
        await GraphQlUtils.deleteGame(game.id);
        deletedIds.push(game.id);
       } catch(err){
        console.log(err);
       }
       var filtered = games.filter( (game) => !deletedIds.includes(game.id));
       setGames(filtered)
    })
    

  }

  const childProps = {
    onGameAdd: fetchGames,
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
        <Row className="gamePanel d-flex justify-content-center">
          <AddGame props={childProps} />
        </Row>
        <hr />
        <Row>
          <MaterialTable
            icons={tableIcons}
            options={{
              selection: true,
            }}
            columns={[
              { title: 'Team', field: 'team' },
              { title: 'Against', field: 'against' },
              { title: 'Date', field: 'date', type: 'date' },
              { title: 'Location', field: 'location'},
              { title: 'Live', field: 'live', type: 'boolean' },
            ]}
            data={games}
            title="Games"
            actions={[
                (rowData) => ({
                  tooltip: 'Remove All Selected Games',
                  icon: DeleteOutline,
                  onClick: deleteGame,
                }),
              ]}
              detailPanel= {[
                {
                    tooltip: 'Show Name',
                    render: rowData => {
                      return (
                        <div
                          style={{
                            fontSize: 100,
                            textAlign: 'center',
                            color: 'white',
                            backgroundColor: '#43A047',
                          }}
                        >
                          <GameDetails props={rowData} />
                        </div>
                      )
                    },
                  } 
              ]}
          />
        </Row>
    </Container>
  );
}

export default AdminControlsGame;
