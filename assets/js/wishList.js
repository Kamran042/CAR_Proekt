const employeeList = document.querySelector('#employeeList')

let wishList = []
wishList = JSON.parse(localStorage.getItem('wishList'))

function  renderUI(list){
    let innerHTML = ""
    for (let i = 0; i < list.length; i++) {
        innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${list[i].mark}</td>
            <td>${list[i].ban}</td>
            <td>${list[i].oil}</td>
            <td>${list[i].gear}</td>
            <td>${list[i].capasity}</td>
            <td>${list[i].price} AZN</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteCard(${list[i].id})">Delete</button>
            </td>
        </tr>
        `        
    }
  employeeList.innerHTML = innerHTML;
}

renderUI(wishList)

function deleteCard(id){
    const checkCart = wishList.find(data => data.id == id)
    const checkCartIndex = wishList.indexOf(checkCart)
    wishList.splice(checkCartIndex,1)
    localStorage.setItem('wishList',JSON.stringify(wishList))
    renderUI(wishList)
}