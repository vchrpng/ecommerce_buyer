import React, { Component } from 'react'
import { InputText } from '../Etc/RenderInputText'
import { Form } from 'semantic-ui-react'
import isEmail from 'validator/lib/isEmail'
import InlineError from '../Etc/InlineError'
import { Label } from '../Etc/Label'
import { ButtonStyled } from '../Etc/Reusable'

class SignupForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : {
                email:'',
                password:''
            },
            loading:false,
            errors:{}
        }
    }
    
    onSubmit = e => {
        e.preventDefault()
         const errors = this.validate(this.state.data)
         this.setState({ errors })
         if (Object.keys(errors).length === 0){
            this.setState({ loading : true })
            setTimeout(() =>
                this.props.submit(this.state.data)
                .catch(err => this.setState({ 
                    errors : err.response.data.errors,
                    loading : false 
            })),2000)
        }
    }

    onChange = e => {
        this.setState({ 
            data : { ...this.state.data,[e.target.name] : e.target.value }
        })}

    validate = data => {
        const errors = {}
        if(!isEmail(data.email)) errors.email = "Invalid Email"
        if(!data.password) errors.password = "Required Field"
        return errors
    }

    render() {
        const { data , errors , loading } = this.state
        return (
            <Form loading={loading ? 1 : 0} onSubmit={this.onSubmit} >
                <Form.Field>
                    <Label>Email</Label>
                    <InputText
                        type="email"
                        value={data.email}
                        name="email"
                        onChange={this.onChange}
                    />
                     {errors.email && <InlineError text={errors.email}/>}
                </Form.Field>
                <Form.Field>
                    <Label>Password</Label>
                    {errors.password && <InlineError text={errors.password}/>}
                    <InputText
                        type="password"
                        value={data.password}
                        name="password"
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Form.Field >
                    <ButtonStyled>
                        Create
                    </ButtonStyled>
                </Form.Field>
            </Form>
        )
    }
}

export default SignupForm
