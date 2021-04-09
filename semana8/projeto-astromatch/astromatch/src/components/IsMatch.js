import React from 'react'
import { Container, Tittle, Close, ConteinerIconHeart, ContainerImage} from '../styles/IsMatchStyles'
import { Icon, Button } from "@chakra-ui/react"
import { BsHeartFill } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Avatar } from "@chakra-ui/react"



function IsMatch(props) {
    return (
        <Container>
            <Close onClick={props.onClickClose}>
                <Icon as={AiOutlineCloseCircle} w={10} h={10} />
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