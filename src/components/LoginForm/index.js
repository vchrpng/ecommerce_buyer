import React, { Component } from 'react'
import { InputText } from '../Etc/RenderInputText'
import { Label } from '../Etc/Label'
import { Form , Message } from 'semantic-ui-react'
import { ButtonStyled , CustomLink } from '../Etc/Reusable'
import Validator from 'validator'
import InlineError from '../Etc/InlineError'

class LoginForm extends Component {
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

    onChange = e => {
        this.setState({ 
            data : { ...this.state.data,[e.target.name] : e.target.value }
        })
    }

    onSubmit = () => {
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

    validate = (data) => {
        const errors = {}
        if(!Validator.isEmail(data.email)) errors.email = "Email Invalid"
        if(!data.password) errors.password = "Password Required"
        return errors
    }

    render() {
        const { data , errors , loading } = this.state

        return (
            <Form onSubmit={this.onSubmit} loading={loading}>
            {errors.global && 
                <Message negative>
                    <Message.Header content={'Somthing went wrong'} />
                    <Message.Content>
                        {errors.global}
                    </Message.Content>
                </Message>}
                <div>
                    <Label>Email</Label>
                    {errors.email && <InlineError text={errors.email}/>}
                    <InputText
                        type="text"
                        value={data.email}
                        name="email"
                        onChange={this.onChange}
                    />
                  
                </div>
                <div>
                    <Label>Password</Label>
                    {errors.password && <InlineError text={errors.password}/>}
                    <InputText
                        type="password"
                        value={data.password}
                        name="password"
                        onChange={this.onChange}
                    />
                   
                </div>
                <div>
                    <Label>Forget your password?</Label>
                </div>
                <div>
                    <ButtonStyled>
                       SIGN IN
                    </ButtonStyled>
                </div>
                <div>
                    <CustomLink to='/account/register'>
                        <Label>Create Account</Label>
                    </CustomLink>
                </div>
                            
            </Form>
        )
    }
}


export default LoginForm