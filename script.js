 
 document.addEventListener('DOMContentLoaded', function(){


 
 
 // GRAB THE ELEMENTS FROM THE HTML 

 const mailBtn = document.getElementById('mailBtn');
 const modal= document.getElementById('contactModal');
 const closeBtn = document.getElementById('closeModal');


 // OPEN THE MODAL WHEN THE ENVELOP BUTTON IS CLICKED


 mailBtn.addEventListener('click', function(){
    modal.classList.add('show');
 })


 //CLOSE THE MODAL WHEN THE X IS CLICKED 


 closeBtn.addEventListener('click' , function(){
    modal.classList.remove('show');
 })


 //CLOSE THE MODAL IF THEY CLICK ON THE DARK BACKGROUND OUTSIDE THE CARD 
 
 
 window.addEventListener('click', function(event){
    if (event.target === modal) {
        modal.classList.remove('show');
    }
 })

});