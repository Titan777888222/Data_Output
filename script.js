class User {

  constructor(firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
  }

  displayDetails() {
	  
    return `My name is ${this.firstName} ${this.lastName} and I'm a ${this.gender}`;
  }
}
const button = document.getElementById("button");
const details = document.getElementById("details");

button.addEventListener("click", function showDetails() {
  
	  const firstName = document.getElementById("name").value;
	  const lastName = document.getElementById("lastName").value;
	  
	  const gender = document.querySelector('input[name="gender"]:checked').value;
	  
	  const user = new User(firstName, lastName, gender);
	  document.getElementById("details").innerHTML = user.displayDetails();
	  
});

