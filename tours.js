fetch("products.json")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let product of products){
      out += `
         <tr>
            <td>${product.title}</td>
            <td>${product.description}</td>
            <td>${product.price}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});


