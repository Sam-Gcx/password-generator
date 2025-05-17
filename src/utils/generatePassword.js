export const generatePassword=({length, useUppercase, useLowercase, useNumbers, useSymbols})=>{
  const upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower='abcdefghijklmnopqrstuvwxyz';
  const numbers='0123456789';
  const symbols='!@#$%^&*()_+-=[]{}|;:\'",.<>/?`~\\';
  let chars='';
  if(useUppercase) chars += upper;
  if(useLowercase) chars += lower;
  if(useNumbers) chars += numbers;
  if(useSymbols) chars += symbols;

  if(chars.length===0) return '';
  let password = ''
  for(let i=0; i<length; i++){
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password

}