export function getGenerateTemplate(strList, strDesc, qrPath) {
    console.log(strList);
    return {
        "width": "750px",
        "height": "833px",
        "background": "#ffffff",
        "views": [
            {
                "type": "image",
                "url": "https://api.zhisland.com/impic/T1b5ETBsZv1R49Ip6K_o.jpeg",
                "css": {
                    "width": "750px",
                    "height": "833px",
                    "top": "0px",
                    "left": "0px",
                    "rotate": "0",
                    "borderRadius": "",
                    "borderWidth": "",
                    "borderColor": "#000000",
                    "shadow": "",
                    "mode": "scaleToFill"
                }
            },
            {
                "type": "text",
                "text": strList[0],
                "css": {
                    "color": "#000000",
                    "background": "rgba(0,0,0,0)",
                    "width": "260px",
                    "height": "42.89999999999999px",
                    "top": "174.16px",
                    "left": "356.9px",
                    "rotate": "5.270649592607957",
                    "borderRadius": "",
                    "borderWidth": "",
                    "borderColor": "#000000",
                    "shadow": "",
                    "padding": "0px",
                    "fontSize": "30px",
                    "fontWeight": "bold",
                    "maxLines": "2",
                    "lineHeight": "43.290000000000006px",
                    "textStyle": "fill",
                    "textDecoration": "none",
                    "fontFamily": "",
                    "textAlign": "left"
                }
            },
            {
                "type": "text",
                "text": strList[1],
                "css": {
                    "color": "#000000",
                    "background": "rgba(0,0,0,0)",
                    "width": "300.3223120755666px",
                    "height": "48.62px",
                    "top": "240.45px",
                    "left": "106.70000000000002px",
                    "rotate": "6.236807090713606",
                    "borderRadius": "",
                    "borderWidth": "",
                    "borderColor": "#000000",
                    "shadow": "",
                    "padding": "0px",
                    "fontSize": "34px",
                    "fontWeight": "bold",
                    "maxLines": "2",
                    "lineHeight": "49.06200000000001px",
                    "textStyle": "fill",
                    "textDecoration": "none",
                    "fontFamily": "",
                    "textAlign": "left"
                }
            },
            {
                "type": "text",
                "text": strList[2],
                "css": {
                    "color": "#000000",
                    "background": "rgba(0,0,0,0)",
                    "width": "230.12668861536278px",
                    "height": "35.74999999999999px",
                    "top": "368.62px",
                    "left": "370.91px",
                    "rotate": "6.1585455353047145",
                    "borderRadius": "",
                    "borderWidth": "",
                    "borderColor": "#000000",
                    "shadow": "",
                    "padding": "0px",
                    "fontSize": "25px",
                    "fontWeight": "bold",
                    "maxLines": "2",
                    "lineHeight": "36.07500000000001px",
                    "textStyle": "fill",
                    "textDecoration": "none",
                    "fontFamily": "",
                    "textAlign": "left"
                }
            },
            {
                "type": "text",
                "text": strList[3],
                "css": {
                    "color": "#000000",
                    "background": "rgba(0,0,0,0)",
                    "width": "235.93377029832956px",
                    "height": "34.32px",
                    "top": "399.75px",
                    "left": "86.90999999999998px",
                    "rotate": "5.589850048507454",
                    "borderRadius": "",
                    "borderWidth": "",
                    "borderColor": "#000000",
                    "shadow": "",
                    "padding": "0px",
                    "fontSize": "24px",
                    "fontWeight": "bold",
                    "maxLines": "2",
                    "lineHeight": "34.632000000000005px",
                    "textStyle": "fill",
                    "textDecoration": "none",
                    "fontFamily": "",
                    "textAlign": "left"
                }
            },
            {
                "type": "text",
                "text": strList[4],
                "css": {
                    "color": "#000000",
                    "background": "rgba(0,0,0,0)",
                    "width": "217.3373106723512px",
                    "height": "31.459999999999997px",
                    "top": "465.79px",
                    "left": "428.96px",
                    "rotate": "5.198222865902004",
                    "borderRadius": "",
                    "borderWidth": "",
                    "borderColor": "#000000",
                    "shadow": "",
                    "padding": "0px",
                    "fontSize": "22px",
                    "fontWeight": "bold",
                    "maxLines": "2",
                    "lineHeight": "31.746000000000006px",
                    "textStyle": "fill",
                    "textDecoration": "none",
                    "fontFamily": "",
                    "textAlign": "left"
                }
            },
            {
                "type": "text",
                "text": strList[5],
                "css": {
                    "color": "#000000",
                    "background": "rgba(0,0,0,0)",
                    "width": "226.46166288558845px",
                    "height": "28.599999999999994px",
                    "top": "524.31px",
                    "left": "178.94px",
                    "rotate": "5.665953453308689",
                    "borderRadius": "",
                    "borderWidth": "",
                    "borderColor": "#000000",
                    "shadow": "",
                    "padding": "0px",
                    "fontSize": "20px",
                    "fontWeight": "bold",
                    "maxLines": "2",
                    "lineHeight": "28.860000000000007px",
                    "textStyle": "fill",
                    "textDecoration": "none",
                    "fontFamily": "",
                    "textAlign": "left"
                }
            },
            {
                "type": "qrcode",
                "content": qrPath,
                "css": {
                    "color": "#000000",
                    "background": "#ffffff",
                    "width": "68.94312167487311px",
                    "height": "68.94312167487311px",
                    "top": "680.2px",
                    "left": "647.14px",
                    "rotate": "355.6861725788958",
                    "borderRadius": ""
                }
            },
            {
                "type": "text",
                "text": strDesc,
                "css": {
                    "color": "#000000",
                    "background": "rgba(0,0,0,0)",
                    "width": "475.58256424749084px",
                    "height": "42.89999999999999px",
                    "top": "619.62px",
                    "left": "134.85000000000002px",
                    "rotate": "357.3463067740992",
                    "borderRadius": "",
                    "borderWidth": "",
                    "borderColor": "#000000",
                    "shadow": "",
                    "padding": "0px",
                    "fontSize": "30px",
                    "fontWeight": "normal",
                    "maxLines": "2",
                    "lineHeight": "43.290000000000006px",
                    "textStyle": "fill",
                    "textDecoration": "none",
                    "fontFamily": "",
                    "textAlign": "center"
                }
            }
        ]
    };
}
