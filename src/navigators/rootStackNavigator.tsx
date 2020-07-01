import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '../screens/Home';
import CustomDrawer from '../components/CustomDrawer';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    contentComponent: CustomDrawer as any,
  },
);

export default DrawerNavigator;
