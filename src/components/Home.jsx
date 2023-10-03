import { Box, Button, Flex, HStack, Heading, Spacer, Text, VStack} from "@chakra-ui/react";

const Home = () => {
    return ( 
        <>
            <Box 
                as={'section'}
                backgroundSize={'110%'}
                backgroundRepeat={'no-repeat'}
                backgroundPosition={'center left'}
                backgroundImage={'linear-gradient(to bottom, black, transparent, transparent, transparent, transparent), url(https://images.pexels.com/photos/374147/pexels-photo-374147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}
            >
                <Spacer 
                    height={'130px'}
                />
                <HStack 
                    px={'90px'} 
                    width={'100%'} 
                    color={'white'}
                >
                    <VStack
                        width={'45%'}
                        fontSize={'20px'} 
                        fontWeight={'500'}
                        alignItems={'start'} 
                    > 
                        <Text
                            fontStyle={'italic'} 
                            color={'#e8e7e5'}
                        >
                            Modern India & Special Tea
                        </Text>
                        <Heading
                            fontSize={'50px'}
                            fontWeight={'bold'}
                            fontFamily={'Merriweather'}
                        >
                            We welcome you to Savor the Flavor of The World
                        </Heading>
                        <HStack
                            gap={5} 
                            mt={'25px'}
                            justifyContent={'space-between'} 
                        >
                            <Box
                                width={'50px'} 
                                height={'4px'} 
                                bgColor={'white'} 
                                borderRadius={'4px'}
                            />
                            <Box
                                width={'50px'} 
                                height={'4px'} 
                                bgColor={'gray'} 
                                borderRadius={'4px'}
                            />
                            <Box
                                width={'50px'} 
                                height={'4px'} 
                                bgColor={'gray'} 
                                borderRadius={'4px'}
                            />
                        </HStack>
                        <Button 
                            bg={'white'} 
                            color={'black'} 
                            py={'10px'} 
                            px={'20px'} 
                            fontSize={'12px'} 
                            mt={'20px'}
                        >
                            LEARN MORE
                        </Button>
                    </VStack>
                    <Spacer
                        width={'55%'}
                    />
                </HStack>
                <Spacer
                    height={'400px'}
                />
            </Box>
        </>
     );
}
 
export default Home;