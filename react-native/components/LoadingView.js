import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const LoadingView = ({ loading }) => {
  if (!loading) return null

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
      }}
    >
      <ActivityIndicator size="large" color="#4E73DF" />
    </View>
  )
}

export default LoadingView
