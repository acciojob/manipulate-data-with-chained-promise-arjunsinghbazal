//your JS code here. If required.
function manupulate(array){
	return new Promise((resolve)=>{
		setTimeout(()=>{
         resolve(array);
      },3000);
	})
   .then((array)=>{
     const filterarray = array.filter((num)=>{num%2===0});
     setTimeout(()=>{
      document.getElementById('output').innerHTML=filterarray.join(, );
     },1000);
   })
   .then((filterarray)=>{
      const mult = array.map((num)=>{if(num%2===0){num*2}});
      setTimeout(()=>{
         document.getElementById('output').innerHTML=mult.join(, );
      },2000);
   })
   
   
}
let arr = [1,2,3,4]
manupulate(arr);