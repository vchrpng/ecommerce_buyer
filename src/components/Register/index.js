import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { InputText } from '../Etc/InputText'
import { ButtonStyled } from '../Etc/ButtonStyled'
import { Label } from '../Etc/Label'
import { Radio  , Grid} from 'semantic-ui-react'

const Register = ({ handleSubmit , pristine , submitting}) => {
    return (
      <Grid textAlign={'center'}>
        <Grid.Column width={9}>
        <form onSubmit={handleSubmit}>
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
        <div>
          <Label>Gender</Label>
          <div>
            <Label>
              <Field
                name="gender"
                component={Radio}
                type="radio"
                value="male"
              />{' '}
              Male
            </Label>
            <Label>
              <Field
                name="sex"
                component={Radio}
                type="radio"
                value="female"
              />{' '}
              Female
            </Label>
          </div>
        </div>
 
        <div>
          <ButtonStyled disabled={pristine || submitting}>
            Submit
          </ButtonStyled>
        </div>
      </form>
      </Grid.Column>
      </Grid>
    )
}

export default reduxForm({
    form:'register',
})(Register)