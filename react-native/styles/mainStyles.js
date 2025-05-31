import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerUserListScreen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#4E73DF',
  },
  containerUserList: {
    width: '100%',
    height: 560,
    marginTop: 10,
    backgroundColor: '#EBEDFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerUserComponent: {
    width: 400,
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#C3C5D9',
  },
  containerUserFunctions: {
    width: 90,
    height: 25,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: '20',
  },
  containerNameScreen: {
    width: 165,
    height: 40,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEDFF',
    borderRadius: 10,
  },
  containerLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  textNameScreen: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 28,
    color: '#4E73DF',
  },
  textsUserLists: {
    fontFamile: 'Poppins-Regular',
    fontSize: 20,
    color: '#858796',
    marginStart: 90,
  },
  nameText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#60616B',
    marginStart: 10,
  },
  roleText: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#60616B',
    marginStart: 25,
  },
  wrapperName: {
    width: 120,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  wrapperRole: {
    width: 120,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  containerEditInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  containerNameText: {
    width: 95,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#C3C5D9'
  },
  containerNameEditText: {
    width: 210,
    height: 45,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginStart: 60,
    paddingStart: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#C3C5D9'
  },
  textNameText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#858796'
  },
  textNameEditText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#858796'
  },
  containerEditUser: {
    width: '100%',
    height: 560,
    marginTop: 10,
    paddingTop: 80,
    backgroundColor: '#EBEDFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerSaveButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 190,
    height: 50,
    marginTop: 100,
    backgroundColor: '#4E73DF',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#C3C5D9'
  },
  textSaveButton: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 28,
    color: '#FFFFFF'
  },
})