/**
 * 该文件用于对项目中的全局变量进行操作
 */
import {globalData, setGlobalStore, removeGlobalStore} from '../../utils/global-data';
import {STORAGE_SESSION, STORAGE_USERINFO, GLOBAL_STORE_TYPE_STORAGE} from '../constants';

function saveLoginData (res) {
    saveSession(res);
    if (res && res.user) {
        saveUserData(res.user);
    } else {
        globalData('isBZLogin', false);
    }
}

function saveSession (res) {
    if (res && res.session) {
        // 持久化存储
        setGlobalStore(STORAGE_SESSION, res.session, {isSync: true, storageType: GLOBAL_STORE_TYPE_STORAGE});
        // 存储至app的全局变量中
        globalData('zhsession', res.session);
        globalData('isWXLogin', true);
    }
}

function saveUserData (userInfo) {
    if (userInfo) {
        // 与gateway统一 userInfo 中均使用name
        if (userInfo.userName) {
            userInfo['name'] = userInfo.userName;
        }
        try {
            // 移除原有user存储
            removeGlobalStore(STORAGE_USERINFO, {isSync: true, storageType: GLOBAL_STORE_TYPE_STORAGE});
        } catch (e) {
        }
        console.log('保存user信息');
        setGlobalStore(STORAGE_USERINFO, userInfo, {isSync: true, storageType: GLOBAL_STORE_TYPE_STORAGE});
        globalData('isBZLogin', true);
        globalData('userInfo', userInfo);
    } else {
        globalData('isBZLogin', false);
    }
}

function setUserInfo (userInfo) {
    globalData('userInfo', userInfo);
}

function getUserInfo () {
    let user = globalData('userInfo');
    return user;
}

function getLoginStatus () {
    return globalData('loginStatus');
}

function setLoginStatus (status) {
    globalData('loginStatus', status);
}

function isWXLogin () {
    return globalData('isWXLogin');
}

function setWXLogin (login) {
    globalData('isWXLogin', login);
}

function setZHLogin (isBZLogin) {
    globalData('isBZLogin', isBZLogin);
}

function logout () {
    // TODO
}

module.exports = {
    saveSession: saveSession,
    getLoginStatus: getLoginStatus,
    setLoginStatus: setLoginStatus,
    isWXLogin: isWXLogin,
    setWXLogin: setWXLogin,
    setUserInfo: setUserInfo,
    getUserInfo: getUserInfo,
    saveUserData: saveUserData,
    saveLoginData: saveLoginData,
    setZHLogin: setZHLogin,
    logout: logout
};
