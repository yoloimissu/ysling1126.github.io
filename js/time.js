var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');
var h1 = document.getElementById('h1');

function time() {
    // 获取时间
    var now = new Date();

    var hh = now.getHours();

    var mm = now.getMinutes();

    var ss = now.getSeconds();

    // 换算角度
    // 小时
    var hhDeg = hh * 30;
    //分
    var mmDeg = mm * 6;
    // 秒
    var ssDeg = ss * 6;
    // 指针动起来

    second.style.transform = 'rotate(' + ssDeg + 'deg)';
    minute.style.transform = 'rotate(' + mmDeg + 'deg)';

    hhDeg += Math.floor(mm / 12) * 6;

    hour.style.transform = 'rotate(' + hhDeg + 'deg)';

    h1.innerText = now.toLocaleString();

};
// 先调用函数
time();
setInterval(time, 1000);