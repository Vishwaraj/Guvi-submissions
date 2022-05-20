let jsonArr = [
  {
    car: "Virtus",
    brand: "VW",
  },
  {
    car: "Brezza",
    brand: "Maruti Suzuki",
  },
  {
    car: "Tiago",
    brand: "Tata",
  },
  {
    car: "Creta",
    brand: "Hyundai",
  },
];

// for of loop
for(var obj of jsonArr) {
    console.log(obj);
}

// for...in loop
for(var objs in jsonArr) {
    console.log(objs);
}

// regular for loop - doesn't work with array of objects.
    for(var i; i < jsonArr.length; i++) {
        console.log(jsonArr[i]);
    }   

// forEach method
jsonArr.forEach((obj) => {
    console.log(obj);
});


// my resume in json format 

let myResume = {
    name: 'Vishwaraj Kamble',
    age: 25,
    qualification: 'BE Civil',
    experience: 'Business Development Executive',
    skills: ['JS', 'HTML', 'CSS'],
    openTo: 'Full Stack Developer'
};

console.log(myResume);
