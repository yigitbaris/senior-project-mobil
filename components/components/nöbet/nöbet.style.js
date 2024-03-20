import { StyleSheet } from 'react-native'

import { COLORS, FONT, SHADOWS, SIZES } from '../../../assets/constants'

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    width: 350,
    padding: SIZES.xLarge,
    backgroundColor: selectedJob === item._id ? COLORS.primary : '#FFF',
    borderRadius: SIZES.medium,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedJob, item) => ({
    width: 50,
    height: 50,
    backgroundColor: '#2cb1bc',
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  mainIcon: {
    width: '%100',
    height: '%100',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2cb1bc',
    borderRadius: 8,
    fontSize: 24,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  companyName: {
    fontSize: SIZES.medium,
    color: '#B3AEC6',
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
    backgroundColor: 'red',
  },
  jobName: (selectedJob, item) => ({
    fontSize: SIZES.large,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  publisher: (selectedJob) => ({
    fontSize: SIZES.medium - 2,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    color: '#B3AEC6',
  },
  flatList: {
    display: 'flex',
    marginTop: 20,
  },
  nöbet: {
    marginTop: 40,
  },
})

export default styles
