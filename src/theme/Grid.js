import styled , { css } from 'styled-components'

export const Row = styled.div`
    &::after {
        content:" ";
        clear:both;
        display;table;
    }
`

function getWidth(span) {
    if(!span) return ;

    let width = span / 12 * 100;
    return `width: ${width}%`;
}


export const Column = styled.div`
  
    width:100%;
    float:left;
    
    ${({ xs }) => (xs ? getWidth(xs) : "width:100%")};

    @media only screen and (min-width: 768px) {
       ${({ sm }) => sm && getWidth(sm)} 
    };
    @media only screen and (min-width: 992px) {
        ${({ md }) => md && getWidth(md)} 
     };
     @media only screen and (min-width: 1200px) {
        ${({ lg }) => lg && getWidth(lg)} 
     };
`

export const Flex = styled.div`
    display: flex;

    ${({ column }) => column && css`
    flex-direction: column;
    `}
    ${({ justify }) => justify && css`
    justify-content: ${justify};
    `}
    ${({ align }) => align && css`
    align-content: ${align};
    `}
`

export const Grid = styled.div`
     display:grid;

     ${({ column }) => column && css`
        grid-template-columns:repeat(${column});
     `}

     ${({ gap }) => gap && css`
        grid-gap:${gap}px;
     `}

`

