
// import { StyleSheet, Text, View, ImageBackground } from "react-native";
// import background_image from '../../../assets/images/background_image.png'

// export default function Event() {
//     return(
//     <ImageBackground
//       style={styles.backgroundImage}
//       source={background_image}
//     >

//         <View style={styles.container}>
//             <Text style={styles.text}>Criação de eventos</Text>
//         </View>
//     </ImageBackground>
//     )
// }

// const styles = StyleSheet.create({
//     backgroundImage: {
//         flex: 1,
//         resizeMode: 'cover',
//         justifyContent: 'center'
//     },
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     text: {
//         fontSize: 30,
//         color: '#000'
//     }
// })


import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import background_image from '../../../assets/images/background_image.png';
import { Picker } from '@react-native-picker/picker';

const estados = [
  { label: 'AC', value: 'AC' },
  { label: 'AL', value: 'AL' },
  { label: 'AP', value: 'AP' },
  { label: 'AM', value: 'AM' },
  { label: 'BA', value: 'BA' },
  { label: 'CE', value: 'CE' },
  { label: 'DF', value: 'DF' },
  { label: 'ES', value: 'ES' },
  { label: 'GO', value: 'GO' },
  { label: 'MA', value: 'MA' },
  { label: 'MT', value: 'MT' },
  { label: 'MS', value: 'MS' },
  { label: 'MG', value: 'MG' },
  { label: 'PA', value: 'PA' },
  { label: 'PB', value: 'PB' },
  { label: 'PR', value: 'PR' },
  { label: 'PE', value: 'PE' },
  { label: 'PI', value: 'PI' },
  { label: 'RJ', value: 'RJ' },
  { label: 'RN', value: 'RN' },
  { label: 'RS', value: 'RS' },
  { label: 'RO', value: 'RO' },
  { label: 'RR', value: 'RR' },
  { label: 'SC', value: 'SC' },
  { label: 'SP', value: 'SP' },
  { label: 'SE', value: 'SE' },
  { label: 'TO', value: 'TO' },
];


export default function App() {

  const [estadoSelecionado, setEstadoSelecionado] = useState('');

  return (
    <ScrollView
      style={styles.scroll}
    // contentContainerStyle={styles.contentContainer}
    >

      <ImageBackground
        style={styles.backgroundImage}
        source={background_image}
      >

        <KeyboardAvoidingView
          style={styles.background}
        // behavior="padding"
        >
          <View style={styles.header}>
            <TextInput
              style={styles.title}
              color="#000"
              placeholder="Título"
              maxLength={50}
            />
            {/* <TouchableOpacity>
          <Text style={styles.txtPublish}>Publicar</Text>  
        </TouchableOpacity>   */}
          </View>

          <Text style={styles.txtDescryption}>Descrição:</Text>
          <TextInput
            style={styles.descryptionInput}
            color="#000"
            placeholder="Descreva o seu evento."
            maxLength={130}
          />

          <View style={styles.hr}></View>

          <Text style={styles.txtInformations}>Informações</Text>
          <Text style={styles.txtAddress}>Endereço:</Text>

          <View style={styles.addressView}>

            <Picker
              selectedValue={estadoSelecionado}
              onValueChange={(itemValue) => setEstadoSelecionado(itemValue)}
              style={styles.state}
            >
              <Picker.Item label="Estado" value="" />
              {estados.map((estado) => (
                <Picker.Item key={estado.value} label={estado.label} value={estado.value} />
              ))}
            </Picker>

            <TextInput
              style={styles.cep}
              color="#000"
              placeholder="CEP"
              maxLength={8}
            />

            {/* <TextInput
              style={styles.cep}
              color="#000"
              placeholder="Estado"
              maxLength={8}
        /> */}


            <TextInput
              style={styles.neighborhood}
              color="#000"
              placeholder="Bairro"
              maxLength={130}
            />

          </View>

          <View style={styles.streetView}>
            <TextInput
              style={styles.street}
              color="#000"
              placeholder="Rua"
              maxLength={130}
            />

            <TextInput
              style={styles.number}
              color="#000"
              placeholder="Número"
              maxLength={5}
            />
          </View>

          <Text style={styles.txtSchedule}>Horários:</Text>

          <View style={styles.arrivalView}>
            <Text style={styles.txtArrival}>Chegada:</Text>
            <TextInput
              style={styles.arrival}
              color="#000"
              placeholder="00:00"
              maxLength={5}
            />
          </View>

          <View style={styles.exitView}>
            <Text style={styles.txtExit}>Saída:</Text>
            <TextInput
              style={styles.exit}
              color="#000"
              placeholder="00:00"
              maxLength={5}
            />
          </View>

          <Text style={styles.txtRequirements}>Requisitos: (Opcional)</Text>
          <TextInput
            style={styles.requirements}
            color="#000"
            placeholder="Descreva seus requisitros:"
            maxLength={130}
          />

          <View style={styles.hr}></View>

            <TouchableOpacity style={styles.btnPublish}>
              <Text style={styles.txtPublish}>Publicar</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  scroll: {
    flex: 1,
  },

  // contentContainer: {
  //   flexGrow: 1,
  //   paddingBottom: 20,
  // },  

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },

  title: {
    backgroundColor: "#87C1D4",
    //  fontSize: 20, 
    paddingHorizontal: 10,
    fontWeight: '500'
  },

  header: {
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,


  },

  btnPublish: {
    flex: 1,
    justifyContent: 'flex-end'
  },  

  txtPublish: {
    fontSize: 35,
    fontWeight: '700',
    marginBottom: 200,
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: '#48A2BF',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    // paddingHorizontal: 10,
  },

  txtDescryption: {
    fontSize: 27,
    paddingHorizontal: 10,
    marginTop: 60,
    fontWeight: '500',
  },

  descryptionInput: {
    backgroundColor: "#87C1D4",
    width: '95%',
    marginTop: 10,
    marginHorizontal: '3%',
    paddingBottom: 99,
    textAlign: 'left',
    fontSize: 17,
    paddingHorizontal: 10,
    fontWeight: '500',
  },

  hr: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: '90%',
    marginHorizontal: '5%',
    marginTop: 40,
  },

  txtInformations: {
    fontSize: 27,
    paddingHorizontal: 10,
    marginTop: 10,
  },

  txtAddress: {
    paddingHorizontal: 10,
    fontSize: 25,
    marginTop: 5,
  },

  cep: {
    backgroundColor: "#87C1D4",
    // width: '15%',
    width: 100,
    height: 50,
    marginTop: 10,
    paddingHorizontal: 10,
    marginHorizontal: '3%',
  },

  addressView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  state: {
    height: 25,
    marginTop: 10,
    width: '25%',
    // width: 100,
    backgroundColor: "#87C1D4",
  },

  neighborhood: {
    backgroundColor: "#87C1D4",
    // width: '45%',
    width: 100,
    height: 50,
    marginTop: 10,
    paddingHorizontal: 10,
    marginHorizontal: '3%',
  },

  street: {
    height: 45,
    marginTop: 20,
    marginLeft: 55, //55
    width: '49%', //50
    // width: 100,
    paddingHorizontal: 10,
    backgroundColor: "#87C1D4",
  },

  number: {
    backgroundColor: "#87C1D4",
    // width: '45%',
    width: 100,
    height: 50,
    marginTop: 20,
    paddingHorizontal: 10,
    marginHorizontal: '5%',
  },

  streetView: {
    flexDirection: 'row',
  },

  txtSchedule: {
    fontSize: 27,
    paddingHorizontal: 10,
    marginTop: 20,
  },

  arrivalView: {
    flexDirection: 'row',
  },

  txtArrival: {
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: 15,
  },

  arrival: {
    height: 25,
    marginTop: 10,
    marginLeft: 5,
    width: 60,
    paddingHorizontal: 10,
    backgroundColor: "#87C1D4",
  },

  exitView: {
    flexDirection: 'row',
  },

  txtExit: {
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: 15,
  },

  exit: {
    height: 25,
    marginTop: 10,
    marginLeft: 18,
    width: 60,
    paddingHorizontal: 10,
    backgroundColor: "#87C1D4",
  },

  txtRequirements: {
    fontSize: 27,
    paddingHorizontal: 10,
    marginTop: 20,
    fontWeight: '500',
  },

  requirements: {
    backgroundColor: "#87C1D4",
    width: '95%',
    marginTop: 10,
    marginHorizontal: '3%',
    paddingBottom: 30,
    textAlign: 'left',
    fontSize: 17,
    paddingHorizontal: 10,
    fontWeight: '500',
  }
});


// import React, { useState } from 'react';
// import { ImageBackground, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
// import background_image from '../../../assets/images/background_image.png';
// import { Picker } from '@react-native-picker/picker';

// const estados = [
//   { label: 'AC', value: 'AC' },
//   { label: 'AL', value: 'AL' },
//   // Restante dos estados...
// ];

// export default function App() {
//   const [estadoSelecionado, setEstadoSelecionado] = useState('');

//   return (
//     <ScrollView style={styles.scroll}>
//       <ImageBackground style={styles.backgroundImage} source={background_image}>
//         <KeyboardAvoidingView style={styles.background}>
//           <View style={styles.header}>
//             <TextInput style={styles.title} color="#000" placeholder="Título" maxLength={30} />
//             <TouchableOpacity>
//               <Text style={styles.txtPublish}>Publicar</Text>
//             </TouchableOpacity>
//           </View>

//           <Text style={styles.txtDescryption}>Descrição:</Text>
//           <TextInput style={styles.descryptionInput} color="#000" placeholder="Descreva o seu evento." maxLength={130} />

//           <View style={styles.hr}></View>

//           <Text style={styles.txtInformations}>Informações</Text>
//           <Text style={styles.txtAddress}>Endereço:</Text>

//           <View style={styles.addressView}>
//             <Picker selectedValue={estadoSelecionado} onValueChange={(itemValue) => setEstadoSelecionado(itemValue)} style={styles.state}>
//               <Picker.Item label="Estado" value="" />
//               {estados.map((estado) => (
//                 <Picker.Item key={estado.value} label={estado.label} value={estado.value} />
//               ))}
//             </Picker>

//             <TextInput style={styles.cep} color="#000" placeholder="CEP" maxLength={8} />
//             <TextInput style={styles.neighborhood} color="#000" placeholder="Bairro" maxLength={130} />
//           </View>

//           <View style={styles.streetView}>
//             <TextInput style={styles.street} color="#000" placeholder="Rua" maxLength={130} />
//             <TextInput style={styles.number} color="#000" placeholder="Número" maxLength={5} />
//           </View>

//           <Text style={styles.txtSchedule}>Horários:</Text>

//           <View style={styles.arrivalView}>
//             <Text style={styles.txtArrival}>Chegada:</Text>
//             <TextInput style={styles.arrival} color="#000" placeholder="00:00" maxLength={5} />
//           </View>

//           <View style={styles.exitView}>
//             <Text style={styles.txtExit}>Saída:</Text>
//             <TextInput style={styles.exit} color="#000" placeholder="00:00" maxLength={5} />
//           </View>

//           <Text style={styles.txtRequirements}>Requisitos: (Opcional)</Text>
//           <TextInput style={styles.requirements} color="#000" placeholder="Descreva seus requisitos:" maxLength={130} />
//           <View style={styles.hr}></View>
//         </KeyboardAvoidingView>
//       </ImageBackground>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   scroll: {
//     flex: 1,
//     height: '70%',
//   },
//   contentContainer: {
//     flexGrow: 1,
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   title: {
//     backgroundColor: '#87C1D4',
//     fontSize: 37,
//     paddingHorizontal: 10,
//     fontWeight: '500',
//   },
//   header: {
//     marginTop: 80,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     paddingHorizontal: 20,
//   },
//   txtPublish: {
//     fontSize: 35,
//     fontWeight: '700',
//   },
//   txtDescryption: {
//     fontSize: 27,
//     paddingHorizontal: 10,
//     marginTop: 60,
//     fontWeight: '500',
//   },
//   descryptionInput: {
//     backgroundColor: '#87C1D4',
//     width: '95%',
//     marginTop: 10,
//     marginHorizontal: '3%',
//     paddingBottom: 99,
//     textAlign: 'left',
//     fontSize: 17,
//     paddingHorizontal: 10,
//     fontWeight: '500',
//   },
//   hr: {
//     borderBottomColor: '#000',
//     borderBottomWidth: 1,
//     width: '90%',
//     marginHorizontal: '5%',
//     marginTop: 40,
//   },
//   txtInformations: {
//     fontSize: 27,
//     paddingHorizontal: 10,
//     marginTop: 10,
//   },
//   txtAddress: {
//     paddingHorizontal: 10,
//     fontSize: 25,
//     marginTop: 5,
//   },
//   cep: {
//     backgroundColor: '#87C1D4',
//     width: 100,
//     height: 50,
//     marginTop: 10,
//     paddingHorizontal: 10,
//     marginHorizontal: '3%',
//   },
//   addressView: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   state: {
//     height: 25,
//     marginTop: 10,
//     width: '25%',
//     backgroundColor: '#87C1D4',
//   },
//   neighborhood: {
//     backgroundColor: '#87C1D4',
//     width: 100,
//     height: 50,
//     marginTop: 10,
//     paddingHorizontal: 10,
//     marginHorizontal: '3%',
//   },
//   street: {
//     height: 45,
//     marginTop: 20,
//     marginLeft: 55,
//     width: '49%',
//     paddingHorizontal: 10,
//     backgroundColor: '#87C1D4',
//   },
//   number: {
//     backgroundColor: '#87C1D4',
//     width: 100,
//     height: 50,
//     marginTop: 20,
//     paddingHorizontal: 10,
//     marginHorizontal: '5%',
//   },
//   streetView: {
//     flexDirection: 'row',
//   },
//   txtSchedule: {
//     fontSize: 27,
//     paddingHorizontal: 10,
//     marginTop: 20,
//   },
//   arrivalView: {
//     flexDirection: 'row',
//   },
//   txtArrival: {
//     paddingHorizontal: 10,
//     fontSize: 22,
//     marginTop: 10,
//   },
//   arrival: {
//     backgroundColor: '#87C1D4',
//     width: 100,
//     height: 50,
//     marginTop: 10,
//     marginLeft: 5,
//     marginRight: 5,
//     paddingHorizontal: 10,
//   },
//   exitView: {
//     flexDirection: 'row',
//   },
//   txtExit: {
//     paddingHorizontal: 10,
//     fontSize: 22,
//     marginTop: 10,
//   },
//   exit: {
//     backgroundColor: '#87C1D4',
//     width: 100,
//     height: 50,
//     marginTop: 10,
//     marginLeft: 5,
//     marginRight: 5,
//     paddingHorizontal: 10,
//   },
//   txtRequirements: {
//     fontSize: 25,
//     marginTop: 20,
//     paddingHorizontal: 10,
//   },
//   requirements: {
//     backgroundColor: '#87C1D4',
//     width: '95%',
//     marginTop: 10,
//     marginHorizontal: '3%',
//     paddingBottom: 99,
//     textAlign: 'left',
//     fontSize: 17,
//     paddingHorizontal: 10,
//     fontWeight: '500',
//   },
// });
