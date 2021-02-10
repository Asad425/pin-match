const generatePinBtn= document.getElementById('pinBtn');
generatePinBtn.addEventListener('click',function(){
    pinGenerator();
});

function pinGenerator(){
    var randomNmbr= Math.round(Math.random()*10000);
    console.log(randomNmbr);
    document.getElementById('pin-show').value=randomNmbr;
} 
function btnHandle(id){
    const inputValue=document.getElementById(id).innerText;
    document.getElementById('input-show').value=inputValue;
}