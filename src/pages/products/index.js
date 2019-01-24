import React, { Component } from 'react'
import { Button, Table, Form, Label } from 'semantic-ui-react'
import ModalProduct from "./ProductModal"
import ModalEditProduct from "./ProductEditModal";
import { fetchProducts, deleteProduct } from '../../services/products';
import { fetchCategories } from "../../services/categories";
export default class Products extends Component {


    constructor() {
        super();
        this.handleDelete = this.handleDelete.bind(this)

    }
    state = {
        modalAddProductOpen: false,
        modalEditProductOpen: false,
        products: [],
        modalItem: {},
        categories: []
    }

    handleOpenmodalAddProduct = () => this.setState({ modalAddProductOpen: true })
    handleClosemodalAddProduct = () => this.setState({ modalAddProductOpen: false })

    handleOpenmodalEditProduct = (item) => this.setState({ modalEditProductOpen: true, modalItem: item })
    handleClosemodalEditProduct = () => this.setState({ modalEditProductOpen: false })



    handleDelete(_id) {
        deleteProduct("HyCgTFUhz", _id)
    }

    componentDidMount = () => {
        fetchProducts("HyCgTFUhz")
            .then(res => this.setState({ products: res.result }))

        fetchCategories("HyCgTFUhz")
            .then(response => this.setState({ categories: response.result }))


    }


    render() {
        let new_products = []
        if ((this.state.products.length > 0) && (this.state.categories.length > 0)) {
            new_products = this.state.products.map(product => {
                product.categories = product.categories.map(category => {
                    
                    this.state.categories.find(el => "category : ",category);
                    return this.state.categories.find(el => el._id === category);
                })
                return product
            })

        }

        return (


            <Form>


                <ModalProduct open={this.state.modalAddProductOpen}
                    handleClosemodalAddProduct={() => this.setState({ modalAddProductOpen: false })} />

                <ModalEditProduct open={this.state.modalEditProductOpen} product={this.state.modalItem}
                    handleClosemodalEditProduct={() => this.setState({ modalEditProductOpen: false })} />

                <Table celled inverted selectable collapsing>
                    <Table.Header style={{ backgroundColor: 'gold' }}>

                        <Table.Row>
                            <Table.HeaderCell > Name </Table.HeaderCell>
                            <Table.HeaderCell>  price </Table.HeaderCell>
                            <Table.HeaderCell > available_stock </Table.HeaderCell>
                            <Table.HeaderCell> categories </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {new_products.map(item =>
                            <Table.Row key={item._id}>
                                <Table.Cell>{item.name}</Table.Cell>
                                <Table.Cell>{item.price}</Table.Cell>
                                <Table.Cell>{item.available_stock}</Table.Cell>
                                <Table.Cell>{item.categories.map((category,i) => {

                                 return   <Label key={i}>{category.name}</Label>

                                }
                                )}</Table.Cell>
                                <Table.Cell>

                                    <Button color='red' onClick={() => this.handleDelete(item._id)}   >
                                        delete
                              </Button>
                                    <Button color='blue' onClick={() => this.handleOpenmodalEditProduct(item)} >
                                        edition
                              </Button>

                                </Table.Cell>

                            </Table.Row>
                        )}
                    </Table.Body>
                    <Table.Footer fullWidth>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell colSpan='4'>

                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
                <Button color='green' onClick={this.handleOpenmodalAddProduct}>
                    add new Product
            </Button>

            </Form>


        )
    }

}
