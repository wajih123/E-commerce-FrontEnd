import React, { Component } from 'react'
import { Button, Header, Icon, Modal ,Message,TextArea, Input,Form} from 'semantic-ui-react'
import {editProduct} from '../../services/products'
import {fetchCategories} from '../../services/categories'

 export default class ModalEditProduct extends Component {
                     

                      constructor() {
                         super();
                         this.handleSubmit = this.handleSubmit.bind(this)
                      }
                    
                      state = { 
                                showMessage:false ,
                                categories:[],
                                result:[]
                                
                               

                            }
                     componentDidMount(){
                        fetchCategories("HyCgTFUhz")
                        .then(res => this.setState({result: res.result}))
                        this.updateProduct(this.props.product)
                     }

                     componentWillReceiveProps(newProps) {
                         this.updateProduct(newProps.product)
                     }
                    
                     updateProduct(props) {
                         this.setState({
                             name: props.name,
                             available_stock:props.available_stock,
                             price:props.price,
                             categories:props.categories


                         })
                     }
               
                      handleSubmit (e) {
                         
                        let product = this.props.product;    
                        //console.log('wajih',product)
                       
                          product.name = this.state.name
                          product.available_stock=this.state.available_stock;
                          product.price=this.state.price;
                          product.categories=this.state.categories;
                          
                        
                         console.log('tarsim',product)
                          editProduct("HyCgTFUhz",product)
                        
                          .then((res)=> {
                            this.props.handleClosemodalEditProduct()
                            })
                            .then(()=>{
                              this.setState({showMessage:true})
                              window.setTimeout(()=>this.setState({showMessage:false}),2000
  
                          )
                            })
                          
                      }
    render() {
   
                           
                           
            return (
                    <div>
                            { this.state.showMessage  &&
                               <Message positive><Message.Header>success </Message.Header>
                               product updated !!! </Message>       
                          }      
                         
                         <Modal style={{display:'flex'}}
                        
                        open={this.props.open}
                        onClose={this.props.handleClosemodalEditProduct}
                        
                        
                    >
                        <Header icon='browser'  />
                         
                              <Form>

                              <Form.Group widths='equal'>
                              <Form.Field control={Input} label='name' placeholder='name' value={this.state.name} 
                              onChange={(event) => 
                                this.setState({name: event.target.value})}/>

                             <Form.Field control={Input} type ="number" label='price' value={this.state.price} 
                                placeholder='price' onChange={(event) => 
                                this.setState({price: event.target.value})}/>

                             <Form.Field control={Input} type ="number" label='available_stock' 
                                     value={this.state.available_stock}  
                                placeholder='available_stock' onChange={(event) => 
                                this.setState({available_stock: event.target.value})}/>      
                             <select multiple onChange={(event) => {
                                             
                                             this.setState({categories: event.target.value})
                                         }}>
                                 {this.state.result.map((item) => 
                                     <option
                                        value= {item._id}
                                         
                                     >
                                         {item.name}
                                     </option>
                                 )}
                                 
                            
                            </select>
                           
                           </Form.Group>
                           </Form>
                        
                        <Modal.Actions>
                          <Button  onClick= {this.handleSubmit}>
                            <Icon name='checkmark' /> edit product
                          </Button>
                          <Button   >
                            <Icon name='checkmark' /> cancel
                          </Button>
                        </Modal.Actions>
                    </Modal>
                    </div>
    )
  }
}
