import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import Nav from '../components/Nav'
import CategoryList from '../components/CategoryList'
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import { Redirect } from 'react-router-dom'


class Login extends Component {
    submit = data => this.props.login(data).then(() => this.props.history.push('/account/myaccount'))
    
    render() {
        const { isAuthenticated } = this.props
        if(!isAuthenticated){
            return (
            <div>
                <Nav/>
                <CategoryList/>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                        <div style={{maxWidth:'500px',margin:'0 auto',paddingTop:'50px'}}>
                            <h3 style={{textAlign:'center',marginBottom:'20px'}}>Login</h3>
                           <LoginForm submit={this.submit}/>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )}
        else return <Redirect to='/account/myaccount' />
    }
}
const mapStateToProps = state => ({
    isAuthenticated : !!state.user.token
})


export default connect(mapStateToProps,{ login })(Login)
