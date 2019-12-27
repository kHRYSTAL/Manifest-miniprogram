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

/**
 * 对日期格式化
 */
exports.dateFormat = (fmt, date) => {
    let ret;
    let opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
    }
    return fmt;
};
