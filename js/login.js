function loginLoad(){
    // alert("Login Page Loaded");
    getCookie("username")
    getCookie("token")
    if(getCookie("username")!= "" && getCookie("token")!= ""){
        document.getElementById("username").innerHTML = getCookie("username");
        document.getElementById("username").href = "profile.html";
    }else{
        document.getElementById("username").href="https://account.838483.xyz/login.html?authID=STS-SNTcommunity&callback="+btoa("https://snt.838483.xyz/login.html?from="+location.href.split("?")[0]+"&")
    }
}
