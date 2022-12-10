const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ];
    for (var toy of toys) {
       
       if(toy.name.includes('gato'))
       console.log( toys.indexOf(toy) +  " tiene que ser eliminado");
   toys.splice(3,2);
       //    toys.splice(3,2);
    //    console.log(toy);
       console.log(toy);
    }
