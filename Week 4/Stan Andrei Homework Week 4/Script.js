console.log("It is working");
console.log("Cerinta 1");
var x=1;

while (x<21)
{
    console.log(x);
    x=x+1;
}

console.log("Cerinta 2");
var y=1;

while (y<21)
{
    if(y%2===0)
      console.log(y);
    y=y+1;
}

console.log("Cerinta 3");
var z=[34,23,54,21,43,35];
console.log("The array is", z);
var suma=0;

for (var i=0; i<z.length; i++)
{
    suma=suma+z[i];
}

console.log("The sum is", suma);

console.log("Cerinta 4");
var t=[65, 34, 89, 32, 13, 8];
console.log("The array is", t);
var max=0;

for (var j=0; j<t.length; j++)
{
    if(t[j]>max)
    max=t[j];
}

console.log("The maximum is", max);

console.log("Cerinta 5");
var v=[70,24,70,45,70,5];
console.log("The array is", v);
var q=70;
console.log("The number is", q);
count=0;

for(var k=0; k<v.length; k++)
{
    if(v[k]===q)
    count=count+1;
}
console.log("The number apears", count, "times");