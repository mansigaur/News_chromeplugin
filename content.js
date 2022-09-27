// sending message

    chrome.runtime.sendMessage({
        activeUrl: document.location.href,
        htmlCode: document.body.outerHTML
        }, function(response){
            console.log('Working');
    });    
