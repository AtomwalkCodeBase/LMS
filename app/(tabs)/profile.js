import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
import React, { useContext } from 'react';
import ProfileScreen from '../../src/screens/ProfileScreen'
import { SafeAreaView } from 'react-native-safe-area-context';

const profile = () => {
  return (
    <SafeAreaView style={{ flex: 1}} edges={['top']}>
      <ProfileScreen/>
     
    </SafeAreaView>
  )
}

export default profile

const styles = StyleSheet.create({})