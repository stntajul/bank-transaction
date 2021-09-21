// const loginBtn=document.getElementById('loginId');
// loginBtn.addEventListener('click',function(event){
//     console.log('click marse');
// })

  //login button event handler
  const loginBtn=document.getElementById('loginId');
  loginBtn.addEventListener('click',function(event){
  //console.log('clicked');
  const loginArea=document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea=document.getElementById('transaction-area');
  transactionArea.style.display='block';
})
//deposit button event handler
const depositBtn=document.getElementById('deposit-btn');
depositBtn.addEventListener('click',function(){
  const depositAmount=document.getElementById('depositAmount').value;
  const amount=parseFloat(depositAmount);
  updateSpanText('currentDeposit',amount);
  document.getElementById('depositAmount').value='';
  
  updateSpanText('currentBalance',amount);
  

})
const withdrawBtn=document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click',function(event){
    const withdrawAmount=document.getElementById('withdrawAmountInput').value;
    const availableBalance=parseFloat(document.getElementById('currentBalance').innerText);
    let prevWidtdrawBalance=parseFloat(document.getElementById('widthdraw-amount').innerText);
    //console.log(availableBalance);
    //console.log(withdrawAmount);
    let totalWithdrawAmount=document.getElementById('widthdraw-amount').innerText;
  
    document.getElementById('currentBalance').innerText=availableBalance-withdrawAmount;
    
    document.getElementById('widthdraw-amount').innerHTML=withdrawAmount+prevWidtdrawBalance;

    console.log(totalWithdrawAmount);
    document.getElementById('withdrawAmountInput').value='';
    
    

   
})
function updateSpanText(id,totalAmount){
 
  const current=document.getElementById(id).innerText;

  
  const newBalance=totalAmount+(parseFloat(current));
 
  document.getElementById(id).innerText=newBalance;
  


}