/**  获取字符数，英文占1个中文占2个 */
function getLength(str) {
    let strlen = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 255) { // 非英文字符算2位
            strlen += 2;
        } else {
            strlen++;
        }
    }
    return strlen;
}

/** 判断是否是金额格式 保留至小数点后两位 */
function isMoney(money) {
    let reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    return reg.test(money);
}


module.exports = {
    getLength: getLength,
    isMoney: isMoney
};
