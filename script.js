// Setup Varibles
var btnDom = document.querySelector('#product_btn')
var containerDom = document.querySelector('#product_container')
var inputDom = document.querySelector('#product_input')

btnDom.addEventListener('click', addItem)

function addItem(){
  var idL =  data.length ? data[data.length - 1].id +1  : 1
  if(inputDom.value == ""){alert('Enter Your product')}else{
    data.push({id : idL, name : inputDom.value });

    newData = data[data.length - 1].name
    containerDom.innerHTML +=`
    <div class="boxTitle">
    <h4> ${newData}</h4>
    <button onclick="deletitem(${idL})">delete</button>
    </div>
    `;
  
    inputDom.value = ''
  }
  }
 



var data = [
  {id: 1, name:'comment1', desc:'bla bla bla'},
  {id: 2, name:'comment2', desc:'bla bla bla'},
  {id: 3, name:'comment3', desc:'bla bla bla'},
  {id: 4, name:'comment4', desc:'bla bla bla'},
  {id: 5, name:'comment5', desc:'bla bla bla'}
]

function reqData(items){
  items.forEach(function(item){
    containerDom.innerHTML += 
    `
    <div  class="boxTitle">
    <h4>${item.name}</h4>
    <button onclick="deletitem(${item.id})">delete</button>
    </div>
    `
 })

}

window.onload = function(){
  reqData(data)
}


function deletitem(id){
var index = data.map(function(i){
  return i.id
})
.indexOf(id)

if(index !== -1){
  data.splice(index, 1)
  UpdateData()
}
}


var UpdateData  = function(){
  containerDom.innerHTML = ""
  reqData(data)

}