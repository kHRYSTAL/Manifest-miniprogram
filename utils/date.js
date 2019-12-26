/**
 * 对时间-秒做格式化处理，输入一定格式的时间字符串
 */
exports.formatSecond = (sec, useCn = false) => {
    let second = parseInt(sec);
    if (Number.isNaN(second)) {
        throw new Error('参数不能被转换成有效的整数');
    }
    let str = '';
    let langMap = {
        default: {
            h: ':',
            m: ':',
            s: ''
        },
        cn: {
            h: '小时',
            m: '分',
            s: '秒'
        }
    };
    let clo = useCn ? langMap.cn : langMap.default;
    if (second) {
        let h = Math.floor(second / 3600);
        let m = Math.floor(second % 3600 / 60);
        let s = Math.floor(second % 60);
        str = `${h ? h + clo.h : ''}${m < 10 && !useCn ? '0' + m : m}${clo.m}${s < 10 && !useCn ? '0' + s : s}${clo.s}`;
    } else {
        str = `00${clo.m}00${clo.s}`;
    }
    return str;
};
