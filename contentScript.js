var logout = document.querySelector(".logoutButton");
if(logout){
    logout.addEventListener("click", function(){
        chrome.extension.sendRequest({
            action:"clear"
        });
    });
}

