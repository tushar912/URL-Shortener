import React ,{Component} from 'react';
import {createShortUrl} from './APIHelper';
import {apiUrl,baseUrl}  from './config';
import { Container, FormGroup ,Label,Input, Form, Button,Col, Row, Jumbotron} from 'reactstrap';
import './App.css'


class App extends Component{

     constructor(props){
         super(props);
         this.state ={
            showShortenUrl: false,
            shortenUrl: "",
            originalUrl: "",
            baseUrl: baseUrl,
            clickSubmit: true,
            showError: false,
            apiError: "",
            showApiError: false,
            showLoading: false
         }
         this.handleUserInput = this.handleUserInput.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);

     }
     handleUserInput(event){
         const name= event.target.name;
         const value = event.target.value;
         this.setState({[name]:value});
     }
    render(){
        return(
            <Container className="themed-container" fluid="sm">
                <Jumbotron className='jumbo'>
                    <h1>URL Shortener</h1>
                </Jumbotron>
                <Row className='row'>
                
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Form>
                <FormGroup>
                <Label for="exampleEmail">Original URL</Label>
                <Input type="text" name="originalURL" id="exampleEmail" placeholder="URL goes here" />
                </FormGroup>
                <FormGroup>
                <Label for="exampleEmail">Base URL</Label>
                <Input type="text" name="originalURL" id="exampleEmail" placeholder="BaseURL goes here" />
                </FormGroup>
                <Button>Generate Short Url</Button>
                </Form>
                </Col>
                        
                </Row>
                <Jumbotron className='jumbo'>
                  <p><i className='fa fa-copyright'></i>Tushar Upadhyay 2020</p>
                </Jumbotron>
            </Container>
        )


    }
}
export default App;