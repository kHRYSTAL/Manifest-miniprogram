import toast from '../../common/service/toast-service';

Component({

    data: {
        showCommentDialog: false,
        commentType: 0, // 0 评论 1 对评论的回复 2.对回复的回复
        id: ''
    },

    methods: {
        showCommentDialog(commentType, id) {

            this.setData({
                id: id,
                commentType: commentType,
                showCommentDialog: true
            });
        },


        onCommentSubmit(submit) {
            let inputContent = submit.detail.value.inputContent;
            let commentType = this.data.commentType;
            let id = this.data.id;
            if (inputContent.length === 0) {
                toast.showLoadingToast('请输入内容');
                return;
            }
            this.triggerEvent('onSubmitCommentClick', {
                content: inputContent,
                commentType: commentType,
                id: id
            });
            this.hideCommentDialog();
        },

        hideCommentDialog() {
            this.setData({showCommentDialog: false});
        },

        onMaskClick() {
            this.hideCommentDialog();
        }
    }
});
