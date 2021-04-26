import { Spinner } from "@chakra-ui/react"
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Loading() {
    return <Container><Spinner /></Container>
}

export default Loading