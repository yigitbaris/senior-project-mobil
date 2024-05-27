import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

const StatBox = ({ count, icon, title, color, bcg }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.mid}>
        <View style={styles.count}>
          <Text style={{ ...styles.countText, color }}>{count}</Text>
        </View>
        <View style={{ ...styles.bcg, backgroundColor: bcg }}>
          <View style={styles.icon}>
            <FontAwesome5 name={icon} size={40} color={color} />
          </View>
        </View>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={{ ...styles.bottomLine, backgroundColor: color }}></View>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#3f3f3f',
    flexDirection: 'column',
    marginTop: 30,
    marginEnd: 30,
    marginStart: 30,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  mid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3f3f3f',
    height: 150,
    paddingRight: 40,
    paddingLeft: 40,
    borderRadius: 20,
  },
  count: {
    height: 50,
    fontSize: 100,
  },
  countText: {
    fontSize: 40,
    fontWeight: '700',
  },
  bcg: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    height: 40,
  },
  title: {
    fontSize: 50,
    height: 60,
    paddingBottom: 10,
    paddingLeft: 40,
  },
  titleText: {
    color: 'white',
    textTransform: 'capitalize',
    fontSize: 20,
  },
  bottomLine: {
    height: 5,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
})
export default StatBox
