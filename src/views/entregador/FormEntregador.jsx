import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, Radio, Select } from 'semantic-ui-react';

const options = [
	{ key: 'RO', text: 'RO', value: 'RO' },
	{ key: 'AC', text: 'AC', value: 'AC' },
	{ key: 'AM', text: 'AM', value: 'AM' },
	{ key: 'RR', text: 'RR', value: 'RR' },
	{ key: 'PA', text: 'PA', value: 'PA' },
	{ key: 'AP', text: 'AP', value: 'AP' },
	{ key: 'TO', text: 'TO', value: 'TO' },
	{ key: 'MA', text: 'MA', value: 'MA' },
	{ key: 'PI', text: 'PI', value: 'PI' },
	{ key: 'RN', text: 'RN', value: 'RN' },
	{ key: 'PB', text: 'PB', value: 'PB' },
	{ key: 'PE', text: 'PE', value: 'PE' },
	{ key: 'AL', text: 'AL', value: 'AL' },
	{ key: 'SE', text: 'SE', value: 'SE' },
	{ key: 'BA', text: 'BA', value: 'BA' },
	{ key: 'MG', text: 'MG', value: 'MG' },
	{ key: 'ES', text: 'ES', value: 'ES' },
	{ key: 'RJ', text: 'RJ', value: 'RJ' },
	{ key: 'SP', text: 'SP', value: 'SP' },
	{ key: 'PR', text: 'PR', value: 'PR' },
	{ key: 'SC', text: 'SC', value: 'SC' },
	{ key: 'RS', text: 'RS', value: 'RS' },
	{ key: 'MS', text: 'MS', value: 'MS' },
	{ key: 'MT', text: 'MT', value: 'MT' },
	{ key: 'GO', text: 'GO', value: 'GO' },
	{ key: 'DF', text: 'DF', value: 'DF' },
  ]

class FormEntregador extends React.Component{
	state = {}

	handleChange = (e, { value }) => this.setState({ value })
    render(){
		const { value } = this.state
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Entregador  &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group>

									<Form.Input
										required
										fluid
                                        width={10}
										label='Nome'
										maxLength="100"
									/>

									<Form.Input
                                        required
										fluid
                                        width={5}
										label='CPF'>
										<InputMask 
										mask="999.999.999-99"/> 
									</Form.Input>

                                    <Form.Input
										fluid
                                        width={5}
										label='RG'>
										<InputMask 
										mask="9999999"/> 
									</Form.Input>

								</Form.Group>
								
								<Form.Group>

                                <Form.Input
                                        fluid
                                        label='Data Nascimento'
                                        width={3}
                                    >
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="Ex: 20/03/1985"
                                        /> 
                                    </Form.Input>
                                    
									<Form.Input
                                        required
										fluid
										label='Fone Celular'
                                        width={4}>
										<InputMask 
										mask="(99) 9999.9999" /> 
									</Form.Input>

									<Form.Input
										fluid
										label='Fone Fixo'
                                        width={4}>
										<InputMask 
										mask="(99) 9999.9999" /> 
									</Form.Input>

                                    <Form.Input
										fluid
										label='QTD Entregas Realizadas'
                                        width={3}/>

                                    <Form.Input
										fluid
										label='Valor por Frete'
                                        width={3}/>

								</Form.Group>

                                <Form.Group>
                                    <Form.Input
                                        fluid
                                        label="Rua"
                                        width={13}
                                        />
                                    <Form.Input
                                        fluid
                                        label="Número"
                                        width={4}
                                        />
                                </Form.Group>

                                <Form.Group widths="equal">
                                    <Form.Input
                                        fluid
                                        label="Bairro"
                                        width={7}
                                        />
                                    <Form.Input
                                        fluid
                                        label="Cidade"
                                        width={7}
                                        />
                                    <Form.Input
                                        fluid
                                        label="CEP"
                                        width={3}
                                        />
                                </Form.Group>
								<Form.Group widths='equal'>								
									<Form.Field
										control={Select}
										label='UF'
										options={options}
										placeholder='Selecione'
									/>
								</Form.Group>

								<Form.Input
                                        fluid
                                        label="Complemento"
                                        />
										
										<Form.Group inline>
											<label>Ativo:</label>
											<Form.Field
												control={Radio}
												label='Sim'
												value='sim'
												checked={value === 'sim'}
												onChange={this.handleChange}
											/>
											<Form.Field
												control={Radio}
												label='Não'
												value='nao'
												checked={value === 'nao'}
												onChange={this.handleChange}
											/>
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
										Voltar
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

export default FormEntregador;