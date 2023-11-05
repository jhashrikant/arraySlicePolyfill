Array.prototype.mySlice = function(start, end){
  let newArray = [];

  if (start && end === undefined) end = this.length;

  if (start === undefined && end === undefined){
    start = 0;
    end = this.length
  }

  if (start && start < 0) start = start + this.length;
  if (end && end < 0) end = end + this.length
  
  for (let i = start; i < end; i++) {
    let currentelement = this[i];
    newArray.push(currentelement)
  } 
  return newArray
}
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let start = 2
let end = 4

const res = animals.mySlice(start , end)
console.log(res);
