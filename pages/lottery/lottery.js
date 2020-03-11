import {LOTTERY_DRAW} from "../../common/constants";

Page({
    data: {
        dollMachine: LOTTERY_DRAW[0],
        dollMachinePreLoad1: LOTTERY_DRAW[1],
        dollMachinePreLoad2: LOTTERY_DRAW[2],
        currentImageIndex: 0,
        isAnimationRunning: false,
        showPrompt: false
    },

    onLoad(option) {
    },

    onClickMachine() {
        this.startAnimation();
    },

    onImageShowSuccess() {
        if (this.data.currentImageIndex === 0) {
            return;
        }
        setTimeout(() => {
            this.updateDraw();
        }, 25);
    },

    onImageShowError() {
        this.updateDraw();
    },

    startAnimation() {
        if (!this.data.isAnimationRunning) {
            console.log('动画开始！');
            this.data.isAnimationRunning = true;
            this.updateDraw();
        }
    },

    updateDraw() {
        let that = this;
        if (that.data.currentImageIndex === LOTTERY_DRAW.length - 1) {
            // 初始化样式
            that.setData({
                dollMachine: LOTTERY_DRAW[0],
                dollMachinePreLoad1: LOTTERY_DRAW[1],
                dollMachinePreLoad2: LOTTERY_DRAW[2],
                currentImageIndex: 0,
                isAnimationRunning: false,

                showPrompt: true,
            });
        } else {
            that.data.currentImageIndex++;
            let index = that.data.currentImageIndex;
            let index2 = index + 1;
            let index3 = index2 + 1;
            if (index3 > LOTTERY_DRAW.length - 1) {
                index2 = LOTTERY_DRAW.length - 2;
                index3 = LOTTERY_DRAW.length - 1;
            }
            // 执行动画
            that.setData({
                dollMachine: LOTTERY_DRAW[index],
                dollMachinePreLoad1: LOTTERY_DRAW[index2],
                dollMachinePreLoad2: LOTTERY_DRAW[index3],
            });
        }

    },

    onOKClick() {
        this.setData({
            showPrompt: false,
        });
    },

    onAgainClick() {
        this.setData({
            showPrompt: false,
        });
        this.startAnimation();
    }


});
