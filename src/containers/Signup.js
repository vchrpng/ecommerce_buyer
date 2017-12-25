import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import Nav from '../components/Nav'
import CategoryList from '../components/CategoryList'
import Footer from '../components/Footer'
import SignupForm from '../components/SignupForm'
import { connect } from 'react-redux'
import { signup } from '../actions/auth'

class Signup extends Component {
    submit = data => this.props.signup(data).then(() => this.props.history.push('/account/login'))
    render() {
        return (
                <div>
                    <Nav/>
                    <CategoryList/>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                            <div style={{maxWidth:'500px',margin:'0 auto',paddingTop:'50px'}}>
                            <h3 style={{textAlign:'center',marginBottom:'20px'}}>Signup</h3>
                                <SignupForm submit={this.submit}/>
                            </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Footer/>
                </div>
        )
    }
}

export default connect(null,{ signup })(Signup)