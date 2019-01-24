import React, { Component } from 'react'
import { Button, Header, Icon, Modal ,Message,TextArea, Input} from 'semantic-ui-react'
import {editCategory} from '../../services/categories'


 export default class ModalEditCatgory extends Component {
                     

                      constructor() {
                         super();
                         this.handleSubmit = this.handleSubmit.bind(this)
                      }
                    
                      state = { 
                                showMessage:false 
                            }
                     
               
                            componentDidMount(){
                             
                              this.updateCategory(this.props.category)
                           }
      
                           componentWillReceiveProps(newProps) {
                               this.updateCategory(newProps.category)
                           }
                          
                           updateCategory(props) {
                               this.setState({
                                   name: props.name
                                   
      
      
                               })
                           }
                     
                      handleSubmit (e) {
                         
                        let category = this.props.category;     
                        console.log('wajih',category)                  
                          category.name = this.state.name
                        
                         console.log('tarsim',category)
                          editCategory("HyCgTFUhz",category)
                          
                          .then((res)=> {
                            this.props.handleClosemodalEditCategory()
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
                               categorie updated !!! </Message>       
                          }      
                         
                        <Modal style={{display:'flex'}}
                          
                            open={this.props.open}
                            onClose={this.props.handleClosemodalEditCategory}
                            
                            size='small'
                        >
                            <Header />
                              <Modal.Content>
                                <input type="text"  placeholder="Name" value={this.state.name}
                                 onChange={(event) => this.setState({name: event.target.value})} />
                              </Modal.Content>
                            <Modal.Actions>
                              <Button color='green'  onClick= {this.handleSubmit}>
                                <Icon name='checkmark' /> confirm edition
                              </Button>
                            </Modal.Actions>
                        </Modal>
                    </div>
    )
  }
}
