// 
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   KeyboardAvoidingView,
//   Image,
//   TextInput,
//   TouchableOpacity, 
//   Text,
//   StyleSheet,
//   Animated,
//   ImageBackground,
//   SafeAreaView,
//   Button
// } from "react-native";
// import background_image from '../assets/images/background_image.png';
// import solidaire_logo from '../assets/images/solidaire_logo.png';

// export default function HomeScreen({ navigation }) {
//   const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
//   const [opacity] = useState(new Animated.Value(0));

//   useEffect(() => {
//     Animated.parallel([
//       Animated.spring(offset.y, {
//         toValue: 0,
//         speed: 4,
//         bounciness: 20,
//       }),
//       Animated.timing(opacity, {
//         toValue: 1,
//         duration: 200,
//       }),
//     ]).start();
//   }, []);

//   return (
//     <ImageBackground
//       style={styles.backgroundImage}
//       source={background_image}
//     >
//       <KeyboardAvoidingView style={styles.background}>
//         <View style={styles.containerLogo}>
//           <Image source={solidaire_logo} />
//           <Text style={styles.txtLogin}>Login</Text>
//           <Text style={styles.descriptionLogin}>Faça login para continuar</Text>
//         </View>

//         <Animated.View
//           style={[
//             styles.container,
//             {
//               opacity: opacity,
//               transform: [{ translateY: offset.y }],
//             },
//           ]}
//         >
//           <View style={styles.viewInput}>
//             <TextInput
//               style={styles.input}
//               color="#fff"
//               placeholder="Email"
//               placeholderTextColor="#000"
//               autoCorrect={false}
//               onChangeText={() => {}}
//             />

//             <TextInput
//               style={styles.input}
//               color="#fff"
//               placeholder="Senha"
//               placeholderTextColor="#000"
//               autoCorrect={false}
//               secureTextEntry={true}
//               onChangeText={() => {}}
//             />

//             <TouchableOpacity style={styles.btnSubmit}>
//               <Text style={styles.submitText}>Login</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('Routes')}>
//               <Text style={styles.registerText}>Esqueceu sua senha?</Text>
//             </TouchableOpacity>
            
//           </View> 

//           <SafeAreaView style={styles.viewCad}>
//             <Text>Ainda não faz parte do Solidaire?</Text>
//             <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')} >
//               <Text style={styles.txtCad}>Cadastre-se </Text>
//             </TouchableOpacity>
//           </SafeAreaView>
//         </Animated.View>
//       </KeyboardAvoidingView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//   },

//   background: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   containerLogo: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     width: "90%",
//   },

//   viewInput: {
//     marginBottom: 100,
//   },

//   txtLogin: {
//     fontSize: 28,
//     fontWeight: "900",
//     marginTop: 20,
//   },

//   descriptionLogin: {
//     fontSize: 18,
//   },

//   input: {
//     backgroundColor: "#49AFD1",
//     opacity: 0.5,
//     width: 330,
//     height: 42,
//     marginBottom: 15,
//     color: "red",
//     fontSize: 17,
//     borderRadius: 12,
//     padding: 10,
//   },

//   btnSubmit: {
//     backgroundColor: "#48A2BF",
//     width: 330,
//     height: 42,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 12,
//     marginTop: 10,
//   },

//   txtCad: {
//     marginBottom: 70,
//     textAlign: 'center',
//     color: '#fff',
//     textDecorationLine: "underline",
//   },

//   submitText: {
//     color: "#fff",
//     fontSize: 18,
//   },

//   btnRegister: {
//     marginTop: 10,
//   },

//   registerText: {
//     color: "#404040",
//     textAlign: "center",
//     textDecorationLine: "underline",
//     fontSize: 14,
//   },
// });




import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity, 
  Text,
  StyleSheet,
  Animated,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import background_image from '../assets/images/background_image.png';
import solidaire_logo from '../assets/images/solidaire_logo.png';

export default function HomeScreen({ navigation }) { // Recebe 'navigation' como propriedade
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      }),
    ]).start();
  }, []);

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={background_image}
    >
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
          <Image source={solidaire_logo} />
          <Text style={styles.txtLogin}>Login</Text>
          <Text style={styles.descriptionLogin}>Faça login para continuar</Text>
        </View>

        <Animated.View
          style={[
            styles.container,
            {
              opacity: opacity,
              transform: [{ translateY: offset.y }],
            },
          ]}
        >
          <View style={styles.viewInput}>
            <TextInput
              style={styles.input}
              color="#fff"
              placeholder="Email"
              placeholderTextColor="#000"
              autoCorrect={false}
              onChangeText={() => {}}
            />

            <TextInput
              style={styles.input}
              color="#fff"
              placeholder="Senha"
              placeholderTextColor="#000"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={() => {}}
            />

            <TouchableOpacity
              style={styles.btnSubmit}
              onPress={() => navigation.navigate('Routes')} 
            >
              <Text style={styles.submitText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnRegister}
              onPress={() => navigation.navigate('ResetPassword')}
            >
              <Text style={styles.registerText}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View> 

          <SafeAreaView style={styles.viewCad}>
            <Text>Ainda não faz parte do Solidaire?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.txtCad}>Cadastre-se</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </Animated.View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  containerLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },

  viewInput: {
    marginBottom: 100,
  },

  txtLogin: {
    fontSize: 28,
    fontWeight: "900",
    marginTop: 20,
  },

  descriptionLogin: {
    fontSize: 18,
  },

  input: {
    backgroundColor: "#49AFD1",
    opacity: 0.5,
    width: 330,
    height: 42,
    marginBottom: 15,
    color: "red",
    fontSize: 17,
    borderRadius: 12,
    padding: 10,
  },

  btnSubmit: {
    backgroundColor: "#48A2BF",
    width: 330,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginTop: 10,
  },

  txtCad: {
    marginBottom: 70,
    textAlign: 'center',
    color: '#fff',
    textDecorationLine: "underline",
  },

  submitText: {
    color: "#fff",
    fontSize: 18,
  },

  btnRegister: {
    marginTop: 10,
  },

  registerText: {
    color: "#404040",
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: 14,
  },
});
