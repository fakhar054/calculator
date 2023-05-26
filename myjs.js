let mystring="";
let buttons=document.querySelectorAll(".button");

Array.from(buttons).forEach((button)=>{

    button.addEventListener('click',(e)=>{

        if(e.target.innerHTML == '='){
           mystring= eval(mystring);
           document.querySelector('input').value = mystring;
        }
        else if(e.target.innerHTML =='C'){
            mystring="";
            document.querySelector('input').value = mystring;

        }
        else{
        console.log(e.target);
        mystring = mystring + e.target.innerHTML;
        document.querySelector('input').value = mystring;
        console.log(mystring);
        }
    })

})