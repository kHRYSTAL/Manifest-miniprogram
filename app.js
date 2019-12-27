import {eventBusRegister, eventBusGetter} from './utils/eventbus';
import {routerRegister} from './utils/router';
import {initRouter} from './common/service/router-service';
import {wxCheckSession} from './common/service/login-service';
import {getSystemInfo} from './common/service/system-service';
import {globalData} from "./utils/global-data";

App({
    onLaunch(options) {
        console.log('=====App====onLaunch============', JSON.stringify(options));
        wxCheckSession(options);
        setTimeout(initRouter, 0);
        getSystemInfo().then(res => {
            console.log('===getSystemInfo===', res);
            globalData('statusBarHeight', res.statusBarHeight);
            globalData('navBarHeight', 44 + res.statusBarHeight);
            if (res.platform == "devtools") {
                globalData('platform', 'ios');
            } else if (res.platform == "ios") {
                globalData('platform', 'ios');
            } else if (res.platform == "android") {
                globalData('platform', 'android');
            }
        })

    },
    onShow(options) {
        console.log('=====App====onShow============', JSON.stringify(options));
        // 此处获取场景值
    },
    globalData: {
        eventbus: eventBusRegister,
        router: routerRegister
    }
});
