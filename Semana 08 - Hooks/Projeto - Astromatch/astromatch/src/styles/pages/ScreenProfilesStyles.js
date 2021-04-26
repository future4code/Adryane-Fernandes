import styled from 'styled-components'



export const Photo = styled.div `
    display:flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: gray;
    border-radius: 10px;

    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const Profile = styled.div`
    width: 85%;
    height: 100%;
    margin: 1rem 0 2rem 0;

    display: flex;
    flex-direction: column;
`
export const BackgroundBlack = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.9), black);
    border-radius: 0 0 10px 10px;
    width: 100%;
    padding: 1rem;
`

export const Infos = styled.div`
    margin-bottom: .5rem;
`

export const Name = styled.p` 
    font-size: 2rem;
    font-weight: bold;
    color: white;
`

export const Age = styled.span`
    font-size: 1.5rem;
`

export const Description = styled.p`
    margin-top: .5rem;
    text-align: justify;
    color: white;
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-between;
`
