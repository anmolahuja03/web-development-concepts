// Methods

// Filter Method

const students = [
    {
        name : "Student 1"
        marks : 60
    },
    {
        name : "Student 2"
        marks : 34
    },
    {
        name : "Student 3"
        marks : 45
    }
];

const failed = students.filter((student) => {
    return student.marks < 45;
    // if(student.marks < 45) {
    //     return true;
    // }
    // return false;
});

// same as above
const failed = students.filter((student) => student.marks < 45);;

console.log(failed);

// Sort Method 

const names = ['John', 'Jane', 'Anmol', 'Bhawna'];
names.sort();

console.log(names);

// Splice Method

const names = ['John', 'Jane', 'Anmol', 'Bhawna'];
names.splice(2, 1);   // first param - start index, second param - no of items to be deleted

console.log(names);

// Find Method

const users = [
    {
        name : 'xyz',
        id : 1 
    },
    {
        name : 'pqr',
        id : 3
    }
];

users.find((user) => {
    if(user.id === 2) {
        return true;
    }
    return false;
});

// Map Method

const users = [
    {
        fname = 'Anmol',
        lname = 'Ahuja'
    },
    {
        fname = 'Yash',
        lname = 'Ahuja'
    }
];


const final = users.map((user) => {
    return 'hello';
});

console.log(final);
// returns hello 2 times as there are 2 items in array


const final = users.map((user) => {
    return {
        //fullname : user.fname + ' ' + user.lname
        fullname : `${user.fname} ${user.lname}`
    };
});


// Reduce Method

const movies = [
    {
        name : "ABCD",
        budget : 5000
    },
    {
        name : "EFGH",
        budget : 1000
    }
];

let total = 0;
movies.forEach((movie) => {
    total = total + movie.budget;
});

console.log(total); //6000

// Using reduce -
const tot = movies.reduce((acc, movie) => {
    acc = acc + movie.budget;
    return acc;
}, 0);

console.log(tot);


//Indexof

const admins = [2, 1, 5];

const user = {
    namee : 'ABC',
    id : 5
}

console.log(admins.indexOf(user.id));  // checks is id present in admins
// returns index of 5, if id not present returns -1


// includes - similar to indexOf 
console.log(admins.includes(user.id));