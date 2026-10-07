import React, { useEffect } from 'react';
import { store } from './src/global/store';
import { Provider } from 'react-redux';
//import { DataSource } from 'typeorm/browser';
import { MenuProvider } from 'react-native-popup-menu';

//import DatabaseSingleton from './src/app/db';
import { DatabaseProvider } from './src/global/DatabaseContext';
import { AuthProvider } from './src/app/base/auth/authContext';

import AppNavigator from './src/global/navigation/appNavigator';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/translation/i18n';
import * as Localize from 'react-native-localize';
//import { commonSizes } from '@styles/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BLEProvider } from './src/bleCommunicator/bleContext';
import { LoadingProvider } from './src/global/GlobalContext/LoadingContext';
import { LoadingOverlay } from './src/components/loadingOverlay';
import { NativeProvider } from './src/NativeCommunicator/nativeContext';
import {registerSheet, SheetProvider} from 'react-native-actions-sheet';
import DeviceDetailsMoreMenu from '@ff_controllers/deviceDetailsMoreMenu';
import EncryptedStorage from 'react-native-encrypted-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';

registerSheet('DeviceDetailsMoreMenuSheet', DeviceDetailsMoreMenu);

export default function RootLayout() {
    console.log('starting app...');

  useEffect(() => {
    const setDeviceLanguage = async () => {
      const locales = Localize.getLocales();
      let savedLanguage = 'en';
      try {
        const storedLanguage = await EncryptedStorage.getItem('deviceLanguage');
        if (storedLanguage) {
          console.log('Stored Device Language:', storedLanguage);
          savedLanguage = storedLanguage;
        } else {
          if (locales.length > 0) {
            let deviceLanguage = locales[0].languageCode;
            console.log('Device Language:', deviceLanguage);
            await EncryptedStorage.setItem('deviceLanguage', deviceLanguage);
            savedLanguage = deviceLanguage;
          } else {
            console.log('App.tsx - Error in Setting Device Language');
            savedLanguage = 'en';
          }
        }
      } catch (error) {
        console.error('Error setting device language:', error);
      }
      i18n.changeLanguage(savedLanguage);
    };
      setDeviceLanguage();
  }, []);

  /*const [db, setDb] = useState(null);

    const loadData = useCallback(async () => {
        try {
            const db = await DatabaseSingleton.getInstance();
            setDb(db);
            await createTables(db);
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        loadData();
    }, [loadData]);
    
    if (!db) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading Database...</Text>
            </View>
        );
    }
    */

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <DatabaseProvider>
          <I18nextProvider i18n={i18n}>
            <MenuProvider>
              <AuthProvider>
                <NativeProvider>
                <BLEProvider>
                  <LoadingProvider>
                    <SheetProvider>
                    <AppNavigator />
                    </SheetProvider>
                    <LoadingOverlay />
                  </LoadingProvider>
                </BLEProvider>
                </NativeProvider>
              </AuthProvider>
            </MenuProvider>
          </I18nextProvider>
        </DatabaseProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
