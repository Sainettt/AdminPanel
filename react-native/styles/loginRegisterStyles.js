import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  loginRegisterContainer: {
    width: '100%',
    height: 370,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 140,
    backgroundColor: '#E8E8E8',
    shadowColor: '#000', // небольшая тень для красоты (опционально)
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  textWelcome: {
    fontFamily: 'Poppins-Bold',
    fonstSize: 40,
    fontColor: '#777777',
    marginBottom: 45,
  },
  buttonLoginBorder: {
    width: 300,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#0A8DDE',
    borderRadius: 15,
  },
  buttonRegisterBorder: {
    width: 300,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#777777',
    borderRadius: 15,
  },
  btn: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
})
