// Write your code below:
function handleFormSubmit(event) {
    // Write your code below:
  function handleFormSubmit(event) {
    event.preventDefault();
    const uname = event.target.username.value;
    const uemail = event.target.email.value;
    const uphone = event.target.phone.value;
  
    const obj={
      "username":uname,
      "email":uemail,
      "phone":uphone
    }
    const edit = document.createElement("button");
    edit.textContent = "Edit";
    const li = document.createElement("li");
    li.textContent = ` username: ${obj.username},email: ${obj.email},phone: ${obj.phone}`;
    li.appendChild(edit);
    edit.addEventListener("click",(event)=>{
      event.target.username.value = uname;
      event.target.email.value = uemail;
      event.target.phone.value = uphone;
      axios.delete("https://crudcrud.com/api/7f6ea1746991409981f8de30ed52dcb9/appointment/66cf0848028a7803e87a614b")
      .then((result)=>console.log("deleted"));
      
    })
    axios.post("https://crudcrud.com/api/7f6ea1746991409981f8de30ed52dcb9/appointment",obj)
    .then((result)=>console.log(result.data))
    .catch((error)=>console.log(error))
  }
  
  
  
  
  
  }
  
  

 
  