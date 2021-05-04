import React from 'react'
import { Container, Tittle, Close, ConteinerIconHeart, ContainerImage} from '../styles/component/IsMatchStyles'
import { Icon, Button, CloseButton } from "@chakra-ui/react"
import { BsHeartFill } from 'react-icons/bs'
import { Avatar } from "@chakra-ui/react"



function IsMatch(props) {
    return (
        <Container>
            <Close onClick={props.onClickClose}>
                <CloseButton size="lg"/>
            </Close>
            <ContainerImage>
                <Avatar src={props.photoMatch} size="xl" />
                <ConteinerIconHeart>
                    <Icon as={BsHeartFill} color='brand.red' w={50} h={50} />
                </ConteinerIconHeart>
            </ContainerImage>
            <Tittle>Match!</Tittle>
            <Button
                onClick={props.onClickList}
                size="xs"
                variant="ghost"
                color='white'

                _hover={{
                    bg: 'white',
                    color: 'brand.wine'
                }}
                _active={{
                    transform: 'scale(.9)'
                }}
                _focus={{
                    boxShadow: ''
                }}
            >
                Ver lista de Matches</Button>
        </Container>
    )
}

export default IsMatch