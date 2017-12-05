import React, { Component } from 'react'
import RenderInputText from '../Etc/RenderInputText'
import { Label } from '../Etc/Label'
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

    onChange = e => this.setState({ 
        data : {...this.state.data},
        [e.target.name] : e.target.value 
    })

    onSubmit = () => {
        const errors = this.validate(this.state.data)
        this.setState({ errors })
    }

    validate = (data) => {
        const errors = {}
        if(!Validator.isEmail(data.email)) errors.email = "Email Invalid"
        if(!data.password) errors.password = "Password Required"
        return errors
    }

    render() {
        const { data , errors } = this.state
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <Label>Email</Label>
                    <RenderInputText
                        value={data.email}
                        onEventChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email}/>}
                </div>
                <div>
                    <Label>Password</Label>
                    <RenderInputText
                        value={data.password}
                        onEventChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password}/>}
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
                            
            </form>
        )
    }
}
export default LoginForm