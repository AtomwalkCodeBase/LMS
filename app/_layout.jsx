import { Stack } from "expo-router";
import {AppProvider} from '../context/AppContext'
import { StatusBar, StyleSheet, View, Platform } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <StatusBar 
          barStyle="dark-content" 
          backgroundColor="#c2fbcd"
          translucent={false}
        />
        <Stack>
          <Stack.Screen name="index"/>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          
          <Stack.Screen name="AuthScreen/index" options={{headerShown:false}}/> 
          <Stack.Screen name="PinScreen/index" options={{headerShown:false}}/> 
          <Stack.Screen name="ResetPassword/index" options={{headerShown:false}}/>
          <Stack.Screen name="ActivityList/index" options={{headerShown:false}}/>
          <Stack.Screen name="OverDue/index" options={{headerShown:false}}/>
          <Stack.Screen name="InventoryData/index" options={{headerShown:false}}/>
          <Stack.Screen name="QcData/index" options={{headerShown:false}}/>
          <Stack.Screen name="ActivityCompleted/index" options={{headerShown:false}}/>
          <Stack.Screen name="MarkCompleteScreen/index" options={{headerShown:false}}/>
        </Stack>
      </AppProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
});
