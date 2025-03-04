import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {NIconTabAccount, NIconTabHome, NIconTabInvoice} from '@src/assets';
import React from 'react';
import {BottomTabsParamList, NavTabAccount, Routers} from './index';
import {NavTabHome} from './NavTabHome';
import {NavTabInvoice} from './NavTabInvoice';
import {NavTabListBooking} from './NavTabListBooking';
import {BottomTabComponent} from './BottomTabComponent';
import {Image} from 'react-native';
import {useTranslation} from 'react-i18next';

const Tabs = createBottomTabNavigator<BottomTabsParamList>();
export const NavTabs = () => {
  const {t} = useTranslation();
  return (
    <Tabs.Navigator
      initialRouteName={Routers.TAB_HOME}
      tabBar={props => (
        <BottomTabComponent
          {...props}
          routes={[
            {
              key: Routers.TAB_HOME,
              label: t('bottomTabs.home')!,
              icon: <Image src="https://picsum.photos/200/300?random=5" />,
              iconActive: (
                <Image src="https://picsum.photos/200/300?random=5" />
              ),
            },
            {
              key: Routers.TAB_INVOICE,
              label: t('bottomTabs.invoice')!,
              icon: <Image src="https://picsum.photos/200/300?random=5" />,
              iconActive: (
                <Image src="https://picsum.photos/200/300?random=5" />
              ),
            },
            {
              key: Routers.TAB_ACCOUNT,
              label: t('bottomTabs.account')!,
              icon: <Image src="https://picsum.photos/200/300?random=5" />,
              iconActive: (
                <Image src="https://picsum.photos/200/300?random=5" />
              ),
            },
          ]}
        />
      )}
      screenOptions={{
        header: () => null,
      }}>
      <Tabs.Screen name={Routers.TAB_HOME} component={NavTabHome} />
      <Tabs.Screen name={Routers.TAB_INVOICE} component={NavTabInvoice} />
      <Tabs.Screen name={Routers.TAB_ACCOUNT} component={NavTabAccount} />
    </Tabs.Navigator>
  );
};
