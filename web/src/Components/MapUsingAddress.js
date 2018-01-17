import React, { Component } from 'react'
import { Form, Select, Input, Button, Row, Col } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;


const googleAddress = () => {

  return (
    <Row>
      <Col sm={12} md={6}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            label="Please enter the delivery address"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            <input type="text"
              className="form-control input-lg"
              id="address"
              placeholder="London"
              required />
            )}
          </FormItem>
        </Form>
      </Col>
    </Row>
  )
}

// const GoogleAddress = Form.create()(GoogleAddress);

export default googleAddress