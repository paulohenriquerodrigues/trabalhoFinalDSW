import React, {Component} from 'react';
import {Col, Row, Container, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Login extends React.Component {



    retornaUsuario() {
        fetch("http://localhost:18397/API_REST_DSW/webresources/Usuario").then((response) => {
            return response.json();
        }).then((usuarios) => {
            this.setState({usuarios});
            console.log(usuarios);
        })
    }

    componentWillMount() {
        this.retornaUsuario();
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col sm={{size: 'auto', offset: 1}}><h3>Login</h3>
                        <Form>
                            <FormGroup row>
                                <Input type="text" name="usuario" id="usuario" placeholder="Usuário"/>
                            </FormGroup>
                            <FormGroup row>
                                <Input type="password" name="senha" id="senha" placeholder="Senha"/>
                            </FormGroup>
                            <Button color="success">Login</Button>
                        </Form></Col>

                    <Col sm={{size: '5', offset: 1}}><h3>Cadastre-se</h3>
                        <Form>
                            <FormGroup row>
                                <Label for="exampleEmail" sm={2}>Email</Label>
                                <Col sm={10}>
                                    <Input type="email" name="email" id="exampleEmail"
                                           placeholder="with a placeholder"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="examplePassword" sm={2}>Password</Label>
                                <Col sm={10}>
                                    <Input type="password" name="password" id="examplePassword"
                                           placeholder="password placeholder"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleSelect" sm={2}>Select</Label>
                                <Col sm={10}>
                                    <Input type="select" name="select" id="exampleSelect"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
                                <Col sm={10}>
                                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleText" sm={2}>Text Area</Label>
                                <Col sm={10}>
                                    <Input type="textarea" name="text" id="exampleText"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleFile" sm={2}>File</Label>
                                <Col sm={10}>
                                    <Input type="file" name="file" id="exampleFile"/>
                                    <FormText color="muted">
                                        This is some placeholder block-level help text for the above input.
                                        It's a bit lighter and easily wraps to a new line.
                                    </FormText>
                                </Col>
                            </FormGroup>
                            <FormGroup tag="fieldset" row>
                                <legend className="col-form-label col-sm-2">Radio Buttons</legend>
                                <Col sm={10}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio2"/>{' '}
                                            Option one is this and that—be sure to include why it's great
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio2"/>{' '}
                                            Option two can be something else and selecting it will deselect option one
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check disabled>
                                        <Label check>
                                            <Input type="radio" name="radio2" disabled/>{' '}
                                            Option three is disabled
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="checkbox2" sm={2}>Checkbox</Label>
                                <Col sm={{size: 10}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2"/>{' '}
                                            Check me out
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup check row>
                                <Col sm={{size: 10, offset: 2}}>
                                    <Button color="success">Cadastrar</Button>
                                </Col>
                            </FormGroup>
                        </Form></Col>
                </Row>
            </Container>


        );
    }
}

export default Login;
