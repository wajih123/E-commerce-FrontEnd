import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Message, Form, Input } from 'semantic-ui-react'
import { addProduct } from '../../services/products'
import { fetchCategories } from '../../services/categories'
export default class ModalProduct extends Component {


  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount() {
    fetchCategories("HyCgTFUhz")
      .then(res => this.setState({ result: res.result }))
  }
  state = {
    name: null, price: 0, available_stock: 0,
    showMessage: false, modalAddProductOpen: false, result: [], categories: []
  }

  handleSubmit(e) {


    addProduct("HyCgTFUhz", this.state.name, this.state.available_stock,
      this.state.price, this.state.categories)
      .then((res) => {
        this.props.handleClosemodalAddProduct()
      })
      .then(() => {
        this.setState({ showMessage: true })
        window.setTimeout(() => this.setState({ showMessage: false }), 2000

        )
      })
  }




  render() {

    return (

      <div >
        {this.state.showMessage &&
          <Message positive><Message.Header>success </Message.Header>
            product added !!! </Message>
        }

        <Modal
          style={{ display: 'flex' }}
          open={this.props.open}
          onClose={this.props.handleClosemodalAddProduct}


        >
        

          <Form>

         
              <Input style={{ flex: 1 }} label='name' placeholder='name' onChange={(event) =>
                this.setState({ name: event.target.value })} />

              <Input style={{ flex: 1 }} label='price' type="number" placeholder='price' onChange={(event) =>
                this.setState({ price: event.target.value })} />

              <Input style={{ flex: 1 }} label='available_stock' type="number" placeholder='available_stock' onChange={(event) =>
                this.setState({ available_stock: event.target.value })} />

              <select multiple={true} style={{ flex: 1 }} onChange={(event) => {
                let value = Array.from(event.target.selectedOptions, option => option.value)
                this.setState({ categories: value })
                console.log('wajihtarsim', value)
              }}>
                {this.state.result.map((item) =>
                  <option
                    value={item._id}

                  >
                    {item.name}
                  </option>
                )}


              </select>
           
          </Form>

          <Modal.Actions>
            <Button onClick={this.handleSubmit}>
              confirm
                              </Button>

          </Modal.Actions>
        </Modal>

      </div>
    )
  }
}
