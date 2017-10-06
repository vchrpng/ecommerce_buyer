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

    let width = span / 12 * 120;
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
    align-items: ${align};
    `}
`

export const DisplayGrid = styled.div`
    display:grid;
    justify-content:center;
    ${({ column }) => column && css`
        grid-template-columns:${column};
    `}

    ${({ gap }) => gap && css`
        grid-gap:${gap}px;
    `}

    ${({ rowGap }) => rowGap && css`
        grid-row-gap:${rowGap}px;
    `}

    ${({ colGap }) => colGap && css`
        grid-column-gap:${colGap}px;
    `}

    ${({ autoRows }) => autoRows && css`
        grid-auto-rows:minmax(${autoRows});
    `}

`

