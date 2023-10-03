import {
    ListItem,
    List,
    HStack,
    Box,
    Heading,
    Container,
  } from '@chakra-ui/react'

const Navbar = () => {
    const listItems = [
        {
            name: 'HOME'
        },
        {
            name: 'ABOUT US'
        },
        {
            name: 'MENU'
        },
        {
            name: 'FACILITY'
        },
        {
            name: 'CONTACT US'
        },
        
    ]

    return ( 
        <>
            <Box
                px={'75px'} 
                pt={'20px'} 
                as={'section' }
                bgColor={'black'}
            >
                <Container
                    flexDir={'row'} 
                    display={'flex'} 
                    justifyContent={'space-between'}
                >
                    <Heading
                        color={'white'}
                        fontSize={'40px'}
                        fontFamily={'NotoSerif'}
                    >
                        LS Café
                    </Heading>
                    <List
                        color={'white'} 
                        textAlign={'center'}
                    >
                        <HStack
                            h={'100%'}
                            align={'center'} 
                            justifyContent={'end'} 
                        >
                            {listItems.map(items=> (
                                <ListItem
                                    cursor={'pointer'}
                                    _hover={{ 
                                        bg: "white", 
                                        color: "black", 
                                        height: '100%', 
                                        display: 'flex', 
                                        alignItems: 'center',
                                        justifyContent: 'center', 
                                        transition: "background-color 1.5s",
                                    }}
                                    px={5}
                                >
                                    {items.name}
                                </ListItem>
                            ))}
                        </HStack>
                    </List>
                </Container>
            </Box>
        </>
     );
}
 
export default Navbar;