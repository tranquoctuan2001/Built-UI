const cars = ['BMW','Camry','Mercedes','Porsche']
function html([first , ...value],...rest){
   const html = rest.reduce(
   function(acc,cul){
   var a =  acc.concat(cul,value.shift());
    return a;
    },[first] )
   .filter( x => x && x !== true || x === 0)
   .join('');
   console.log(html)
}
var isSuccess = true;
html 
 `<h2>${isSuccess}</h2>
 <ul>
    ${cars.map((car) => `
    <li>${car}</li>`)}
</ul>`
