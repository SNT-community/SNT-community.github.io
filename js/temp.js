// document.head.innerHTML += '<script src="js/st cookie2.js"></script><script src="js/login.js"></script><link rel="stylesheet" href="css/top-bar.css">';
console.log("temp.js is loaded"); // 添加调试信息

// 创建并添加 st cookie2.js 脚本
var script1 = document.createElement('script');
script1.src = '//snt.838483.xyz/js/st cookie2.js';
script1.defer = true;
document.head.appendChild(script1);
console.log("st cookie2.js is added"); // 添加调试信息

// 创建并添加 login.js 脚本
var script2 = document.createElement('script');
script2.src = '//snt.838483.xyz/js/login.js';
script2.defer = true;
document.head.appendChild(script2);
console.log("login.js is added"); // 添加调试信息

// 创建并添加 top-bar.css 样式表
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '//snt.838483.xyz/css/top-bar.css';
document.head.appendChild(link);
console.log("top-bar.css is added"); // 添加调试信息

// 创建并添加 all.min.css 样式表
var link2 = document.createElement('link');
link2.rel = 'stylesheet';
link2.href = 'https://st.838483.xyz/stcdn/font-awesome/css/all.min.css';
document.head.appendChild(link2);
console.log("all.min.css is added"); // 添加调试信息

// 创建并添加 all.min.css 样式表
var link3 = document.createElement('link');
link3.rel = 'stylesheet';
link3.href = '//snt.838483.xyz/css/iconplus.css';
document.head.appendChild(link3);
console.log("iconplus.css is added"); // 添加调试信息

window.onload = function() {
    tempLoad();
}
function tempLoad(){
    document.body.innerHTML = `<div id="topBar"><div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;"><div style="display: flex;" onclick="location.href='index.html'"><h1 style="width: 65px;">SNT</h1><span>community</span></div></div><div style="position: relative;color:blue;text-align: right;top: -45%;width: 79%;"><a id="username">Login</a></div></div>`+document.body.innerHTML;
    loginLoad();
}