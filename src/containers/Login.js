import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import Nav from '../components/Nav'
import CategoryList from '../components/CategoryList'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'
import { login } from '../actions/auth'


class Login extends Component {
    submit = data => this.props.login(data).then(() => this.props.history.push('/account/myaccount'))
    
    render() {
        return (
            <div>
                <Nav/>
                <CategoryList/>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                        <div style={{maxWidth:'500px',margin:'0 auto',paddingTop:'50px'}}>
                           <LoginForm submit={this.submit}/>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Footer/>
            </div>
        )
    }
}

export default connect(null,{ login })(Login)
