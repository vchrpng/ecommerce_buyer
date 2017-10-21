import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { InputText } from '../Etc/InputText'
import { ButtonStyled } from '../Etc/ButtonStyled'
import { Label } from '../Etc/Label'
import { Radio  , Grid} from 'semantic-ui-react'

const RegisterForm = ({ handleSubmit , pristine , submitting}) => {
    return (
      <form onSubmit={handleSubmit}>
      <Grid textAlign={'center'}>
        <Grid.Row>
        <Grid.Column width={9}>
        <div>
          <Label>Email</Label>
            <Field
              name="email"
              component={InputText}
              type="email"
            />
        </div>
        <div>
          <Label>Password</Label>
            <Field
              name="password"
              component={InputText}
              type="password"
            />
        </div>
        <div>
          <Label>Confirm Password</Label>
            <Field
              name="confirm"
              component={InputText}
              type="password"
            />
        </div>
        <div style={{textAlign:'center'}}>
            <label style={{marginRight:'20px'}}>
              <Field
                name="gender"
                component={Radio}
                type="radio"
                value="male"
              />{' '}Male
            </label>
            <label>
              <Field
                name="sex"
                component={Radio}
                type="radio"
                value="female"
              />{' '}Female
            </label>
        </div>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>
            <ButtonStyled disabled={pristine || submitting}>
              Submit
            </ButtonStyled>
          </Grid.Column>
        </Grid.Row>
        
      </Grid>
      </form>
    )
}

export default reduxForm({
    form:'register'
})(RegisterForm)