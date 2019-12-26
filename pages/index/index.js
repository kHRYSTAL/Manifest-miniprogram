//index.js
import page from '../../common/service/page-service';
Page({
    data: {
        datalist: [{}, {}]
    },
    onLoad(option) {
    },

    onClickMine() {
        page.navigateTo({url: '/pages/mine/mine'});
    },

    onClickItem(item) {
        let itemId = item.currentTarget.dataset.itemid;
        page.navigateTo({url: '/pages/detail/detail'})
    }
});
