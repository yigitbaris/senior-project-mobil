import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const FormRow = ({ type, name, labelText, defaultValue = '' }) => {
  return (
    <View style={styles.formRow}>
      <Text style={styles.formLabel}>{labelText || name}</Text>
      <TextInput
        style={styles.formInput}
        placeholder={labelText || name}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        defaultValue={defaultValue}
        underlineColorAndroid='transparent'
        required
      />
    </View>
  )
}

const styles = StyleSheet.create({
  formRow: {
    marginBottom: 16,
  },
  formLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  formInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
})

export default FormRow

// import React from 'react'
// import { View, Text, TextInput, StyleSheet } from 'react-native'

// const FormRow = ({ type, name, labelText, defaultValue, style, ...props }) => {
//   return (
//     <View style={[styles.container, style]}>
//       <Text style={styles.label}>{labelText}</Text>
//       <TextInput
//         style={styles.input}
//         placeholder={name}
//         keyboardType={type === 'email' ? 'email-address' : 'default'}
//         secureTextEntry={type === 'password'}
//         defaultValue={defaultValue}
//         {...props}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 16,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//   },
// });

// export default FormRow;
