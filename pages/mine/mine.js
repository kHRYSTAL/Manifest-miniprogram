import page from '../../common/service/page-service';
Page({
    data: {
        manifests: [
            {content: '复习英语，争取能读5本简单的原文书'},
            {content: '嘻嘻哈哈后复习英语，争取能读5本简单的原文书'},
            {content: '嘻嘻哈哈后复习英语'},
            {content: '每逢嘿嘿和金额可解合肥和欧回复飞'},
            {content: '嘻嘻哈哈后复习英语'},
            {content: '嘻嘻哈哈后复习英语，争取能读5本简单的原文书'},
            {content: '复习英语，争取能读5本简单的原文书'},
            {content: '复习英语，争取能读5本简单的原文书'},
            {content: '嘻嘻哈哈后复习英语，争取能读5本简单的原文书'},
            {content: '嘻嘻哈哈后复习英语'}
        ],
        startY: 0,
        endY: 0,
        scrollTop: 0,
        startTop: 0
    },

    onTouchStart(ev) {
        this.data.startY = ev.touches[0].pageY;
    },

    onTouchMove(ev) {
        let currentY = ev.changedTouches[0].pageY;

        let moveY =  this.data.startY - currentY;
        if (this.data.scrollTop > this.data.scrollHeight && this.data.scrollHeight > 0) {
            let scrollHeight =  this.data.scrollHeight;
            this.setData({
                scrollTop: scrollHeight
            });
            return;
        } else if (this.data.scrollTop < 0) {
            this.data.scrollTop = 0;
            this.setData({
                scrollTop: 0
            });
            return;
        }
        let startPosY = this.data.startTop;
        // console.log('onMove',this.data.scrollTop);
        this.setData({
            scrollTop: moveY + startPosY
        });
    },

    onTouchEnd(ev) {
        this.data.startTop = this.data.scrollTop;
    },

    onScroll(ev) {
        console.log(ev);
        this.data.scrollHeight = ev.detail.scrollHeight;
    },

    onLotteryClick() {
        page.navigateTo({url: '/pages/lottery/lottery'});
    }
});
