import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavTabs, NavWithoutTabs, Routers} from './index';
import {DrawerParamList} from './interface';
import LeftMenuScreen from '../screens/LeftMenuScreen';

const Drawer = createDrawerNavigator<DrawerParamList>();

export const NavDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => null,
        drawerPosition: 'left',
        drawerStyle: {width: '80%'},
      }}
      drawerContent={LeftMenuScreen}
      // backBehavior='history'
      //
    >
      <Drawer.Screen
        name={Routers.BOTTOM_TABS}
        component={NavTabs}
        options={{}}
      />
      <Drawer.Screen
        name={Routers.WITHOUT_TABS}
        component={NavWithoutTabs}
        options={{}}
      />
    </Drawer.Navigator>
  );
};
