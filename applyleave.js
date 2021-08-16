function leaveForm() {
    event.preventDefault();
    const employeeId = document.querySelector("#employeeId").value;
    const fromDate = document.querySelector("#fromDate").value;
    const toDate = document.querySelector("#toDate").value;
    const leaveType = document.querySelector("#type").value;
    const reason = document.querySelector("#reason").value;
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr) : null;
    console.log("Name : ", user[0]._id);
    const userId = user[0]._id;
    const leaveFormObj = {
        "name" : user[0].name,
        "id": userId,
        "employeeId": user[0].empId,
        "fromDate": fromDate,
        "toDate": toDate,
        "leaveType": leaveType,
        "reason": reason,
        "status" : "Pending"
    }
    const dbUsername = "apikey-v2-112mfjkmfy0vbc1cwfx61kckru87k40qr1lnztxypzbg";
    const dbPassword = "28cadd4e1a6e2edf67df43007bae28dc";
    const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
    let url = "https://9c34f728-220d-4b98-91c8-b24ae354ff67-bluemix.cloudantnosqldb.appdomain.cloud/leaveforms";

    axios.post(url, leaveFormObj, { headers: { 'Authorization': basicAuth } }).then(res => {
        let data = res.data;
        console.log("response : ", data);
        alert("Applied Succesfully");
        console.log("success");
        window.location.href = "history.html";
    }).catch(err => {
        let errorMessage = err.response.data.errorMessage;
        console.error(errorMessage);
        console.log("failed");
        alert("Error-" + errorMessage);
    });
    console.log(leaveFormObj);
    //window.location.href = "history.html";
}