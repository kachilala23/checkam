import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    Animated
} from 'react-native';

import { constants, images, FONTS, SIZES, COLORS } from '../../constants';

function renderHeaderLogo() {
    return (
        <View
            style={{
                position: 'absolute',
                top: SIZES.height > 800 ? 50 : 25,
                left: 0,
                right: 0,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Image 
                source={images.logo_02}
                resizeMode="contain"
                style={{
                    width: SIZES.width * 0.5,
                    height: 100
                }}
            />
        </View>
    )
}

const OnBoarding = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {renderHeaderLogo()}

            <Animated.FlatList 
                horizontal
                pagingEnabled
                data={constants.onboarding_screens}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item, index }) => {
                    return (
                        <View 
                            style={{
                                width: SIZES.width
                            }}
                        >
                        
                        {/* Header */}

                        <View 
                            style={{
                                flex: 3
                            }}
                        >

                            <ImageBackground 
                                source={item.backgroundImage}
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    height: "100%",
                                    width: "100%"
                                }}
                            >
                            </ImageBackground>

                        </View>




                        {/* Details */}


                        </View>
                    )
                }}
            />

        </View>
    )
}

export default OnBoarding;