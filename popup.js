function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.msg === "Request_Data") {
            //  To do something
            console.log(request.body)

            fetch('http://localhost/validate', {
                method: 'POST',
                body: JSON.stringify(request.body),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            }).then(response => response.json())
                .then(json => {
                    var paragraph = document.getElementById("url");

                    if ('url' in json) {
                        var text = document.createTextNode(json['url']);
                    }
                    else {
                        var text = document.createTextNode(request.body['url']);
                    }
                    removeAllChildNodes(paragraph)
                    paragraph.appendChild(text);

                    var paragraph = document.getElementById("result");
                    var text = document.createTextNode(json['result']);
                    removeAllChildNodes(paragraph)
                    paragraph.appendChild(text);

                    var paragraph = document.getElementById("author");

                    if ('author_name' in json) {
                        var text = document.createTextNode(json['author_name']);
                    }
                    else {
                        var text = document.createTextNode('Unknown');
                    }
                    removeAllChildNodes(paragraph)
                    paragraph.appendChild(text);

                    var paragraph = document.getElementById("news_channel");

                    if ('news_channel' in json) {
                        var text = document.createTextNode(json['news_channel']);
                    }
                    else {
                        var text = document.createTextNode('Unknown');
                    }
                    removeAllChildNodes(paragraph)
                    paragraph.appendChild(text);

                    document.getElementById("refreshcontainer").classList.add("visually-hidden");
                    document.getElementById("all_data").classList.remove("visually-hidden");
                });
        }
    }
);

window.onload = function(){
document.getElementById("reloadBtn").onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
    });
}}
