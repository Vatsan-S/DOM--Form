function radio(event){
    event.preventDefault()
    let radioValue = document.querySelector('input[name="gender"]:checked').value;
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let address = document.getElementById("address").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let pincode = document.getElementById("pincode").value;
    let food = document.querySelectorAll('.foodcheck:checked');
    
    function checkValidation(food) {
        if(food.length > 1){
            let foodList = "";
            for(i=0;i<food.length;i++){
                foodList += food[i].value;
            }
            create(firstName, lastName, address,pincode, state, country,radioValue,foodList);
            document.getElementById("form").reset();
        }
        else{
            alert("You must choose atleast 2 food items");
        }
    }
    
    checkValidation(food);
    
}


function create(firstName, lastName, address, pincode, state, country, radioValue, food){
   let tableRow = document.createElement("tr");
   document.querySelector("#table>tbody").append(tableRow);

   let fsData = document.createElement("td");
   tableRow.append(fsData);
   fsData.innerHTML = firstName;

   let lsData = document.createElement("td");
   tableRow.append(lsData);
   lsData.innerHTML = lastName;

   let addressData = document.createElement("td");
   tableRow.append(addressData);
   addressData.innerHTML = address;

   let pinData = document.createElement("td");
   tableRow.append(pinData);
   pinData.innerHTML = pincode;

   let radiodata = document.createElement("td");
   tableRow.append(radiodata);
   radiodata.innerHTML = radioValue;

   let foodData = document.createElement("td");
   tableRow.append(foodData);
   foodData.innerHTML = food
   
//    foodData.innerHTML = food;

   let stateData = document.createElement("td");
   tableRow.append(stateData);
   stateData.innerHTML = state;

   let countryData = document.createElement("td");
   tableRow.append(countryData);
   countryData.innerHTML = country;
}
  