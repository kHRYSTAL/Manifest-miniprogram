function downloadFile(url) {
    return new Promise((resolve, reject) => {
        wx.downloadFile({url: url, success: resolve, fail: reject});
    });
}


function saveFile(path) {
    return new Promise((resolve, reject) => {
        wx.saveFile({tempFilePath: path, success: resolve, fail: reject});
    });
}

function openDocument(obj) {
    wx.openDocument(obj);
}

function removeSavedFile(obj) {
    wx.removeSavedFile(obj);
}

function getSavedFileList() {
    return new Promise((resolve, reject) => {
        wx.getSavedFileList({success: resolve, fail: reject});
    });
}

module.exports = {
    downloadFile,
    saveFile,
    openDocument,
    removeSavedFile,
    getSavedFileList
};
