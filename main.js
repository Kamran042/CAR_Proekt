const submitBtn = document.querySelector("#btnAdd");
const form = document.querySelector("#form");

const mark = document.querySelector("#mark");
const ban = document.querySelector("#ban");
const oil = document.querySelector("#oil");
const gear = document.querySelector("#gear");
const capasity = document.querySelector("#capasity");
const price = document.querySelector("#price");
const image = document.querySelector("#img");
const btnEdit = document.querySelector("#btnEdit");

const employeeList = document.querySelector("#employeeList");

const employees = []
let static = []
let id = 0


class Employee{
    constructor(mark,ban,image,oil,gear,capasity,price){
        this.id = id
        this.mark = mark
        this.ban = ban
        this.img= image
        this.oil = oil
        this.gear = gear
        this.capasity = capasity
        this.price = price 
        id++
    }
}

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const {markVal,banVal,imgVal,oilVal,gearVal,capasityVal,priceVal} = getDataFromUser()
    if(markVal && imgVal && banVal && oilVal && gearVal && capasityVal && priceVal && imgVal  ){
        createEmployee(markVal,banVal,imgVal,oilVal,gearVal,capasityVal,priceVal, imgVal)
        resetForm()
    }else{
        alert('Inputlari doldurun')
    }
    console.log(employees);
    localStorage.setItem('employees',JSON.stringify(employees))
    console.log(employees)
    
})

const getDataFromUser = () => {
    let markVal = mark.value
    let banVal = ban.value
    let imgVal= image.value
    let oilVal = oil.value
    let gearVal = gear.value
    let capasityVal = capasity.value
    let priceVal = price.value
    

    return {markVal,banVal,oilVal,gearVal,capasityVal,priceVal, imgVal}
}

function createEmployee(mark,ban,image,oil,gear,capasity,price, img){
    const newEmployee = new Employee(mark,ban,image,oil,gear,capasity,price,img)
    employees.push(newEmployee)
    // renderUI(employees)
    static = [...employees]

}

function deleteEmployee(id){
    const target = employees.find(x => x.id == id)
    const indexOfTArget = employees.indexOf(target)
    employees.splice(indexOfTArget,1)
    renderUI(employees)
}
 


function resetForm() {
    mark.value = "";
    ban.value = "";
    oil.value = "";
    gear.value = "";
    capasity.value = "";
    price.value = "";
    image.value="";
}









ewfweferfwefwefwefwefweewe
