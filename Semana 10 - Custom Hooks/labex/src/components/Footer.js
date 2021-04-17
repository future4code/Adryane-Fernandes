import styled from 'styled-components'

const Container = styled.footer `  
    text-align: center;
    width: 100%;
    padding:  1rem 0 .5rem 0 ;
`
function Footer() {
    return <Container>
        <p>LabeX &copy; 2021 - Todos os direitos reservados</p>
    </Container>
}

export default Footer