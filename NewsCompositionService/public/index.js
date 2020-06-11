

 let page=document.getElementById("page");
 let submit=document.getElementById("submit-btn");
 let txtarea=document.getElementById("txt-area");
 
 submit.addEventListener("click",onClick);
 function onClick(){
     if ( txtarea.value.split(' ').join('') != "" ) {
        page.innerHTML =`<p>${txtarea.value}</p>`;
        // save content to data base
        fetch("/api/save-news", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                news: txtarea.value
            })
        }).then(
            res => {
                console.log(data);
            }
        );
        // call email service to send out the newsletter to all subscribers
     } else {

     }
 }
