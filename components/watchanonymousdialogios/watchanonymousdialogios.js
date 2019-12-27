Component({

    data: {
        showAnonymousDialog: false,
        commentId: undefined,
        replyId: undefined
    },

    methods: {
        showAnonymousDialog(commentId, replyId) {
            this.setData({
                showAnonymousDialog: true,
                commentId: commentId,
                replyId: replyId,
            });
        },

        onCancelClick() {
            this.hideAnonymousDialog();
        },

        onShareSuccess() {
            if (this.data.showAnonymousDialog) {
                this.triggerEvent('onDlgShareSuccessByiOS', {
                    commentId: this.data.commentId,
                    replyId: this.data.replyId
                });
                this.hideAnonymousDialog()
            }
        },

        hideAnonymousDialog() {
            this.setData({showAnonymousDialog: false});
        },

        onMaskClick() {
            this.hideAnonymousDialog();
        }
    }
});
