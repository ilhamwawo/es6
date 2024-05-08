import logo from './logo.svg';
import './App.css';

function App() {

  // Assignment no 1
  const panjangString = (str) => console.log(str.length)
  panjangString('halo')

  const jumlah = (angka1,angka2) => console.log(angka1 + angka2)
  jumlah(2,1)

  
  const hitung = (a, b) => console.log((a + b) * c)
  let c = 5;
  hitung(1,2)

  // Assigment no 2
  class Point {
    constructor (x,y) {
      this.x = x;
      this.y = y;
    }
  }

  const sum = new Point(2,4)
  console.log(sum.x + sum.y)

  // Assignment no 3
  const inventory = [
    {type: 'machine', value: 5000},
    {type: 'machine', value: 650},
    {type: 'duck', value: 10},
    {type: 'furniture', value: 1200},
    {type: 'machine', value: 77}
  ]
  // console.log(inventory[0].value)

  function hitungTotal() {
    let total = 0
    for (const key in inventory) {
      total = total + inventory[key].value    
    }
    return total 
  }
  
  let hasil = hitungTotal()
  console.log(hasil)

    

//  Assignment no 4
  let arr = [1,4,5,6,7]
  console.log(arr[arr.length-1])

  
  function lastElement(arr) {
    let last = 0
    last = arr[arr.length-1]
    return last
  }
  
  let result = lastElement(arr)

  console.log(result)

  // Assignment no 5
  let companies = [ {name: 'Company 1', category: 'Finance', start: 1981, end: 2004},
  {name: 'Company 2', category: 'Retail', start: 1992, end: 2008},
  {name: 'Company 3', category: 'Auto', start: 1999, end: 2007},
  {name: 'Company 4', category: 'Retail', start: 1989, end: 2010},
  {name: 'Company 5', category: 'Technology', start: 2009, end: 2014}
  ]

  console.log(companies[0].category)

  companies.forEach(function(company){
    console.log(company.name)
  })

  companies.forEach(function(company){
    if (company.start > 1987) {
      console.log(company.name)
    }   
  })

  const retailCompanies = companies.filter((company) => company.category === 'Retail')
  console.log(retailCompanies)

  let resu = companies.sort((a,b) => a.end - b.end)
  console.log(resu)
  
  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  }

  person.address.street = "lalaland 13"
  
  console.log(person)

  // Assisgnment no 6

  const users = [
    {id: 1, name: 'Doni', city: 'denpasar', age: 35},
    {id: 2, name: 'Tono', city: 'gianyar', age: 46},
    {id: 3, name: 'Bento', city: 'surabaya', age: 22},
    {id: 4, name: 'Komang', city: 'jakarta', age: 16}
  ]

  // console.log(users[0].id)

  users.forEach(function(user){
    if (user.id === 2) {
      console.log(user)
    }
  })

  const mycity = users.map((user) => user.city)
  console.log(mycity)

  const adults = users.filter((user) => user.age > 18)
  console.log(adults)
  // users.forEach(function(user){
  //   let a = []
  //   a += user.city
    
  // })
  // console.log(a)





  return (
    <div className="App">
      <div>
        {adults.map((user)=>{
          return (
            <>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.city}</p>
            <p>{user.age}</p>
            </>
          )
        })}
      </div>
    </div>
  );
}

export default App;
