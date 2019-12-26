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
    data: {

    },

    /**
   * 组件的方法列表
   */
    methods: {
        onReplyButton (e) {
            this.triggerEvent('onReply', e.currentTarget.dataset.item);
        },
        onShareButton (e) {
            this.triggerEvent('onShare', e.currentTarget.dataset.item);
        }
    }
});
