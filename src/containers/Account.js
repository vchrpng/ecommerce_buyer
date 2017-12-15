import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import Nav from '../components/Nav'
import CategoryList from '../components/CategoryList'
import Footer from '../components/Footer'
import { ButtonStyled } from '../components/Etc/Reusable'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logout } from '../actions/auth'


class Account extends Component {
    
    render() {
        const { isAuthenticated , logout } = this.props

        if(isAuthenticated){
            return (
            <div>
                <Nav/>
                <CategoryList/>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                        <div style={{maxWidth:'500px',margin:'0 auto',paddingTop:'50px'}}>
                          <div>
                             <h1 style={{textAlign:'center',marginBottom:'30px'}}>Account</h1>
                          </div>
                                <ButtonStyled
                                    onClick={() => logout()}
                                >Logout
                                </ButtonStyled>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Footer/>
            </div>
        )}
        else return <Redirect to='/account/login' />
    }
}
const mapStateToProps = state => ({
    isAuthenticated : !!state.user.token
})

export default connect(mapStateToProps,{ logout })(Account)
