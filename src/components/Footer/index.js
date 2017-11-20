import React, { Component } from 'react'
import { Grid , Icon } from 'semantic-ui-react'
import RenderInputText from '../Etc/RenderInputText'
import { ButtonStyled } from '../Etc/ButtonStyled'

export default class Footer extends Component {
    render() {
        return (
            <div style={{marginTop:'150px'}}>
            <Grid>
                <Grid.Row centered>
                    <Grid.Column computer={7} only={'computer'}>
                        <ul style={{listStyle:'none',padding:'0',fontWeight:'bold'}}>
                            <li>FAQ</li>
                            <li>Privacy Policy</li>
                            <li>Term of Service</li>
                            <li>Log in</li>

                        </ul>
                    </Grid.Column>
                    <Grid.Column textAlign={'right'} computer={6} mobile={13}>
                        <h4 style={{textAlign:'left'}}>Join Our Newsletter</h4>
                        <div style={{display:'flex'}}>
                            <RenderInputText height={'39px'} width={'73%'} placeholder={'Email Address'} />
                            <ButtonStyled style={{width:'25%',marginLeft:'10px'}}>SUBSCRIBE</ButtonStyled>
                        </div>
                    </Grid.Column>
                </Grid.Row>
             
                <Grid.Row centered>
                    <Grid.Column computer={7} >
                        <Icon size={'big'} name={'facebook square'}/>
                        <Icon size={'big'} name={'github'}/>
                        <Icon size={'big'} name={'instagram'}/>
                        <Icon size={'big'} name={'pinterest'}/>
                    </Grid.Column>
                    <Grid.Column textAlign={'right'} computer={6}>
                        <Icon size={'large'} name={'paypal'}/>
                        <Icon style={{marginLeft:'3px'}} size={'large'} name={'visa'}/>
                        <Icon style={{marginLeft:'5px'}} size={'large'} name={'mastercard'}/>
                        <Icon style={{marginLeft:'5px'}} size={'large'} name={'google wallet'}/>
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
