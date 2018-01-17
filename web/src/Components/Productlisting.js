import React, { Component } from 'react'
import Counter from './Counter'
import { cardSize } from '../style/Productlisting.css'
import { Card, Row, Col, Avatar } from 'antd';
const { Meta } = Card;


class Productlisting extends Component {

  state = {
    selectedProduct: {},
    quickViewProdcut: {},
    buttonLabel: "ADD TO CART",

  }

  resetQuantity() {

  }
  addToCart(image, name, price, id, quantity) {
    this.setState({
      selectedProduct: {
        image: image,
        name: name,
        price: price,
        id: id,
        quantity: quantity
      }
    }, function () {
      this.props.addToCart(this.state.selectedProduct);
    })
    this.setState({
      buttonLabel: "✔ ADDED"
    }, function () {
      setTimeout(() => {
        this.setState({
          buttonLabel: "ADD TO CART",
          selectedProduct: {}
        });
      }, 5000);
    });
  }
  quickView(image, name, price, id) {
    this.setState({
      quickViewProdcut: {
        image: image,
        name: name,
        price: price,
        id: id
      }
    }, function () {
      this.props.openModal(this.state.quickViewProdcut);
    })
  }


  render() {
    let image = this.props.image;
    let name = this.props.name;
    let price = this.props.price;
    let id = this.props.id;
    let quantity = this.props.productQuantity;
    
    return (
      <div>
        <Row gutter={8}>
          {/* <Col className='cardSize' span="md-6 sm-12"> */}
          <Col sm={12} md={6}>
            <Card
              className='card'
              // style={{ width: 310 }}
              cover={<img src={image} alt={this.props.name} onClick={this.quickView.bind(this, image, name, price, id, quantity)} />}
              actions={[

                <Counter productQuantity={quantity} updateQuantity={this.props.updateQuantity} resetQuantity={this.resetQuantity}
                // <Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis"
                />]}
            >
              <Meta
                avatar={<Avatar src="http://www.pngall.com/wp-content/uploads/2016/06/Superman-Logo-PNG-Image.png" />}
                title={this.props.name}
                description="This is the description"
                price={this.props.price}

              />
            </Card>
          
          </Col>

          <Col sm={12} md={6}>
            <Card
            className='card'
              // style={{ width: 310 }}
              cover={<img src={image} alt={this.props.name} onClick={this.quickView.bind(this, image, name, price, id, quantity)} />}
              actions={[

                <Counter productQuantity={quantity} updateQuantity={this.props.updateQuantity} resetQuantity={this.resetQuantity}
                // <Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis"
                />]}
            >
              <Meta
                avatar={<Avatar src="http://www.pngall.com/wp-content/uploads/2016/06/Superman-Logo-PNG-Image.png" />}
                title={this.props.name}
                description="This is the description"
                price={this.props.price}

              />
            </Card>
          </Col>

          <Col sm={12} md={6}>
            <Card
            className='card'
              // style={{ width: 310 }}
              cover={<img src={image} alt={this.props.name} onClick={this.quickView.bind(this, image, name, price, id, quantity)} />}
              actions={[

                <Counter productQuantity={quantity} updateQuantity={this.props.updateQuantity} resetQuantity={this.resetQuantity}
                // <Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis"
                />]}
            >
              <Meta
                avatar={<Avatar src="http://www.pngall.com/wp-content/uploads/2016/06/Superman-Logo-PNG-Image.png" />}
                title={this.props.name}
                description="This is the description"
                price={this.props.price}

              />
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card
            className='card'
              // style={{ width: 310 }}
              cover={<img src={image} alt={this.props.name} onClick={this.quickView.bind(this, image, name, price, id, quantity)} />}
              actions={[

                <Counter productQuantity={quantity} updateQuantity={this.props.updateQuantity} resetQuantity={this.resetQuantity}
                // <Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis"
                />]}
            >
              <Meta
                avatar={<Avatar src="http://www.pngall.com/wp-content/uploads/2016/06/Superman-Logo-PNG-Image.png" />}
                title={this.props.name}
                description="This is the description"
                price={this.props.price}

              />
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}


export default Productlisting