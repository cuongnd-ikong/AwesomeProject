import {NavigatorScreenParams} from '@react-navigation/native';
import {Routers} from './routers';

export type AuthenticationStackParamList = {
  [Routers.LoginScreen]?: {};
  [Routers.RegisterScreen]?: {};
  [Routers.ForgotPasswordScreen]?: {};
};

export type ModalStackParamList = {};

export type WithoutDrawerParamList = {};

export type TabHomeParamList = {
  [Routers.HomeScreen]?: {};
};

export type TabListBookingParamList = {};

export type TabInvoiceParamList = {
  [Routers.InvoiceScreen]?: {};
};

export type TabProfileParamList = {
  [Routers.AccountScreen]?: {userId: string};
};

export type WithoutTabStackParamList = {
  // [Routers.PaymentScreen]?: {};
};

export type BottomTabsParamList = {
  [Routers.TAB_HOME]: NavigatorScreenParams<TabHomeParamList>;
  [Routers.TAB_INVOICE]: NavigatorScreenParams<TabInvoiceParamList>;
  [Routers.TAB_ACCOUNT]: NavigatorScreenParams<TabProfileParamList>;
};

export type DrawerParamList = {
  [Routers.BOTTOM_TABS]: NavigatorScreenParams<BottomTabsParamList>;
  [Routers.WITHOUT_TABS]: NavigatorScreenParams<WithoutTabStackParamList>;
};

export type RootStackParamList = {
  [Routers.AUTHENTICATION]: NavigatorScreenParams<AuthenticationStackParamList>;
  // [Routers.DRAWER]: NavigatorScreenParams<DrawerParamList>;
  // [Routers.WITHOUT_DRAWER]: NavigatorScreenParams<WithoutDrawerParamList>;
  [Routers.BOTTOM_TABS]: NavigatorScreenParams<BottomTabsParamList>;
  [Routers.WITHOUT_TABS]: NavigatorScreenParams<WithoutTabStackParamList>;
  [Routers.MODAL]: NavigatorScreenParams<ModalStackParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
