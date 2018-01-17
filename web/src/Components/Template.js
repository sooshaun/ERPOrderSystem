import React, { Component } from 'react';
import {
  Button,
  Grid,


  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Pager
} from "react-bootstrap";
import { Card, Row, Col, Avatar } from 'antd';


class Delivery extends Component {

  state = {

    username: '',
    userLocation: {
      lat: '',
      lng: ''
    },
    shops: [],
    selectedShop: {},
    selectedShopLocation: {
      lat: '',
      lng: ''
    },
    distance: '',
    duration: '',
    durationSeconds: undefined,
    items: [],
    specialInstructions: '',
    notification: {
      add: false,
      delete: false,
      error: false,
      form: false,
      additionalInfo: false,
      userLocation: false
    },
    methodOfTrans: '',
    methodOfTransShow: true,
    pickupTime: true,
    expectedPickupTime: '',
    favorite: false,
    paymentInfo: {
      nameOnCard: '',
      cardNumber: undefined,
      expMonth: '',
      expYear: '',
      cvv: undefined
    },
    previousOrders: [],
    favoriteOrders: [],
    menuShow: false,



    dummySentences: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      'Donec hendrerit tempor tellus.',
      'Donec pretium posuere tellus.',
      'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      'Nulla posuere.',
      'Donec vitae dolor.',
      'Nullam tristique diam non turpis.',
      'Cras placerat accumsan nulla.',
      'Nullam rutrum.',
      'Nam vestibulum accumsan nisl.'
    ]
  }

  render() {
    const { dummySentences } = this.state
    return (


      < div >

        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={3}>
              <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
              <br />
              {dummySentences.slice(0, 6).join(' ')}
            </Col>
            <Col sm={6} md={3}>
              <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
              <br />
              {dummySentences.slice(0, 4).join(' ')}
            </Col>
            <Col sm={6} md={3}>
              <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
              <br />
              {dummySentences.slice(0, 6).join(' ')}
            </Col>
            <Col sm={6} md={3}>
              <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
              <br />
              {dummySentences.slice(0, 2).join(' ')}
            </Col>
          </Row>
        </Grid>







      </div >
    )
  }
}
export default Delivery