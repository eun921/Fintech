let cars=["sonata","bmw","porter",100];

console.log(cars[0],cars[1],cars[2],cars[3]);
cars.push("test2");
console.log(cars);

for(let i=0;i<cars.length;i++){
    let car=cars[i];
    console.log(car);
}

for(car of cars){
    console.log(car);
}

cars.map((car) => {
    console.log(car);
});
