//Promises -Promise is an object which has 3 states
// 1. resolve ; 2.rejct ; 3.pending

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Fetched!!!");
    }, 5000);
  });
}

// getData()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });


//Instead of writing 'then' and 'catch'on getData() web can use asyn just to make it more easy and readable


async function handleData(){

    try {
        const result = await getData();
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }
}

handleData();