import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, View } from "react-native";

import { FontAwesome } from '@expo/vector-icons';

const InputSelect = () => {
  return (
    <View style={{ width : 316 }}>
      <RNPickerSelect
        style={style}
        Icon={() => {
          return <FontAwesome name="caret-down" size={20} color="#34898F" />
        }}
        placeholder={{
          label : 'Selecione um valor',
          value : null,
          color : '#34898F'
        }}
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "JavaScript", value: "JavaScript" },
          { label: "TypeScript", value: "TypeScript" },
          { label: "Python", value: "Python" },
          { label: "Java", value: "Java" },
          { label: "C++", value: "C++" },
          { label: "C", value: "C" },
        ]}
        useNativeAndroidPickerStyle={false}
      />
    </View>
  )
}

const style = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    padding : 16,
    borderWidth: 2,
    borderColor: '#60BFC5',
    borderRadius: 5,
    color: '#34898F',
    alignContent: 'center',
    alignItems : 'center',
    justifyContent : 'center',
    fontFamily : 'MontserratAlternates_600SemiBold'
  },
  inputAndroid: {
    fontSize: 16,
    padding : 16,
    borderWidth: 2,
    borderColor: '#60BFC5',
    borderRadius: 5,
    color: '#34898F',
    alignItems: 'center',
    justifyContent : 'center',
    margin: 3,
    fontFamily: 'MontserratAlternates_600SemiBold'
  },
  iconContainer : {
    top : '25%',
    marginRight : 10
  },
  placeholder : {
    color: '#34898F',
  }
})

export default InputSelect