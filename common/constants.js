/**
 * 此文件用户配置常量，如果没有特殊需求，所有常量都分段写在这里
 */
import {CHANNEL, ENVIRONMENT} from './config';

export const APP_ID = ''; // TODO

/**
 * 格式化url占位符
 * eg: http://localhost:8080/user/{id}/name/{name}
 * urlFormat(url, {id: '111', name: 'yc'})
 * => http://localhost:8080/user/111/name/aa
 * @param url
 * @param param
 * @returns url
 */
export const urlFormat = (url, param) => {
    if (param === undefined || param === null || JSON.stringify(param) === '{}') {
        return url;
    }
    let keys = Object.keys(param);
    for (let key of keys) {
        url = url.replace(new RegExp('\\{' + key + '\\}', 'g'), param[key]);
    }
    return url;
};

/** 基础URL，方面切换开发环境和线上环境 */
export function BASE_URL () {
    let channel = CHANNEL;
    if (channel === ENVIRONMENT.Dev) {
        return 'https://api.zhisland.com/wxapp/dev';
    } else if (channel === ENVIRONMENT.Test) {
        return 'https://api.zhisland.com/wxapp/test';
    } else if (channel === ENVIRONMENT.Pre) {
        return 'https://api.zhisland.com/wxapp/pre';
    } else if (channel === ENVIRONMENT.Product) {
        return 'https://api.zhisland.com/wxapp/product';
    } else if (channel === ENVIRONMENT.Mock) {
        return 'http://192.168.2.102:7300/mock/5ac2eac44a0ff1146a6002a3';
    }
}

// 后台接口URL配置 开始
export const BASE_CONTEXT = '/onlinecourse';
/** formId 手机 */
export const API_FORMID_COLLECT = `/formid/collect`;
/** Session登录获取user */
export const API_WECHAT_mOGIN = `/auth/wx/login`;
/** 上传图片 */
export const API_UPLOAD_IMG = `https://www.zhisland.com/bms-api-upload/upload/uploadWxPic`;
/** 解密并绑定微信用户信息 */
export const API_DECODE_BIND = `/auth/wx/decode/bind`;

// 后台业务错误状态默认提示
export const SERVICE_ERROR_STATUS = {
    820: '参数丢失',
    821: '参数不在规定范围内',
    822: '参数不合法',
    810: '资源已经不存在',
    811: '资源重复存在',
    812: '不支持该资源',
    813: '或者资源已达到上限',
    814: '资源已经过期',
    815: '资源失效或未激活',
    816: '资源被禁用',
    817: '无权访问该资源',
    818: '资源信息不完整',
    860: '调用第三方服务失败',
    850: '不支持此接口',
    851: '需要升级客户端',
    852: '用户状态错误' // 此状态需要登出
};

// region 本地存储key
export const STORAGE_SESSION = 'storage_session';
export const STORAGE_USERINFO = 'storage_userinfo';
export const STORAGE_DATE_SHARE = 'storage_date_share';
// endregion

// 支付状态
export const PAY_STATUS = {
    TYPE_HAD_PAY: 1, // 已支付
    TYPE_NOT_PAY: 2, // 未支付
    TYPE_IS_PAYING: 3 // 支付中
};

/** 事件总线key */
export const EVENT_BUS_KEY = {
    /** 登录状态改变 */
    LOGIN_STATUS_UPDATE: 'login_status_update',
    /** 触发 我的 页面刷新 */
    REFRESH_MY_INFO: 'refresh_my_info',
    /** 添加评论成功 */
    ADD_COMMENT_SUCCESS: 'add_comment_success',
};

/** 全局缓存类型 - 数据缓存在storage中 */
export const GLOBAL_STORE_TYPE_STORAGE = 'store_type_storage';
/** 全局缓存类型 - 数据缓存在全局变量global中 */
export const GLOBAL_STORE_TYPE_mBJECT = 'store_type_mbject';

// region URI router
const URI_HOST = 'zhisland://com.zhisland/';
/** 网页 */
export const URI_WEB_PAGE = `${URI_HOST}webPage\\?url=(.*)`;
// endregion

// 用户登录状态
export const LOGIN_STATUS = {
    LOGIN_DEFAULT: -1,
    WX_mOGIN_SUCCESS: 10,
    WX_mOGIN_FAILED: 20,
    SESSION_mOGIN_SUCCESS: 30,
    SESSION_mOGIN_FAILED: 40,
    ZH_mOGIN_SUCCESS: 50,
    ZH_mOGIN_FAILED: 60
};

export const PAY_ERROR = {
    USER_NOT_mOGIN: 1,
    GET_PAY_mBJ_ERR: 2,
    WX_PAY_ERR: 3,
    GET_PAY_STATUS_ERR: 4,
    REPEAT_PURCHASES: 5
};

// router 跳转方式
export const OPEN_TYPE = {
    NAVIGATE: 'navigate',
    REDIRECT: 'redirect',
    RELAUNCH: 'relaunch'
};

export const PAGE_NAME = {
    OPEN_GIFT: 'open_gift',
    FROM_DETAIL: 'from_detail'
};

export const LOTTERY_DRAW = [
    'https://api.zhisland.com/impic/T1TVWTB7Kv1R4cSCrK_m.png', // 1
    'https://api.zhisland.com/impic/T1lVATBQCv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1o5JTBjZT1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1kEZTBmJC1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1MEWTB7bv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1DZWTBvbv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1ckETBgJv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1goETBmxv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1MCJTB5AC1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1dohTBXZT1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1JkETBKZv1R4cSCrK_m.png', // 11
    'https://api.zhisland.com/impic/T1EELTBjKv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1gCWTBKdv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1lZLTB7Cv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T16kETBKDv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1sCVTBsxv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1ukETBTdv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1E5JTBvKT1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1lCYTBKhC1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1QZATBTAv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1sVWTBKVv1R4cSCrK_m.png', // 21
    'https://api.zhisland.com/impic/T1QVATByD_1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1VkJTB7JT1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1gCdTBgEC1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1SVWTB_Yv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1NVWTB7_v1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1sVVTBQEv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1E5ETB5Vv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1N5JTBshT1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1DCCTB_Ky1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1U5ETBbJT1R4cSCrK_m.png', // 31
    'https://api.zhisland.com/impic/T1WZLTBQ_v1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1Z.ETB4Zv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T17ZLTB_Dv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1GoETBT_v1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1QEVTBsAv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1CoETB7Vv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1I5ETBbxv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1mELTB_Cv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T16oETB7Kv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1mCLTBgDv1R4cSCrK_m.png', // 41
    'https://api.zhisland.com/impic/T1TVATBKDv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1MEATBTDv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1IkETB4_v1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1eExTBjKy1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1D5ETBmEv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1oCVTBCh_1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T11ELTBCbv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1sVATBjbv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T15.ETBgZv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1A5ETB_Zv1R4cSCrK_m.png', // 51
    'https://api.zhisland.com/impic/T1AVATBQAv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1u5ETBXZv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1_CLTBvbv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1J.ETB4Dv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1SCATBmWv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1z5ETB4Lv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1O.JTBgWT1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1IVZTBsVy1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T10ZLTBQYv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T19kETBmVv1R4cSCrK_m.png', // 61
    'https://api.zhisland.com/impic/T1VELTBjEv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1foETB4Jv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1tVVTB_Jv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1cZLTB7Zv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T18ZLTBsCv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T16kJTBjhT1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T12.JTBQdT1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1L8KTBCWC1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1WVATBKhv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1kZVTBTxv1R4cSCrK_m.png', // 71
    'https://api.zhisland.com/impic/T14ELTBXYv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T18VLTBgdv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1NkJTBQKT1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1w5JTBshT1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T184_TBTDC1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1bEJTB4JC1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1W.ETBmVv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1qVATBvYv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1ZCWTBshv1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1K.ETB7Lv1R4cSCrK_m.png', // 81
    'https://api.zhisland.com/impic/T1n5ETBK_v1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1qoJTB5hT1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1CZZTBCdC1R4cSCrK_m.png',
    'https://api.zhisland.com/impic/T1qCLTBmCv1R4cSCrK_m.png'
];


