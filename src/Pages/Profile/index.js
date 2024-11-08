// import { StyleSheet, Text, View, ImageBackground } from "react-native";
// import background_image from '../../../assets/images/background_image.png'

// export default function Profile() {
//     return(
//         <ImageBackground
//           style={styles.backgroundImage}
//           source={background_image}
//         >
    
//             <View style={styles.container}>
//                 <Text style={styles.text}>Personalização do Perfil</Text>
//             </View>
//         </ImageBackground>
//         )
//     }
    
//     const styles = StyleSheet.create({
//         backgroundImage: {
//             flex: 1,
//             resizeMode: 'cover',
//             justifyContent: 'center'
//         },
//         container: {
//             flex: 1,
//             alignItems: 'center',
//             justifyContent: 'center',
//         },
//         text: {
//             fontSize: 30,
//             color: '#000'
//         }
//     })

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import background_image from '../../../assets/images/background_image.png';

const UserProfile = () => {
    // const isCurrentUser = true;
    const user = {
        name: 'Guts Zico',
        bio: 'Voluntário experiente e entusiasta de causas sociais, com uma paixão por conectar pessoas a projetos que geram impacto positivo. Acredito que pequenos gestos podem mudar vidas e estou sempre à procura de novas maneiras de contribuir para a comunidade. Juntos, somos mais fortes!',
        image: require('../../../assets/images/iconBerserk.png'),  
    };

    return (
        <ImageBackground
            style={styles.backgroundImage}
            source={background_image}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.profileHeader}>
                    <Image source={user.image} style={styles.profileImage} />
                    <View style={styles.statsContainer}>
                    </View>
                </View>
                
                <View style={styles.profileInfo}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.userBio}>{user.bio}</Text>
                </View>

                {/* <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.buttonText}>
                        {isCurrentUser ? 'Publicações' : 'Seguir'}
                    </Text>
                </TouchableOpacity> */}
                <Text style={styles.publications}>
                    Publicações
                </Text>


            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%', 
        height: '100%', 
        resizeMode: "cover",
        justifyContent: "center",
    },
    
    container: {
        flex: 1,
        backgroundColor: 'transparent', 
        padding: 20,
        marginTop: 60,
    },
    profileHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    // statsContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     width: '60%',
    // },
    
    publications: {
        backgroundColor: '#87C1D4',
        fontSize: 27,
        borderTopLeftRadius: 15,  
        borderTopRightRadius: 15, 
        overflow: 'hidden',     
        textAlign: 'center',
        marginTop: 15,  
    },

    stat: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 14,
        color: 'gray',
    },
    profileInfo: {
        marginBottom: 20,
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    userBio: {
        fontSize: 16,
        color: 'gray',
        marginTop: 5,
    },
    actionButton: {
        backgroundColor: '#1E90FF',
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default UserProfile;
