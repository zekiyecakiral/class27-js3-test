// VERSION 2

/*
1. 
a) Implement the following JavaScript library: https://www.chartjs.org/
- Get a Bar chart working
- You may use the example data from the docs
b) Explain in 100 words or less your approach for implementing the library
*/

// Answers....

//a)
// I got the following example from chartjs web page

let ctx = document.getElementById("myChart");
let myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

// b)
// To include a library in my application I added a <script> element to
// my <body> element with the src attribute referencing the URL

/*
2.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Takes as an argument an array of objects
- Outputs the details of both books into the DOM 
- Creates an unordered list for each book
Use the following array of objects:
*/

const books = [
  {
    bookName: "The Nature of Software Development",
    author: "Ron Jeffries",
    coverURL:
      "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png",
  },
  {
    bookName: "Clean Code",
    author: "Robert Cecil Martin",
    coverURL:
      "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg",
  },
  {
    bookName: "Refactoring",
    author: "Kent Beck & Martin Fowler",
    coverURL:
      "https://s.s-bol.com/imgbase0/imagebase3/large/FC/3/0/2/0/9200000005430203.jpg",
  },
];

function bookList() {
  const ul = document.createElement("ul");
  ul.style.display = "flex";
  ul.style.padding = "20px";
  ul.style.margin = "10px";
  ul.style.listStyleType = "none";
  ul.style.width = "calc(100% - 41px);";

  books.forEach((item) => {
    {
      const li = document.createElement("li");
      li.style.padding = "10px";
      li.style.margin = "10px";

      const ptag = document.createElement("p");
      ptag.innerHTML = item.bookName;

      li.appendChild(ptag);

      const liImg = document.createElement("img");
      liImg.src = item.coverURL;
      liImg.style.width = "200px";
      liImg.style.height = "250px";
      li.appendChild(liImg);

      ul.appendChild(li);
    }
  });

  document.body.appendChild(ul);
}

bookList();

/* 
  3. 
  Answer the following questions:
  - What is an Application Programming Interface (API)? 
  - How does this relate to your HackYourRepo project?
  Explain each in 200 words or less. 
  */
// Application Programming Interface  is a software intermediary that allows two applications to talk to each other
// we have learned xmlHttpRequest for making api call in the first week.
// and then we have learned fetch() and it's the modern way to make API calls.
// If I want to make a API call, I use fetch()

/*
  4.
  Write a function that:
  - Makes an API call using the Fetch API
  - Uses the following URL: https://jsonplaceholder.typicode.com/users
  - Make use of async/await syntax
  - Displays the "name", "email" and "city" of the first person inside an unordered list
  - Makes use of async/await
  */

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
async function getUserAsync(endPoint) {
  let response = await fetch(endPoint);
  return response.json();
}

getUserAsync(USERS_URL).then((response) => {
  console.log(response);

  response.forEach((element) => {
    const ul = document.createElement("ul");

    const name = document.createElement("li");
    name.innerHTML = `Name : ${element.name}`;
    ul.appendChild(name);

    const email = document.createElement("li");
    email.innerHTML = `Email : ${element.email}`;
    ul.appendChild(email);

    const city = document.createElement("li");
    city.innerHTML = `City  : ${element.address.city}`;
    ul.appendChild(city);

    document.body.appendChild(ul);
  });
});

getUserAsync(USERS_URL);

/*
  5.
  a) Create a class, called Animal, that includes:
  - A constructor method
  - "type", "color", "size" properties
  - 1 additional method, called "getType", which returns the type
  b) Instantiate the class, and give it the name and attributes of a random animal
  c) Explain how this class relates Object-Oriented Programming (OOP) in 100 words or less
  */

class Animal {
  constructor(type, color, size) {
    this.type = type;
    this.color = color;
    this.size = size;
  }
  get getType() {
    return this.type;
  }
}

let animal = new Animal("Dog", "White", "Big");

//c)
//In OOP, a class is a blueprint for creating objects
//  I define construtor and initialize objects and their features.
// I used keywords which is  class,get, new
// new keyword approach does the same thing as Object.create()

/*
  6.
  Write a JavaScript function that:
  - Accepts a string of 4 words (all lowercase letters) as an argument
  - Converts the first letter of each word of the string in upper case.
    
    Example: 'the quick brown fox'
    Expected Output: 'The Quick Brown Fox '
  */

function convertFirtLetterUpper(letter = "") {
  return letter
    .split(" ")
    .map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    })
    .join(" ");
}
const result = convertFirtLetterUpper("the quick brown fox");
console.log(result);
