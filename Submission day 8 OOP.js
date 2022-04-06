//--------------------------- OOP Task Submission------------------------------------

class Movie {
    constructor(title, studio, rating = 'PG'){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(){
       return moviesArray.filter((film) => film.rating == 'PG');
    }
}

const casinoRoyale = new Movie('Casino Royale', 'Eon Productions', 'PG13');
// console.log(casinoRoyale);

const psycho = new Movie('Psycho', 'Paramount');
console.log(psycho);

// -------------------------------class for Person------------------------------------

class Person {
    constructor(name, age, height, weight, city){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.city = city;
    }
}

class UberRide {
    constructor(distance, rate = 14.7) {
        this.distance = distance;
        this.rate = rate
    }
  
    getPrice() {
        return this.distance * this.rate;
    }

}


const ride = new UberRide(100);
console.log(ride.getPrice(100));
