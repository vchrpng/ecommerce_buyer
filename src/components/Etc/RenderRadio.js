import { Radio } from 'semantic-ui-react'
import React from 'react'

const RenderRadio = ({ input , ...rest }) => {
    return (
        <Radio
            {...input}
            {...rest}
            valueSelected={input.value}
            onChange={(event, value) => input.onChange(value)}
        />
    )
}

export const RenderRadio