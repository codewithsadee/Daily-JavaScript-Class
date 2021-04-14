function changeValue(a) {
  console.log(a); //2: print 20;
  a = 10;
  console.log(a); //3: print 10;
  return a;
}
var a = 20;
console.log(a); //1: print 20;

changeValue(a);
console.log(a); //4: print 10;