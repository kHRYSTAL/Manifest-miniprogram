import {LOTTERY_DRAW} from "../../common/constants";

Page({
    data: {
        dollMachine: LOTTERY_DRAW[0],
        dollMachinePreLoad1:LOTTERY_DRAW[1],
        dollMachinePreLoad2:LOTTERY_DRAW[2],
        dollMachinePreLoad3:LOTTERY_DRAW[3],
        dollMachinePreLoad4:LOTTERY_DRAW[4],
        dollMachinePreLoad5:LOTTERY_DRAW[5],
        currentImageIndex: 0,
        isAnimationRunning: false,
        showPrompt: false
    },

    onLoad(option) {
    },

    onClickMachine() {
        this.startAnimation();
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
                dollMachinePreLoad1:LOTTERY_DRAW[1],
                dollMachinePreLoad2:LOTTERY_DRAW[2],
                dollMachinePreLoad3:LOTTERY_DRAW[3],
                dollMachinePreLoad4:LOTTERY_DRAW[4],
                dollMachinePreLoad5:LOTTERY_DRAW[5],
                currentImageIndex: 0,
                isAnimationRunning: false
            });
            that.setData({
                showPrompt: true,
                isAnimationRunning: false
            });
            return;
        } else {
            that.data.currentImageIndex++;
            let index = that.data.currentImageIndex;
            let index2 = index + 1;
            let index3 = index2 + 1;
            let index4 = index3 + 1;
            let index5 = index4 + 1;
            let index6 = index5 + 1;
            if (index6 > LOTTERY_DRAW.length - 1) {
                index2 = LOTTERY_DRAW.length - 5;
                index3 = LOTTERY_DRAW.length - 4;
                index4 = LOTTERY_DRAW.length - 3;
                index5 = LOTTERY_DRAW.length - 2;
                index6 = LOTTERY_DRAW.length - 1;

            }
            // 执行动画
            that.setData({
                dollMachine: LOTTERY_DRAW[index],
                dollMachinePreLoad1:LOTTERY_DRAW[index2],
                dollMachinePreLoad2:LOTTERY_DRAW[index3],
                dollMachinePreLoad3:LOTTERY_DRAW[index4],
                dollMachinePreLoad4:LOTTERY_DRAW[index5],
                dollMachinePreLoad5:LOTTERY_DRAW[index6],
            });
        }
        setTimeout(function () {
            that.updateDraw();
        }, 50);
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
