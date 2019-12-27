import toast from '../../common/service/toast-service';
import {globalData} from "../../utils/global-data";

Page({
    data: {
        detailId: 0,
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
        commentCount: 6,
        commentList: [
            {
                replyList: [{}, {}, {}]
            }, {}, {}
        ]
    },

    onLoad() {
        // page.hideShareMenu(); // 禁用右上角分享
    },

    onReady() {
        this.bottomSheet = this.selectComponent('#bottomSheet');
        this.commentDialog = this.selectComponent('#commentDialog');
        this.sendRedPacketDialog = this.selectComponent('#sendRedPacketDialog');
        this.watchAnonymousDialogAndroid = this.selectComponent('#watchAnonymousDialogAndroid');
        this.watchAnonymousDialogiOS = this.selectComponent('#watchAnonymousDialogiOS');
    },

    onHelpClick() {
        this.bottomSheet.showBottomSheet();
    },

    onGiveRedPacketClick() {
        this.sendRedPacketDialog.showRedPacketDialog();
    },

    onAddCommentClick() {
        this.commentDialog.showCommentDialog(0, '');
    },

    onSubmitCommentClick(inputData) {
        console.log(inputData);
    },

    onGiveRedPacketSubmit(moneyData) {
        console.log(moneyData);
    },

    onPayMoneySubmit(payData) {
        console.log('发起支付', payData);
    },

    onReplyClick(reply) {
        console.log('点击回复', reply);
        this.commentDialog.showCommentDialog(1, '');
    },

    onWatchAnonymousClick(anonymous) {
        console.log('点击匿名头像', anonymous);
        if (globalData('platform') == 'android') {
            // 弹出Android 查看匿名头像付费窗
            this.watchAnonymousDialogAndroid.showAnonymousDialog('', '');
        } else {
            // 弹出iOS 查看匿名头像付费窗
            this.watchAnonymousDialogiOS.showAnonymousDialog('', '')
        }
    },

    onDlgShareSuccessByiOS(anonymous) {
        console.log('微信分享成功 查看匿名人', anonymous);
    },

    onShareAppMessage() {
        let path = '/pages/detail/detail?detailId=' + this.data.detailId;
        if (globalData('platform') == 'ios') {
            console.log('iOS执行分享成功');
            this.watchAnonymousDialogiOS.onShareSuccess()
        }
        return {
            title: '分享详情',
            path: path,
            success: (res) => {
                console.log('分享成功', res);
            },
            fail: (err) => {
                console.log('分享失败', err);
                toast.showLoadingToast('分享失败');
            }
        }
    }


});
