import React, { Component } from 'react'
import { Button, Table } from 'semantic-ui-react'
import ModalCategories from "./CategorieModal"
import ModalEditCatgory from './CategoryEditModal'
import { fetchCategories, deleteCategorie } from "../../services/categories";
import { fetchProducts } from '../../services/products'

export default class Categories extends Component {


    constructor() {
        super();
        this.handleDelete = this.handleDelete.bind(this)
    }
    state = {
        modalAddCategoryOpen: false,
        modalEditCategoryOpen: false,
        modalItem: {},
        result: [],
        products: [],
        filtredListProduct: []

    }

    handleOpenmodalAddCategory = () => this.setState({ modalAddCategoryOpen: true })
    handleClosemodalAddCategory = () => this.setState({ modalAddCategoryOpen: false })

    handleOpenmodalEditCategory = (item) => this.setState({ modalEditCategoryOpen: true, modalItem: item })
    handleClosemodalEditCategory = () => this.setState({ modalEditCategoryOpen: false })

    componentDidMount() {
        fetchCategories("HyCgTFUhz")
            .then(res => this.setState({ result: res.result }))
    }

    handleDelete(_id) {

        deleteCategorie("HyCgTFUhz", _id)

    }



    render() {


        return (

            <div>


                <div>

                    <ModalCategories open={this.state.modalAddCategoryOpen}
                        handleClosemodalAddCategory={() => this.setState({ modalAddCategoryOpen: false })} />
                    <br /><br />

                    <ModalEditCatgory open={this.state.modalEditCategoryOpen} category={this.state.modalItem}
                        handleClosemodalEditCategory={() => this.setState({ modalEditCategoryOpen: false })} />
                    <br /><br />

                </div>

                <div>
                    <Table celled inverted selectable collapsing>
                        <Table.Header style={{ backgroundColor: 'gold' }}>

                            <Table.Row >
                                <Table.HeaderCell >Name</Table.HeaderCell>

                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {this.state.result.map(item =>
                                <Table.Row key={item._id}>
                                    <Table.Cell >{item.name}</Table.Cell>
                                    <Table.Cell>

                                        <Button color='red' onClick={() => this.handleDelete(item._id)}  >

                                            Delete
                              </Button>
                                        <Button color='blue' onClick={() => this.handleOpenmodalEditCategory(item)}  >

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
                                    <Button color='green' onClick={this.handleOpenmodalAddCategory}>
                                        add new Categorie
            </Button>

                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>

                </div>

            </div>

        )
    }

}
