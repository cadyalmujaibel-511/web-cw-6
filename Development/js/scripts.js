let web=['menawar', 'nancy','moudhi', 'hussain','rahaf']
          function logger(web){
              for(let i = 0 ; i< web.lenth; i++){
                  console.log(web[i]);
              }
          }
          logger(web);
          let temps1 =[20 , 30 , 40 , 50 , 60]
          let value = 40
          temps=[];
          function hottestdays(array , TH , empty_array)
          {
          for(let i = 0 ; i<array.lenth; i++ )
          if(array[i] > TH){
          empty_array.push(array[i]);
          }
          }
          
          
          console.log(hottestdaystemps1, value,temps2);
          
          let books=[
              {
                  name:"book1",
                  ID:1,
              },
              {
                  name:"book2",
                  ID:2,
              },
              {
                  name:"book3",
                  ID:3,
              },
              {
                  name:"book4",
                  ID:4,
              },
          ];
          function getBookById(){
              let holder= false;
              let bookID= prompt("ادخل رقم الكتاب")
              for(let i = 0; i< books.lenth; i++){
                  if(books[i].ID==book);
              }
              function getBookById(){
                  let holder = false;
                  let bookID = prompt("إدخل رقم الكتاب")
                      for (let i = 0; i< books.length; i++){
                          if (books[i].ID == bookID) {
                              // return books[i];
                              console.log("وجدته")
                          holder = true ;
                          } 
                      }
                          if (holder == false){
                              console.log("error");
                  
                      }
                  }
          
          
           let userinput="";
           let output=[];
           userinput = prompt("السلعة");
          
          
          while(userinput != "انتهيت");
           let price = prompt("السعر");
           let quantity = prompt ("الكمية");
          
          
          
           
          let object = {
              name= userinput,
              price= price,
              quantity:quantity,
          
          };
          
          output.push(object);
          
          userInput = prompt("السلعة")
           for (let i = 0; i < output.lenth ; i++) {
          
              console.log(
                  output[i].quantity +
                  +
                  output[i].name +
                  
                  +output[i].quantity * output[i].price);
          totalprice =+ output[i].quantity * output[i].price
              }
          
          console.log(totalprice);