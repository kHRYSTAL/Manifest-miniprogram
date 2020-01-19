Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        showBottomSheet:false,
        animation: undefined
    },

    /**
     * 组件的方法列表
     */
    methods: {
        showBottomSheet() {
            // 显示遮罩层
            let animation = wx.createAnimation({
                duration: 200,
                timingFunction: "linear",
                delay: 0
            });
            this.animation = animation;
            animation.translateY(340).step();
            this.setData({
                animation: animation.export(),
                showBottomSheet: true
            });
            setTimeout(function () {
                animation.translateY(0).step();
                this.setData({
                    animation: animation.export()
                })
            }.bind(this), 200)
        },

        hideBottomSheet() {
            // 隐藏遮罩层
            let animation = wx.createAnimation({
                duration: 200,
                timingFunction: "linear",
                delay: 0
            });
            this.animation = animation;
            animation.translateY(340).step();
            this.setData({
                animation: animation.export(),
            })
            setTimeout(function () {
                animation.translateY(0).step();
                this.setData({
                    animation: animation.export(),
                    showBottomSheet: false
                })
            }.bind(this), 200)
        },

        onMaskClick() {
            this.hideBottomSheet();
        },

        onGiveRedPacketClick() {
            this.hideBottomSheet();
            this.triggerEvent('onGiveRedPacketClick');
        },

        onAddCommentClick() {
            this.hideBottomSheet();
            this.triggerEvent('onAddCommentClick');
        },

        onAddFriendClick() {
            this.hideBottomSheet();
            this.triggerEvent('onAddFriendClick');
        }



    }
});
