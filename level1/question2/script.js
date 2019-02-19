var myDom = document.createElement("div");
    myDom.setAttribute("class", "myDom");
    document.body.appendChild(myDom);

var content = fetch("https://jsonplaceholder.typicode.com/todos")
.then(function(result){
    return result.json()
})

.then(function(resultJSON){
    resultJSON.forEach(todoCard => {
      
    const mycard = document.createElement("div");
    mycard.setAttribute("class", "mycard"); 

    const h1 = document.createElement("h1");
    h1.textContent = "Task ID: " + todoCard.id;

    const p1 = document.createElement("p");
    p1.textContent = "Task reference: " + todoCard.userId; 

    const p2 = document.createElement("p"); 
    p2.textContent = "Description: " + todoCard.title; 

    const p3 = document.createElement("p");
    p3.textContent = "Reference: " + todoCard.completed; 

    myDom.appendChild(mycard);
    mycard.appendChild(h1);
    mycard.appendChild(p1);
    mycard.appendChild(p2);         
    mycard.appendChild(p3); 
      
});  

}); 