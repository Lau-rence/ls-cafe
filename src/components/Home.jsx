import { Box, Button, Image, HStack, Heading, Spacer, Text, VStack} from "@chakra-ui/react";

const Home = () => {
    return ( 
        <>
            <Box 
                as={'section'}
                backgroundSize={'120%'}
                backgroundRepeat={'no-repeat'}
                height={'max-content'}
                backgroundPosition={'center left'}
                backgroundImage={'linear-gradient(to bottom, #222222, transparent, transparent, transparent, transparent), url(https://images.pexels.com/photos/374147/pexels-photo-374147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}
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
                            py={'10px'} 
                            px={'20px'} 
                            mt={'20px'}
                            bg={'white'} 
                            color={'black'} 
                            fontSize={'12px'} 
                        >
                            LEARN MORE
                        </Button>
                    </VStack>
                    <Spacer
                        width={'55%'}
                    />
                </HStack>
                <Spacer
                    height={'570px'}
                />
            </Box>

            <Box 
                bg={'black'} 
                height={'1000px'}
            >
                <HStack
                    px={'90px'}
                    color={'white'}
                    bottom={900}
                    position={'absolute'}
                >
                    <VStack
                        width={'50%'}
                        align={'start'}
                    >
                        <Heading
                            fontSize={'50px'}
                            fontWeight={'bold'}
                            fontFamily={'Merriweather'}
                        >
                            Choose your Favorite Coffee
                        </Heading>
                        <Text>
                            Our current beans line up filter coffee. we will add new selection for the guest beans. Keep you guys updated on this page.
                        </Text>
                        <Button 
                            py={'10px'} 
                            px={'20px'} 
                            mt={'20px'}
                            bg={'white'} 
                            color={'black'} 
                            fontSize={'12px'} 
                        >
                            LEARN MORE
                        </Button>
                    </VStack>
                    <Box 
                        width={'50%'}
                        display={'flex'}
                        justifyContent={'center'}
                        position={'relative'}
                    >
                        <Box
                            width={'450px'}
                            zIndex={'-1px'}
                            top={'-350px'}
                            height={'800px'}
                            right={'-165px'}
                            position={'absolute'}
                            border={'3px solid white'}
                            borderRadius={'0px 0px 300px 300px'}
                        >
                        </Box>
                        <Image
                            zIndex={'1px'}
                            top={'-300px'}
                            right={'-220px'}
                            position={'absolute'}
                            height={'750px'}
                            borderRadius={'0px 0px 300px 300px'}
                            src={'https://images.pexels.com/photos/14187822/pexels-photo-14187822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                        />
                    </Box>
                </HStack>
            </Box>
        </>
     );
}
 
export default Home;