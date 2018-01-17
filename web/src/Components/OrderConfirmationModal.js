import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Modal, Button } from 'antd';


class confirmA extends Component {

  showConfirm = () => {
    confirm({
      title: ' Do you want to place the order of these items?',
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure to cancel this order?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  render() {
    return (

      <div>
        <Button onClick={this.showConfirm}><Link to='/products'>
          Confirm</Link>
        </Button>
        <Button onClick={this.showDeleteConfirm} type="dashed">
          Delete
      </Button>
      </div>
    )
  }

}



export default confirmA