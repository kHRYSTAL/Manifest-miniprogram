Page({
    data: {
        manifestList: [""],
        showAddBtn: true,
        scrollTop: 0
    },

    onAddClick() {
        let that = this;
        // 添加一行输入框
        let manifestList = this.data.manifestList;
        let newInput = "";
        manifestList.push(newInput);
        this.setData({
            manifestList: manifestList
        });

        // 如果超过10条 隐藏添加按钮
        if (manifestList.length >= 10) {
            this.setData({
                showAddBtn: false
            });
        }
        this._pageScrollToBottom();
    },

    onDeleteClick(e) {
        let index = e.currentTarget.dataset.id;
        console.log(index);
        let manifestList = this.data.manifestList;
        manifestList = manifestList.filter((item , itemIndex) => {
            return itemIndex != index;
        });
        this.setData({
            manifestList: manifestList
        });
    },

    onInputTextChange(e) {
        console.log(e);
        let index = e.currentTarget.dataset.id;
        let text = e.detail.value;
        let manifestList = this.data.manifestList;
        manifestList[index] = text;
        this.data.manifestList = manifestList;
    },

    _pageScrollToBottom() {
        let query = wx.createSelectorQuery();
        query.select('#container')
            .boundingClientRect((res) => {
                console.log(res);
                wx.pageScrollTo({
                    scrollTop: res.height,
                    duration: 0,
                    success: (data) => {
                        console.log(res);
                    },
                    fail: (error) => {
                        console.log(error);
                    }
                });
            }).exec();
        query.selectViewport()
            .scrollOffset()
            .exec();
    }
});
