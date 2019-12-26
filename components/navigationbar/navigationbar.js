import {globalData} from "../../utils/global-data";

Component({
    options: {
        multipleSlots: true
    },
    properties: {
        backgroundColor: {
            type: String,
            value: 'rgba(0,0,0,0)'
        },
        title: {
            type: String,
            value: ''
        },
        hastop: {
            type: Boolean,
            value: false
        }
    },
    data: {},
    ready() {
        let statusBarHeight = globalData('statusBarHeight');
        let navBarHeight = globalData('navBarHeight');
        console.log('11111', statusBarHeight, navBarHeight)
        this.setData({
            statusBarHeight,
            navBarHeight
        })
    },
    methods: {
        back() {
            wx.navigateBack({
                delta: 1
            })
        }
    }
});
