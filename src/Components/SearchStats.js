import { useEffect, useState, forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import MUIDataTable from "mui-datatables";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import MaterialTable from "@material-table/core";
import { TableCell } from "@material-ui/core";

import GraphQlUtils from "../utils/graphqlUtils.js";

const SearchStats = () => {
  const [players, setPlayers] = useState([]);

  const fetchPlayers = async () => {
    let newPlayers = await GraphQlUtils.fetchAndAggregatePlayers();

    // Judge me not, css gods x
    if (isMobile) {
      newPlayers = newPlayers.map((player) => {
        switch (player.position) {
          case "Attack":
            return { ...player, position: "A" };
          case "Defence":
            return { ...player, position: "D" };
          case "Midfield":
            return { ...player, position: "M" };
          case "Goalkeeper":
            return { ...player, position: "GK" };
          default:
            return { ...player, position: "N/A" };
        }
      });
    }

    setPlayers(newPlayers);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

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
  };

  const columns = [
    {
      label: "Name",
      name: "name",
      options: {
        setCellProps: () => cellOptions,
        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell key={index} style={cellOptions}>
              {column.label}
            </TableCell>
          );
        },
      },
    },
    {
      label: "Pos",
      name: "position",
      options: {
        setCellProps: () => cellOptions,
        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell key={index} style={cellOptions}>
              {column.label}
            </TableCell>
          );
        },
      },
    },
    {
      label: "Team",
      name: "team",
      options: {
        setCellProps: () => cellOptions,
        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell key={index} style={cellOptions}>
              {column.label}
            </TableCell>
          );
        },
      },
    },
    {
      label: "G",
      name: "goals",
      options: {
        setCellProps: () => cellOptions,
        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell key={index} style={cellOptions}>
              {column.label}
            </TableCell>
          );
        },
      },
    },
    {
      label: "A",
      name: "assists",
      options: {
        setCellProps: () => cellOptions,
        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell key={index} style={cellOptions}>
              {column.label}
            </TableCell>
          );
        },
      },
    },
    {
      label: "P",
      name: "points",
      options: {
        setCellProps: () => cellOptions,
        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell key={index} style={cellOptions}>
              {column.label}
            </TableCell>
          );
        },
      },
    },
    {
      label: "CTOs",
      name: "turnovers",
      options: {
        setCellProps: () => cellOptions,
        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell key={index} style={cellOptions}>
              {column.label}
            </TableCell>
          );
        },
      },
    },
  ];

  const cellOptions = {
    width: "0.5px",
    paddingLeft: "1.5px",
    paddingRight: "1.5px",
    textAlign: "center",
  };

  return (
    <>
      <BrowserView>
        <MaterialTable
          icons={tableIcons}
          options={{
            selection: true,
            pageSize: 15,
            filtering: true,
          }}
          columns={[
            { title: "Name", field: "name" },
            { title: "Position", field: "position" },
            { title: "Team", field: "team" },
            { title: "Goals", field: "goals" },
            { title: "Assists", field: "assists" },
            { title: "Points", field: "points" },
            { title: "CTOs", field: "turnovers" },
          ]}
          data={players}
          title="Player Database"
        />
      </BrowserView>
      <MobileView>
        <MUIDataTable
          title={"Player Database"}
          data={players}
          columns={columns}
          options={{
            pageSize: 15,
            selectableRows: false,
            filtering: true,
            responsive: "standard",
          }}
        />
      </MobileView>
    </>
  );
};

export default SearchStats;
