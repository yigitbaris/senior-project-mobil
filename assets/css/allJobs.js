import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../constants'

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    backgroundColor: '#333',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontWeight: '500',
    marginLeft: 25,
    color: '#f0f0f0',
  },
  headerBtn: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    marginBottom: 70,
    marginLeft: 20,
    marginRight: 20,
  },
})

export default styles
