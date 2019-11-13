let getButtonRef = document.getElementsByTagName('button')[0];
getButtonRef.addEventListener('click', getSomeData);

function getSomeData(){
  let xhr = new XMLHttpRequest();
						
  // (<method>, <url>, <if asynchronos>)
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
  
  // Sets how to handle the response
  xhr.onload = function(){
    if (this.readyState == 4 && this.status == 200) {
      console.log('response', this.responseText);
      let parsedResponse = JSON.parse(this.responseText);
      let title = parsedResponse.title;
      console.log('title', title);
    }
  };

  // Sends the request
  xhr.send();
}


// ------------------------------------------------------------------------------------------------------------


let sendButtonRef = document.getElementsByTagName('button')[1];
sendButtonRef.addEventListener('click', sendSomeData);

function sendSomeData(){
  let url = "https://jsonplaceholder.typicode.com/todos";

	let data = {
    userId: 1,
    id: 15,
    title: 'some title',
    'completed': true
  };

	let json = JSON.stringify(data);

	let xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
	xhr.onload = function () {
		if (xhr.readyState == 4 && xhr.status == "201") {
			console.log('status', xhr.status);
			console.log('response', xhr.responseText);
		} else {
			console.error('fail');
		}
	}
	xhr.send(json);
}


