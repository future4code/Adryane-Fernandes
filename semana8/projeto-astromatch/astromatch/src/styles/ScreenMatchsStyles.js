import styled from 'styled-components'

export const Profile = styled.div`
    background: gray;
    width: 85%;
    height: 100%;
    border-radius: 10px;
    margin: 1rem 0 1.5rem 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
export const List = styled.button`
    position: absolute;
    margin: 0 0 38rem 21rem;

    &:hover{
        opacity: 0.8;
        transform: scale(1.2)
    }
     &:active{
       background-color: #f9DBD1;
       transform: scale(1)
    }
`
export const BackgroundBlack = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5), black);
    border-radius: 10px;
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

export const ContainerButtonClean = styled.div`
  position: fixed;
  bottom: 2rem;

  display: flex;
  justify-content: center;
  width: 61%;
`