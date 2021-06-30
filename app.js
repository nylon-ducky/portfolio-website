
let posts = [];

function post() {
    

   //document.getElementById('guestBook').innerHTML = document.getElementById('name').value;
     
    let gb = document.getElementById('guestBook');
   
    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;
    
    let nm = name + message;
    posts.push(nm);
    
    gb.innerHTML = posts;
    /**/
   
}



