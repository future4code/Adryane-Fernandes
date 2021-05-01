import styled from 'styled-components'

export const Container = styled.header`
  background: #E34234;
  display: flex;
  align-items: center;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`
export const Image = styled.img`
  width: 5rem;
`
export const TextLogo = styled.h1`
  margin-left: -.6rem;
  font-size: 1.8rem;
  color: white;
  font-weight: 800;
`
export const LogoutButton = styled.button`
  background: white;
  padding: 0.5rem .8rem;
  border-radius: 20px;
  color: #E34234;
  font-weight: 600;

  &:hover{
    background: rgba(255, 255, 255, .8)
  }
`