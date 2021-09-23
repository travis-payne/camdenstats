import React, { useEffect, useState, forwardRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../css/Home.css'
import GraphQlUtils from '../utils/graphqlUtils.js';


const Home = () => {

  useEffect(() => {
    console.log("AYO IMA KILL SOMEONE")
  }, []);


  // const fetchPlayers = async () => {
  //   setHi(await GraphQlUtils.fetchPlayers());
  // }

  return (""
    // <Container className="home">
    //   <h2 className="d-flex justify-content-center">Points Leaders</h2>
    //   <br />
    //   <br />
    //   <Row>
    //     <Col className="d-flex justify-content-center">Points</Col>
    //     <Col className="d-flex justify-content-center">Goals</Col>
    //     <Col className="d-flex justify-content-center">Assists</Col>
    //   </Row>
    // </Container>
  )
}

export default Home;
