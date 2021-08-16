function login() {
    event.preventDefault();
    const userName = document.querySelector("#userName").value;
    const password = document.querySelector("#password").value;
    const role = document.querySelector("#role").value;
    const loginObj = {
        "userName": userName,
        "password": password,
        "role": role
    }
    console.log(loginObj);
    let allFielsAreOk = 0;
    if (userName == null || userName == "" || userName.trim() == "") {
        alert("Enter valid username");
    }
    else if (password == null || password == "" || password.trim() == "" || password.length > 8 || password.length < 8) {
        alert("Password Must be 8 letters");
    }

    else if (role == null || role == "" || role.trim() == "") {
        alert("Role is Invalid");
    }
    else {
        allFielsAreOk = 1;
    }
    if (allFielsAreOk == 1) {
        console.log("called");
        const dbUsername = "apikey-v2-112mfjkmfy0vbc1cwfx61kckru87k40qr1lnztxypzbg";
        const dbPassword = "28cadd4e1a6e2edf67df43007bae28dc";
        const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
        let url = "https://9c34f728-220d-4b98-91c8-b24ae354ff67-bluemix.cloudantnosqldb.appdomain.cloud/lms-users/_find";
        let formData = {
            selector: {
                email: userName,
                password: password
            },
            fields: ["_id","_rev","name","role", "empId"] 
        };

        axios.post(url, formData, { headers: { 'Authorization': basicAuth } }).then(res => {
            let data = res.data;
            console.log(data.docs);
            console.log(data.docs[0].role);
            if (data.docs[0].role === "employee" && loginObj.role === "Employee") {
                alert("Successffully Login");
                localStorage.setItem("LOGGED_IN_USER", JSON.stringify(data.docs));
                window.location.href = "home.html";
            } else if (data.docs[0].role === "hr" && loginObj.role === "HR") {
                alert("Successffully Login");
                localStorage.setItem("LOGGED_IN_USER", JSON.stringify(data.docs));
                window.location.href = "hrhome.html";
            } else {
                alert("Invalid Role defined");
            }
        }).catch(err => {
            //let errorMessage = err.response.data.errorMessage;
            //console.error(errorMessage);
            alert("Error- Invalid Credentials");
        });
    }
}
function updateLocal() {
    let availableLeave = [
        {
            casualLeave: 6,
            sickLeave: 6,
            earnedLeave: 6,
            total: 18
        }
    ];
    localStorage.setItem("availableLeave", JSON.stringify(availableLeave));
}