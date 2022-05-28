// 1) Comparing two objects

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

if(obj1.name == obj2.name && obj1.age == obj2.age) {
    console.log(`Same : ${true}`);
} else {
    console.log(`Same : ${false}`);
}


// 2) XHR request for flags

const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");

    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        data.forEach((country) => {
            console.log(country.flags);
        });
    };

    xhr.send();
    
};

getData();

// 3) XHR request for name, region, sub-region, population

const newData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");

    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        data.forEach((country) => {
            console.log(`Name: ${country.name.common} | Region: ${country.region} | Sub-Region: ${country.subregion} | Population: ${country.population}`);
        })
    }

    xhr.send();
}

newData();
