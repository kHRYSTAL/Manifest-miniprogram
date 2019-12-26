import toast from '../../common/service/toast-service';
import {isMoney} from '../../utils/string-util';
Component({

    data: {
        showRedPacketDialog: false,
    },

    methods: {
        showRedPacketDialog() {
            this.setData({
                showRedPacketDialog: true
            });
        },


        onGiveRedPacketSubmit(submit) {
            let inputMoney = submit.detail.value.money;
            if (inputMoney.length === 0) {
                toast.showLoadingToast('请输入金额');
                return;
            }
            if (!isMoney(inputMoney)) {
                toast.showLoadingToast('请检查输入');
            }
            this.triggerEvent('onGiveRedPacketSubmit', {
                money: inputMoney,
            });
            this.hideRedPacketDialog();
        },

        hideRedPacketDialog() {
            this.setData({showRedPacketDialog: false});
        },

        onMaskClick() {
            this.hideRedPacketDialog();
        }
    }
});
