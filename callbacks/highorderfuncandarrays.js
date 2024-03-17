const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//   for (let i=0; i<companies.length; i++){
//     console.log(companies[i])
//   }

//   // forEach

//   companies.forEach(function(company) {
//     console.log(company.name)
//   });

//   filter
//   let canDrink = [];
//   for(let i=0; i<ages.length; i++){
//     if(ages[i]>=21){
//         canDrink.push(ages[i]);
//     }
//   }

//   console.log(canDrink);

//   const canDrink1 = ages.filter(function(age){
//     if(age >= 21){
//     return true;
//     }
//     return false;
//   });

// //   console.log(canDrink1)
// //   console.log(5>14);
//   const canDrink3 = ages.filter(age => age >= 21)
//   console.log(canDrink3)

  // Filter retail company

//   const retailCompanies = companies.filter(function (company){
//     if (company.category === 'Retail'){
//         return true
//     }
//   });

//   console.log(retailCompanies)

// const retailCompanies1 = companies.filter(company => company.category === 'Retail');
// const retailCompanies1_0 = companies.filter(company => company['category'] === 'Retail');
// console.log(retailCompanies1)

// get 80's companies

// const eightysCompanies = companies.filter(company => company.start < 1990 && company.start >= 1980);
// console.log(JSON.stringify(eightysCompanies));

// // lasted 10 years
// const  lastedTenYears = companies.filter(company => ((company.end - company.start) >= 10));
// console.log(JSON.stringify(lastedTenYears));

// map

// const companyMapping = companies.map(function(company){
//     return company.name
// });
// console.log(companyMapping)

// const agesTest = ages.map(age => Math.sqrt(age))
// console.log(agesTest);

// sort 

// sortcompanies by start year

// const sortedCompanies = companies.sort(function(c1,c2){
//     if (c1.start > c2.start){
//         return true;
//     } else {
//         return false;
//     }
// });


// [5, 3, 4]

// [3, 4, 5]


// console.log(JSON.stringify(sortedCompanies));

// const sortedCompanies1 = companies.sort((a,b) => a.start > b.start ? 1 : -1);
// console.log(JSON.stringify(sortedCompanies1));

// // reduce

// const totalYears = companies.reduce(function(total,company){
//     return total + (company.end - company.start);
// }, 0);

// const totalYears1 = companies.reduce((total,company) => total + (company.end - company.start), 0);
// console.log(totalYears);

// combined methods
// this is a pipelinee
const combined = ages
    .map(age => age*2)
    .filter(age => age >= 40)
    .sort((a,b) => a - b)
    .reduce((a,b) => a+b, 0);

console.log(combined)