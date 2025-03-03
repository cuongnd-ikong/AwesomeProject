import React from 'react';
import {
  Alert,
  Image,
  Linking,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import {Pagination} from 'react-native-reanimated-carousel';
import {Text, View} from 'rn-uikit-ikong';
import {Introduction} from 'rn-uikit-ikong';
// import {Introduction} from './src /components/Introduction/Introduction';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {GrantPermissions} from './src/components/GrantPermissions/GrantPermissions';
type Props = {};

const App = (props: Props) => {
  const permissionMapping: Record<string, any> = {
    [PermissionsAndroid.PERMISSIONS.CAMERA]: PERMISSIONS.ANDROID.CAMERA,
    [PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE]:
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    [PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE]:
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    [PermissionsAndroid.PERMISSIONS.RECORD_AUDIO]:
      PERMISSIONS.ANDROID.RECORD_AUDIO,
    'ios.permission.camera': PERMISSIONS.IOS.CAMERA,
    'ios.permission.photos': PERMISSIONS.IOS.PHOTO_LIBRARY,
    'ios.permission.microphone': PERMISSIONS.IOS.MICROPHONE,
  };

  const customPermissionHandler = async (
    permission: string,
  ): Promise<boolean> => {
    try {
      const mappedPermission = permissionMapping[permission];

      if (!mappedPermission) {
        return false;
      }

      // Kiểm tra trạng thái quyền hiện tại
      const status = await check(mappedPermission);

      switch (status) {
        case RESULTS.GRANTED:
          return true;

        case RESULTS.DENIED:
          // Người dùng chưa quyết định hoặc vừa từ chối, hỏi lại
          const requestResult = await request(mappedPermission);
          return requestResult === RESULTS.GRANTED;

        case RESULTS.BLOCKED:
          // Người dùng đã từ chối vĩnh viễn, cần hướng dẫn mở cài đặt
          Alert.alert(
            'Quyền bị từ chối',
            'Bạn cần bật quyền này trong cài đặt ứng dụng để sử dụng tính năng này.',
            [
              {
                text: 'Hủy',
                style: 'cancel',
              },
              {
                text: 'Mở cài đặt',
                onPress: () => Linking.openSettings(),
              },
            ],
          );
          return false;

        default:
          return false;
      }
    } catch (error) {
      console.error('Permission handling error:', error);
      return false;
    }
  };
  return (
    <View style={{flex: 1}}>
      <Introduction
        defaultStep3={{
          image: 'https://p',
          title: 'test 03',
          adsComponent: <View flex1 bgColor={'red'} />,
          titleNextStep: 'Continue',
          descNextStep: 'Grant permission later',
        }}
        defaultStep2={{
          image: 'https://p',
          title: 'test 02',
          titleNextStep: 'Continue',
        }}
        isPermission={false}
        screenStep1={
          <View flex1 bgColor={'blue'}>
            <Image
              src={'https://picsum.photos/200/300?random=3'}
              style={{flex: 1}}
              resizeMode="cover"
            />
          </View>
        }
        loop={false}
        onEnd={() => Alert.alert('End')}
        permissionHandler={customPermissionHandler}
        permissions={[
          {
            key: 'camera',
            label: 'Camera',
            androidPermission: PermissionsAndroid.PERMISSIONS.CAMERA,
            iosPermission: 'ios.permission.camera',
          },
        ]}
      />
      {/* <GrantPermissions
        onCancel={() => {
          Alert.alert('done', 'done');
        }}
        isPermission={false}
        screenStep1={<View flex1 bgColor={'red'} />}
        defaultStep3={{
          image: 'https://p',
          title: 'ádasdasdas',
          adsComponent: <View flex1 bgColor={'red'} />,
          titleNextStep: 'Continue',
        }}
        defaultStep2={{
          image: 'https://p',
          title: 'ádasdasdas',
          titleNextStep: 'Continue',
        }}
        permissions={[
          {
            key: 'camera',
            label: 'Camera',
            androidPermission: PermissionsAndroid.PERMISSIONS.CAMERA,
            iosPermission: 'ios.permission.camera',
          },
        ]}
        permissionHandler={customPermissionHandler}
        onComplete={grantedPermissions => {
          Alert.alert(
            'Granted permissions',
            JSON.stringify(grantedPermissions),
          );
          // props?.onEnd;
          console.log('Granted permissions:', grantedPermissions);
        }}
      /> */}
    </View>
  );
};

export default App;
