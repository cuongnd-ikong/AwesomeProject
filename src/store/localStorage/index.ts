// import {IStateDebug, IStateGeneral, IStateSetting, IStateUser} from '../index';

const DEBUG = 'DEBUG';
const SETTINGS = 'SETTINGS';
const GENERAL = 'GENERAL';
const USER = 'USER';

// export const AppStorage = {
//     getDebug: () => LocalStorage.get(DEBUG, { _default: {} as IStateDebug, isJson: true }),
//     setDebug: (data: Partial<IStateDebug>) => LocalStorage.set(DEBUG, data, {}),

//     getSettings: () => LocalStorage.get(SETTINGS, { _default: {} as IStateSetting, isJson: true, isAutoSave: false }),
//     setSettings: (data: Partial<IStateSetting>) => LocalStorage.set(SETTINGS, data, {}),

//     getGeneral: () => LocalStorage.get(GENERAL, { _default: {} as IStateGeneral, isJson: true }),
//     setGeneral: (data: Partial<IStateGeneral>) => LocalStorage.set(GENERAL, data, {}),

//     getUserAuthorize: () => LocalStorage.get(USER, { _default: {} as IStateUser, isJson: true }),
//     setUserAuthorize: (data: Partial<IStateUser>) => LocalStorage.set(USER, data, {}),
// };
