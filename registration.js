function registration() {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const empId = document.querySelector("#empId").value;
    const teamName = document.querySelector("#teamName").value;
    const mobileNumber = document.querySelector("#mobileNumber").value;
    const emailAddress = document.querySelector("#emailAddress").value;
    const password = document.querySelector("#password").value;

    const jsonObj = {
        "name": name,
        "empId": empId,
        "role": teamName,
        "mobileNumber": mobileNumber,
        "email": emailAddress,
        "password": password
    }

    console.log(jsonObj);
    let passCheck = 0;
    let allFieldsAreOk = 0;
    if (name == null || name == "" || name.trim() == "") {
        alert("Enter valid name");
    }
    else if (empId == null || empId == "" || empId.trim() == "") {
        alert("Enter valid Employee ID");
    }
    else if (teamName == null || teamName == "" || teamName.trim() == "") {
        alert("Enter valid Role");
    }
    else if (mobileNumber == null || mobileNumber == "" || mobileNumber.trim() == "") {
        alert("Enter valid Mobile number");
    }
    else if (emailAddress == null || emailAddress == "" || emailAddress.trim() == "") {
        alert("Enter valid Email Address");
    }
    else if (password == null || password == "" || password.trim() == "" || password.length > 8 || password.length < 8) {
        alert("Must be 8 letters");
    }
    else if (password != null) {
        let numCheck = 0;
        let charCheck = 0;
        let capsCheck = 0;
        for (i = 0; i < password.length; i++) {
            if (password[i] >= "A" && password[i] <= "Z") {
                capsCheck = 1;
            }
            if (password[i] >= "a" && password[i] <= "z") {
                charCheck = 1;
            }
            if (parseInt(password[i]) >= 0 && parseInt(password[i]) <= 9) {
                numCheck = 1;
            }
        }
        if (numCheck == 1 && charCheck == 1 && capsCheck == 1) {
            console.log("password checked");
            passCheck = 1;
        }
        else {
            alert("Password must contains Atleast 1 Number, 1 Upper Case, 1 Lower Case");
        }
    } else {
        allFieldsAreOk = 1;
    }
    if (passCheck == 1) {
        console.log("called");
        let url = "https://product-mock-api.herokuapp.com/lmsapp/api/v1/auth/register";
        let formData = {
            name: name,
            empId: empId,
            role: teamName,
            mobileNumber: mobileNumber,
            email: emailAddress,
            password: password
        }
        axios.post(url, formData).then(res => {
            let data = res.data;
            console.log("response : ", data);
            alert("Successffully Registered");
            window.location.href = "index.html";
        }).catch(err => {
            let errorMessage = err.response.data.errorMessage;
            console.error(errorMessage);
            alert("Error-" + errorMessage);
        });

    }
}