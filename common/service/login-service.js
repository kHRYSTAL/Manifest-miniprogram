import wechat from './system-service';
import userService from './user-service';
import alertService from './alter-service';
import storage from './storage-service';
import {LOGIN_STATUS, EVENT_BUS_KEY, API_WECHAT_LOGIN, STORAGE_USERINFO, USER_STATUS} from '../constants';
import {eventBusGetter} from '../../utils/eventbus';
import {getDecodeAndBind} from '../../data-model/model-login';
import {get} from '../../utils/http';
import {showLoadingToast} from './toast-service';

/**
 * 在app初始化时执行微信登录 //(业务帐号登录操作, 目前不存在)
 * 并将当前用户状态发送EventBus进行通知
 * @param options
 */
function wxCheckSession (options) {
    console.log('开始检查session有效性: 微信登录', options);
    wechat.login()
        .then(wxLoginRes => {
            console.log('client登录成功', wxLoginRes);
            userService.setLoginStatus(LOGIN_STATUS.WX_LOGIN_SUCCESS);
            eventBusGetter().$emit(EVENT_BUS_KEY.LOGIN_STATUS_UPDATE, LOGIN_STATUS.WX_LOGIN_SUCCESS);
            return get(API_WECHAT_LOGIN, {'code': wxLoginRes.code});
        })
        .then(wxres => {
            console.log('保存session', wxres);
            userService.saveSession(wxres);
        })
        .catch(wxerr => {
            console.log('session登录失败', wxerr);
            userService.setLoginStatus(LOGIN_STATUS.WX_LOGIN_FAILED);
            eventBusGetter().$emit(EVENT_BUS_KEY.LOGIN_STATUS_UPDATE, LOGIN_STATUS.WX_LOGIN_FAILED);
        });
}

module.exports = {
    wxCheckSession: wxCheckSession
};
