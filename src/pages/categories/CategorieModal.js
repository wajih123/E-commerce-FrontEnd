import React, { Component } from 'react'
import { Button, Header, Icon, Modal ,Message} from 'semantic-ui-react'
import {addCategories} from '../../services/categories'

 export default class ModalCategories extends Component {
                   

                      constructor() {
                         super();
                         this.handleSubmit = this.handleSubmit.bind(this)
                           
                      }
                      
       
                      state = { name: null,showMessage:false,modalAddCategoryOpen: false }

                      handleSubmit (e) {
                        
                       
                          addCategories("HyCgTFUhz",this.state.name)
                          .then((res)=> {
                          this.props.handleClosemodalAddCategory()
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
                               categorie added !!! </Message>       
                          }      
                        
                        <Modal
                          
                            open={this.props.open}
                            onClose={this.props.handleClosemodalAddCategory}
                            
                            size='small'
                        >
                            <Header icon='browser'  />
                              <Modal.Content>
                                <input type ="text" placeholder="Name" onChange={(event) => 
                                  this.setState({name: event.target.value})} />
                                </Modal.Content>
                            <Modal.Actions>
                              <Button color='green'  onClick= {this.handleSubmit}>
                                <Icon name='checkmark' /> confirm
                              </Button>
                            </Modal.Actions>
                        </Modal>
                    </div>
    )
  }
}
