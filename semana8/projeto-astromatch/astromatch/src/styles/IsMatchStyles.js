import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    z-index: 999;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 2rem;
    text-shadow: 2px 2px 5px black;
`
export const Close = styled.button `
    position: fixed;
    top: 1rem;
    right: 1rem;
    color: white;

    &:hover{
        opacity: .6;
        transform: scale(1.1);
    };
    &:active{
        transform: scale(1);
    };
`

export const ContainerImage = styled.div `
    display: flex;

`
export const ConteinerIconHeart = styled.div `
    align-self: flex-end; 
    margin-left: -1rem;
    z-index: 1;
`

export const Tittle = styled.p `
    font-size: 3rem;
    font-weight: 800;
    margin-top: -1rem;
    color: #D90D32;
`




