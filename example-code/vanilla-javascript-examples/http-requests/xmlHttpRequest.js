function reqListener () {
    console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("progress", ()=>{console.log('onUpdateProgress')});
oReq.addEventListener("load", ()=>{console.log('onTransferComplete')});
oReq.addEventListener("error", ()=>{console.log('transferFailed')});
oReq.addEventListener("abort", ()=>{console.log('transferCanceled')});

oReq.addEventListener("load", reqListener);

oReq.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
oReq.send();

