import page from '../../common/service/page-service';
import {setStorageSync, getStorageSync} from '../../common/service/storage-service';
import {STORAGE_SPLASH_COUNT} from '../../common/constants';
const SHOW_SPLASH_TIME = 3;

const DELAY = 5000;

Page({
    data: {
        timer: undefined
    },

    onLoad() {
        // 每三次启动小程序 执行一次splash动画
        // 其余次数直接跳转至首页
        let count = getStorageSync(STORAGE_SPLASH_COUNT);
        if (count == undefined || count % SHOW_SPLASH_TIME == 0) { // 0 | 3 | undefined
            count = 1;
            setStorageSync(STORAGE_SPLASH_COUNT, count);
        } else {
            count += 1;
            setStorageSync(STORAGE_SPLASH_COUNT, count);
            page.redirectTo({url: '/pages/index/index'})
        }
    },

    onImageLoadSuccess(event) {
        // 动画停留时间为5s 到时间切换至首页
        console.log('success', event);
        let timer = setTimeout(() => {
            page.redirectTo({url: '/pages/index/index'})
        }, DELAY);
        this.data.timer = timer;
    },

    onImageLoadError(event) {
        // 动画加载失败直接切换至首页
        console.log('error', event);
        page.redirectTo({url: '/pages/index/index'})
    },

    onUnLoad() {
        if (this.data.timer) {
            clearTimeout(this.data.timer);
        }
    }
});
