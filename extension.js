
let myLead = []
const inputEl = document.getElementById('input-el')
const saveEl = document.getElementById('input-btn')
const listEl = document.getElementById('list-el')
const delBtn = document.getElementById('del-btn')
const tabBtn = document.getElementById('tab-btn') 
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('value'))

//checking localstorage and rendering the value
if (leadsFromLocalStorage) {
	myLead = leadsFromLocalStorage
	renderLeads(myLead)
}


function renderLeads(theList) {
  listIten = ''
  for(let i = 0 ; i < theList.length ; i++){

	 listIten +=`
	 <li>
	    <a target= '_blank' href = ${theList[i]} >"  ${theList[i]} '</a>
	 </li>`}

     listEl.innerHTML = listIten
}



tabBtn.addEventListener('click', function(){

	chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
		console.log(tabs)
		myLead.push(tab[0].url)
	    localStorage.setItem('value',JSON.stringify(myLead))
	    renderLeads(myLead)
	})

})


saveEl.addEventListener("click",function(){
	
	myLead.push(inputEl.value)
	console.log(myLead)
	inputEl.value = ''
	localStorage.setItem('value',JSON.stringify(myLead))
	renderLeads(myLead)

})


delBtn.addEventListener('dblclick',function(){
	myLead = []
	localStorage.clear()
	renderLeads(myLead)
})


