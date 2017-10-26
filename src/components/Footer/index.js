import React, { Component } from 'react'
import { Grid , Icon } from 'semantic-ui-react'
import RenderInputText from '../Etc/RenderInputText'
import { ButtonStyled } from '../Etc/ButtonStyled'

export default class Footer extends Component {
    render() {
        return (
            <div style={{padding:'50px',marginTop:'50px'}}>
            <Grid>
                <Grid.Row centered>
                    <Grid.Column computer={6}>
                        <ul style={{listStyle:'none',padding:'0'}}>
                            <li>FAQ</li>
                            <li>Privacy Policy</li>
                            <li>Term of Service</li>
                            <li>Log in</li>

                        </ul>
                    </Grid.Column>
                    <Grid.Column textAlign={'right'} computer={6}>
                        <div style={{display:'flex'}}>
                        <RenderInputText style={{height:'50px',width:'70%'}}/>
                        <ButtonStyled style={{width:'30%'}}>SUBSCRIBE</ButtonStyled>
                        </div>
                    </Grid.Column>
                </Grid.Row>
             
                <Grid.Row centered>
                    <Grid.Column computer={6}>
                        <Icon size={'big'} name={'facebook square'}/>
                        <Icon size={'big'} name={'github'}/>
                        <Icon size={'big'} name={'instagram'}/>
                        <Icon size={'big'} name={'pinterest'}/>
                    </Grid.Column>
                    <Grid.Column textAlign={'right'} computer={6}>
                        <Icon size={'large'} name={'paypal'}/>
                        <Icon size={'large'} name={'visa'}/>
                        <Icon size={'large'} name={'mastercard'}/>
                        <Icon size={'large'} name={'google wallet'}/>
                    </Grid.Column>
                    
                </Grid.Row>
                <Grid.Row centered>
                    <p>© 2017,International Online Retailer</p>
                </Grid.Row>
            </Grid>
            </div>
        )
    }
}
