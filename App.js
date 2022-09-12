import { StyleSheet } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//pages
import PageDashboard from './frontend-component/pages/page-dashboard';
import PageLogin from './frontend-component/pages/page-login';
import PageRegister from './frontend-component/pages/page-register';


//redux
// import { useSelector, useDispatch, Provider } from 'react-redux';
// import {
//   updateUser
// } from './redux-component/redux-slice';
// import Store from './redux-component/store-redux';

//icons
import { AntDesign } from '@expo/vector-icons';

//controller
import DashboardController from './frontend-component/nav-controller/cont-dashboard';


const Stack = createNativeStackNavigator();

export default function App() {

  const LoginPageStack = ({ navigation }) => {

    const nav = navigation;

    return (
      <PageLogin
        nav={nav}
      />
    );
  }

  const RegisterPageStack = ({ navigation }) => {

    const nav = navigation;

    return (
      <PageRegister
        nav={nav}
      />
    );
  }

  const DashboardControllerStack = ({ navigation }) => {

    const nav = navigation;

    return (
      <DashboardController
        nav={nav}
      />
    );
  }

  return (
    <NavigationContainer style={styles.container} >
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name='Register'
          component={RegisterPageStack}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='Login'
          component={LoginPageStack}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='DashboardStack'
          component={DashboardControllerStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
