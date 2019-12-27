// pages/listen/comment/comment.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        commentList: {
            type: Array
        }
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        onReplyClick(item) {
            let commentId = item.currentTarget.dataset.commentId;
            let replyId = item.currentTarget.dataset.replyId;
            this.triggerEvent('onReplyClick', {commentId: commentId, replyId: replyId});
        },

        onAvatarClick(item) {
            let commentId = item.currentTarget.dataset.commentId;
            let replyId = item.currentTarget.dataset.replyId;
            this.triggerEvent('onWatchAnonymousClick', {commentId: commentId, replyId: replyId});
        }
    }
});
