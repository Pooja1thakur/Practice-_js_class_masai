let orders = [
    "1: A",
    "2: B",
    "3: Cinku",
    "4: D",
    "5: E"
  ];

  let newOrders = ["6: F", "7: G", "8: H"];
  orders = newOrders.concat(orders);
 

  orders.length = orders.length - 2;
  //console.log(orders);


  for (let i = 0; i < orders.length; i++) {
    let parts = orders[i].split(": "); 
    let orderID = parts[0];
    let customerName = parts[1];
    console.log(`Processing OrderID ${orderID} for CustomerName ${customerName}`);
  }

  let longestNameCustomer = "";

for (let i = 0; i < orders.length; i++) {
  let customerName = orders[i].split(": ")[1]; 
  if (customerName.length > longestNameCustomer.length) {
    longestNameCustomer = customerName;
  }
}

console.log(`Customer with the longest name is: ${longestNameCustomer}`);

console.log("Final Unprocessed Orders): []");

  
