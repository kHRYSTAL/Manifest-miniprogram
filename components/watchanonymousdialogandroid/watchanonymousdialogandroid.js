import {setStorageSync, getStorageSync} from '../../common/service/storage-service';
import {STORAGE_DATE_SHARE} from "../../common/constants";
import {dateFormat} from '../../utils/date';
import {getRandomMoney} from '../../utils/moneyRandom';

const MAX_EXCHANGE_STEP = 2; // 换一换最大步骤数为3次
// Android查看匿名弹窗需求:
// {@link https://api.zhisland.com/impic/T1UCVTB7h_1R4cSCrK_.png}
Component({

    data: {
        showAnonymousDialog: false,
        commentId: undefined,
        replyId: undefined,
        step: 0,
        count: 0,
        money: '0.00'
    },


    methods: {

        showAnonymousDialog(commentId, replyId) {
            let curDate = new Date();
            // 初始化操作
            let shareControl = getStorageSync(STORAGE_DATE_SHARE);
            if (!shareControl) { // 如果shareControl 不存在 创建新的shareControl 初始化
                shareControl = {
                    date: dateFormat('YYYY-mm-dd', curDate),
                    count: 0,
                };
                setStorageSync(STORAGE_DATE_SHARE, shareControl);
            } else if (shareControl.date != dateFormat('YYYY-mm-dd', curDate)) { // 如果上次创建的shareControl和今天不是一天 创建新的shareControl
                shareControl = {
                    date: curDate,
                    count: 0,
                };
                setStorageSync(STORAGE_DATE_SHARE, shareControl);
            }
            this.setData({
                showAnonymousDialog: true,
                commentId: commentId,
                replyId: replyId,
                step: 0, // 每次展示 都从第一步开始
                count: shareControl.count,
                money: getRandomMoney(0)
            });


        },

        // 通知外页执行付款操作
        onPayMoneySubmit(select) {
            let money = select.currentTarget.dataset.money;
            let commentId = this.data.commentId;
            let replyId = this.data.replyId;
            this.triggerEvent('onPayMoneySubmit', {
                money: money,
                commentId: commentId,
                replyId: replyId,
            });
        },

        // 点击换一换
        onExchangeClick() {
            let shareControl = getStorageSync(STORAGE_DATE_SHARE);
            shareControl.count += 1;
            console.log('换一换', shareControl.count);
            setStorageSync(STORAGE_DATE_SHARE, shareControl);
            this.setData({
                count: shareControl.count
            });
            this._executeNextStep();
        },

        // 执行换成下一步
        _executeNextStep() {
            let step = this.data.step + 1;
            if (step > MAX_EXCHANGE_STEP) {
                step = MAX_EXCHANGE_STEP;
            }
            console.log('下一步', step);
            this.setData({
                step: step,
                money: getRandomMoney(step)
            });
        },

        hideAnonymousDialog() {
            this.setData({showAnonymousDialog: false});
        },

        onMaskClick() {
            this.hideAnonymousDialog();
        }
    }
});
