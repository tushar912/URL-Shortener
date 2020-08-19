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
            err:false
         }
         this.handleUserInput = this.handleUserInput.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);

     }
     handleUserInput(event){
         const name= event.target.name;
         const value = event.target.value;
         this.setState({[name]:value});
     }
     handleSubmit(){
     this.setState({ clickSubmit: true});
    if(this.state.clickSubmit && this.state.originalUrl){
        this.setState({ showShortenUrl: false });
        let reqObj = {
            originalUrl: this.state.originalUrl,
            shortBaseUrl:baseUrl
          };
          createShortUrl(reqObj).then((json)=>{
              this.setState({showShortenUrl:true,shortenUrl:json.data.shortUrl})
          }).catch((err)=>{
              this.setState({err:true});
          })

    }
    else {
        this.setState({err:true});
    }
     }
     
    render(){
        const url = this.state.showShortenUrl? <p>The shortened URL is <a href={this.state.shortenUrl}>{this.state.shortenUrl}</a></p>:null;
        const err = this.state.err? <p>something went wrong</p>:null;
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
                <Input onChange={this.handleUserInput} type="text" name="originalUrl" id="exampleEmail" placeholder="URL goes here" />
                </FormGroup>
                <FormGroup>
                <Label for="exampleEmail">Base URL</Label>
                <Input onChange={this.handleUserInput}     type="text" name="baseUrl" id="exampleEmail" placeholder="BaseURL goes here" />
                </FormGroup>
                <Button onClick={this.handleSubmit}>Generate Short Url</Button>
                </Form>
                {url}
                {err}
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