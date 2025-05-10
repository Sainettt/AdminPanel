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
    backgroundColor: '#E4E4E4',
    shadowColor: '#000', // небольшая тень для красоты (опционально)
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  textWelcome: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: '#777777',
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
  btnText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
  },
  bottomInfo : {
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4E4E4',
    marginTop: 120,
    shadowColor: '#000', // небольшая тень для красоты (опционально)
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  textBottomInfo: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#777777',
  },
  labelAuthProperty: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#777777',
    marginBottom: 10,
    marginTop: 10,
  },
  containerAuthField: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  borderAuthField: {
    width : 300,
    height: 40,
    alignItems: 'center',
    paddingStart: 15,
    borderWidth: 2,
    borderColor: '#777777',
    borderRadius: 10,
  },
  inputAuthField: {
  flex: 1,              // Занимает всю высоту родителя
  width: '100%',        // На всю ширину
  fontSize: 16,         // Размер текста
  fontFamily: 'Poppins-Regular',
  color: '#000000',     // Цвет текста
},
})
