import React from "react";
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';

class FormProduto extends React.Component{

    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths="equal">
									<Form.Input

										required
										fluid
                                        width={12}
										label='Título'
										maxLength="100"
                                        placeholder="Informe o título do produto"
									/>

                                    <Form.Input
										required
										fluid
                                        width={5}
										label='Código do Produto'
										maxLength="100"
                                        placeholder="Informe o código do podruto"
									/>
                
								</Form.Group>
								
								
                                <Form.Field
                                        id='descrição'
                                        control={TextArea}
                                        label='Descrição'
                                        placeholder='Informe a descrição do produto'
                                        />
                                <Form.Group>
                                    <Form.Input
                                        required
                                        fluid
                                        label='Valor Unitário'
                                        width={6}/>
                                     <Form.Input
                                        
                                        fluid
                                        label='Tempo de Entrega Mínimo em Minutos'
                                        width={6}
                                        placeholder="30"/>
                                    <Form.Input
                                        
                                        fluid
                                        label='Tempo de Entrega Máximo em Minutos'
                                        width={6}
                                        placeholder="40"/>
                           
								</Form.Group>

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

									<Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'
										onClick={this.listar}
										>
										<Icon name='reply' />
										Listar
									</Button>

									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={this.salvar}
										>
											<Icon name='save' />
											Salvar
										</Button>
										
									</Container>

								</Form.Group>

							</Form>
						</div>
                    </Container>
                </div>
			</div>
		)
	}
}

export default FormProduto;