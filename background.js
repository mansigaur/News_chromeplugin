// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse){
//         var url = request.activeUrl;
//         var html = request.htmlCode;
//         const body = { url: url, html_data: html }

//         fetch('http://localhost/validate', {
//         method: 'POST',
//         body: JSON.stringify(body),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         }
//         })
//         .then(response => response.json())
//         .then(json => {

//             var views = chrome.extension.getViews({
//                 type: "popup"
//             });
//             var paragraph = views[0].document.getElementById("url");
//             var text = views[0].document.createTextNode(url);
//             paragraph.appendChild(text);

//             var paragraph = views[0].document.getElementById("result");
//             var text = views[0].document.createTextNode(json['result']);
//             paragraph.appendChild(text);
            
//             var paragraph = views[0].document.getElementById("author");

//             if ('author' in json){
//                 var text = views[0].document.createTextNode(json['author']);
//             }
//             else {
//                 var text = views[0].document.createTextNode('Unknown');
//             }
//             paragraph.appendChild(text);

//             console.log(json);
//         });

//         sendResponse({farewell: 'Got the URL and Source Code, thanks!!'});
// });



    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            var url = request.activeUrl;
            var html = request.htmlCode;
            const body = { url: url, html_data: html }
    
                chrome.runtime.sendMessage({
                    msg: "Request_Data", 
                    body: body
                });

        });
