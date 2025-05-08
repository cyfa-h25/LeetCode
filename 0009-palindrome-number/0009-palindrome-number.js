/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
        
  if(x < 0)   {
      return false; // 정수가 음수면 false를 반환
  }
  
  const str = String(x);
  const mapfn = (arg) => Number(arg);
  const newArr = str.split('').map(mapfn);
  const end = newArr.length -1;
  if(end === 0)
  {
      return true; //배열의 길이가 1이면 항상 True 값을 반환
  }
  
  if( newArr[end] === 0){
      return false;
  }

  while(newArr.length > 1){

        let a = newArr.shift();
        let b = newArr.pop(); 
        if(a !== b){
            return false
        }
    }
  
  return true;
};