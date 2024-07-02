//Call back


function processData(data,error){
    if(error){
        console.error(error);
    }else{
        console.log(data);
    }
}

function fetchData(callback) {
  setTimeout(function payLoad() {
    let data = "PAYLOAD FETCHED";
    callback(data,'server error');
  }, 5000);
}

fetchData(processData);

