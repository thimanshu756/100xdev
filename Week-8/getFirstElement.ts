interface User{
  name:string,
  age:number
}
type Users=User[];

  function getFirstElement(arr:number[]):number{
   return arr[0];
 }
let ans = getFirstElement([1,2,3]);

console.log(ans);
