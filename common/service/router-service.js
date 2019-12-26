/** router 初始化服务 */
import {URI_COURSE, URI_COURSE_HOME, URI_LESSON, URI_MY_COURSE, URI_WEB_PAGE, OPEN_TYPE} from '../constants';
import {navigateTo, switchTab, redirectTo, reLaunch} from './page-service';
import {routerGetter} from '../../utils/router';

function goHome () {
    switchTab({url: '/pages/index/index'});
}

function goMyCourse () {
    switchTab({url: '/pages/user/user'});
}

function goCourse (courseId, openType, from) {
    if (openType === OPEN_TYPE.REDIRECT) {
        redirectTo({url: `/pages/detail/detail?courseId=${courseId}` + (from ? '&from=' + from : '')});
    } else if (openType === OPEN_TYPE.RELAUNCH) {
        reLaunch({url: `/pages/detail/detail?courseId=${courseId}` + (from ? '&from=' + from : '')});
    } else {
        navigateTo({url: `/pages/detail/detail?courseId=${courseId}` + (from ? '&from=' + from : '')});
    }
}

function goLesson (lessonId, openType, from) {
    if (openType === OPEN_TYPE.REDIRECT) {
        redirectTo({url: `/pages/listen/listen?lessonId=${lessonId}` + (from ? '&from=' + from : '')});
    } else if (openType === OPEN_TYPE.RELAUNCH) {
        reLaunch({url: `/pages/listen/listen?lessonId=${lessonId}` + (from ? '&from=' + from : '')});
    } else {
        navigateTo({url: `/pages/listen/listen?lessonId=${lessonId}` + (from ? '&from=' + from : '')});
    }
}

function goWebPage (url) {
    let webUrl = decodeURIComponent(url);
    navigateTo({url: `/pages/web/web?url=${webUrl}`});
}

export const initRouter = () => {
    // 注意 正则是非贪婪匹配 因此需要按照当前顺序注册 不可更改！
    routerGetter().register(URI_LESSON, goLesson);
    routerGetter().register(URI_MY_COURSE, goMyCourse);
    routerGetter().register(URI_COURSE, goCourse);
    routerGetter().register(URI_COURSE_HOME, goHome);
    routerGetter().register(URI_WEB_PAGE, goWebPage);
};
