function validateForm(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var date = document.getElementById("date").value;
    var color = document.getElementById("color").value;
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      password === "" ||
      age === "" ||
      gender === "" ||
      date === "" ||
      color === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }
    document.getElementById("myForm").submit();
  }