import {getGenerateTemplate} from '../../utils/generate';
import toast from '../../common/service/toast-service';
Page({
    data: {
        manifestList: [""],
        showAddBtn: true,
        scrollTop: 0,
        template: {},
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

    // 点击保存
    onSaveManifestClick() {
        // TODO 步骤0 判断是否登录微信
        //TODO 步骤1. 生成图片
        let strList = this.data.manifestList;
        if (strList.length < 6) {
            toast.showLoadingToast('至少输入6项');
            return;
        }

        toast.showLoading('生成中');
        let qrPath = "http://www.baidu.com";
        let strDesc = '这是描述';
        let template = getGenerateTemplate(strList, strDesc, qrPath);
        this.setData({
            template: template
        });
    },

    // 图片生成失败
    onImgErr(e) {
        wx.hideLoading();
        wx.showToast({
            title: '生成图片失败'
        });
    },

    // 图片生成成功-保存临时路径-判断是预览还是保存-执行下一步操作
    onImgOK(e) {
        toast.hideLoading();
        this._saveImg(e.detail.path)
    },

    // 执行保存图片 如果拒绝授权 弹出提示
    _saveImg(path) {
        let that = this;
        toast.showLoading('正在保存...');

        wx.saveImageToPhotosAlbum({
            filePath: path,
            success: (res) => {
                toast.hideLoading();
                toast.showLoadingToast('保存成功');
                //TODO 步骤2 将图片与清单字符串列表上传至服务器
            },
            fail: (res) => {
                toast.hideLoading();
                wx.getSetting({
                    success: res => {
                        let authSetting = res.authSetting;
                        if (!authSetting['scope.writePhotosAlbum']) {
                            // 如果拒绝授权
                            that._showPermissionDialog();
                        }
                    }
                });
            }
        })
    },

    _showPermissionDialog() {
        wx.showModal({
            title: '保存卡片需要相册授权',
            content: '请点击“去设置”并允许使用“相册”',
            cancelColor: '#B2B2B2',
            confirmText: "去设置",
            success: function (res) {
                if (res.confirm) {
                    // 跳转至微信小程序设置
                    wx.openSetting({
                        success: (res) => {
                        }
                    })
                } else {

                }
            }
        });
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
