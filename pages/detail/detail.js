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
        commentCount: 6,
        commentList: [
            {
                replyList:[{}, {}, {}]
            },{},{}
        ]
    },

    onReady() {
        this.bottomSheet = this.selectComponent('#bottomSheet');
        this.commentDialog = this.selectComponent('#commentDialog');
    },

    onHelpClick() {
        this.bottomSheet.showBottomSheet();
    },

    onGiveRedPacketClick() {
        // TODO 点击发红包
    },

    onAddCommentClick() {
        this.commentDialog.showCommentDialog(1, '');
    },

    onSubmitCommentClick(inputData) {
        console.log(inputData);
    }
});
