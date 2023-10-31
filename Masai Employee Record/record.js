let myForm = document.querySelector('form');
let inpName = document.getElementById('name');
let inpEmployee = document.getElementById('employeeID');
let inpDepartment = document.getElementById('department');
let inpExp = document.getElementById('exp');
let inpEmail = document.getElementById('email');
let inpMob = document.getElementById('mbl');
let tbody = document.querySelector('tbody')

let Alldata = [];

myForm.addEventListener('submit',function(e){
    e.preventDefault();

    
  let Data = {};
  Data.pname = inpName.value;
  Data.pemployee = inpEmployee.value;
  Data.pdepartment = inpDepartment.value;
  Data.pexp = inpExp.value;
  Data.pemail =inpEmail.value;
  Data.pmob = inpMob.value;
 tbody.innerHTML = null;

  Alldata.push(Data)

  Alldata.forEach((ele) =>{
    let row = document.createElement('tr');
    let td1 = document.createElement("td");
    td1.innerText = ele.pname;
    let td2 = document.createElement('td');
    td2.innerText = ele.pemployee;
    let td3 = document.createElement('td');
    td3.innerText = ele.pdepartment;
    let td4 = document.createElement("td");
    td4.innerText = ele.pexp;
    let td5 = document.createElement('td');
    td5.innerText = ele.pemail;
    let td6 = document.createElement('td');
    td6.innerText = ele.pmob;
    let td7 = document.createElement('td');
    if (Data.pexp > 5) {
      td7.innerText = "Senior";
    }
    else if(Data.pexp >= 2 && Data.pexp <= 5 ) {
      td7.innerText = "Junior";
    }
    else if(Data.pexp <= 1){
      td7.innerText = "Fresher";
    }
    let td8 = document.createElement('tr');
    let deleteButton = document.createElement('button');
    td8.textContent = "Delete";
  td8.addEventListener('click',function(){
    
    row.remove();
    

  });
    row.append(td1,td2,td3,td4,td5,td6,td7,td8);
    tbody.append(row);
    console.log(row)
    


  });
});


 