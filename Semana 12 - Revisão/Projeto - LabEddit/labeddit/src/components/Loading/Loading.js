import { Spinner } from "@chakra-ui/react"
import { Container } from './LoadingStyles'

function Loading() {
  return <Container>
    <Spinner
      color="brand.orange"
      size="xl"
      thickness="4px"
      speed="0.65s" />
  </Container>
}

export default Loading