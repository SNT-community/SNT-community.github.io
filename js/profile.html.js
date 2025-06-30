function loadProfile() {
    var username = getCookie("username");
    if(username == ""){
        username = "未登录"
    }
    document.getElementById("usernameShow").innerHTML += username;
}