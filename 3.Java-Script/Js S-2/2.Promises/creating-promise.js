const cards = ["one", "two", "three"];

let item = "one";

createOrder(item)
  .then(function (orderId) {
    console.log(orderId);
    return orderId
  })
  .then( function(orderId){
    return proceedToPayment(orderId)
  })
  .then( function(status){
    console.log(status)
  } )
  .catch(function (err) {
    console.log(err.message);
  });



function validate(item) {
  return cards.includes(item);
}

function createOrder(item) {
  const promise = new Promise(function (resolve, reject) {
    if (!validate(item)) {
      const err = new Error("Item not found");
      reject(err);
    }

    //
    const orderId = 12345;

    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 1000);
    }
  });

  return promise;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Sucessfull");
  });
}
