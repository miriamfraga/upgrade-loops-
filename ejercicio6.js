const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ];
    // al revés 
   //  let newToys =[];
   // for (let i=toys.length - 1; i >=0; i--) {
      // let toy = toys[i];
      // if (toy.name.includes('gato')) {
         // toys.splice(i, 1);
      // //  newToys.push(toy);
      // }
   // } console.log(toys);
   let newToys =[];
   for (let i=0; i <toys.length; i++) {
      let toy = toys[i];
      if (!toy.name.includes('gato')) {
         newToys.push(toy);
       
         //  toys.splice(toy, i);
      } 
       
      }
 console.log(newToys);


   // let newToys =[];
   // con array al derecho
// for (let i=0; i <toys.length; i++) {
   // let toy = toys[i];
   // if (toy.name.includes('gato')) {
      //  toys.splice(toy, i);
   // } 
    
// } console.log(toys);