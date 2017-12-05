import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import Nav from '../components/Nav'
import CategoryList from '../components/CategoryList'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'
import { ButtonStyled } from '../components/Etc/Reusable';


class Account extends Component {
    
    render() {
        return (
            <div>
                <Nav/>
                <CategoryList/>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                        <div style={{maxWidth:'500px',margin:'0 auto',paddingTop:'50px'}}>
                          <div>
                             <h1>Account</h1>
                          </div>
                                <ButtonStyled>Logout</ButtonStyled>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Footer/>
            </div>
        )
    }
}

export default Account
