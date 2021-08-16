const form = [
    {
        name: "Renis",
        employeeId: "2855",
        team: "smart App",
        leaveDays: "08/08/2021",
        leaveType: "Sick Leave",
        reason: "Fever",
    },
    {
        name: "Casio",
        employeeId: "1448",
        team: "DataZap",
        leaveDays: "11/08/2021",
        leaveType: "Casual Leave",
        reason: "Function",
    },
    {
        name: "Issac",
        employeeId: "2248",
        team: "DataZence",
        leaveDays: "16/08/2021",
        leaveType: "Sick Leave",
        reason: "Headache",
    }
];
let forms = [];
const dbUsername = "apikey-v2-112mfjkmfy0vbc1cwfx61kckru87k40qr1lnztxypzbg";
const dbPassword = "28cadd4e1a6e2edf67df43007bae28dc";
const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
let url = "https://9c34f728-220d-4b98-91c8-b24ae354ff67-bluemix.cloudantnosqldb.appdomain.cloud/leaveforms/_all_docs?include_docs=true";
//let forms =[];
axios.get(url, { headers: { 'Authorization': basicAuth } }).then(res => {
    let data = res.data;
    console.log("response : ", data);
    forms = data.rows;
    console.log("table list :", forms);
    console.log("available list :", form);
    console.log("success");
    render(forms);

}).catch(err => {
    let errorMessage = err.response.data.errorMessage;
    console.error(errorMessage);
    console.log("failed");
    alert("Error-" + errorMessage);
});

function render(forms) {
    let content = "";
    for (let formObj of forms) {
        console.log("data : ", formObj.doc.status);
        if (formObj.doc.status === "Pending") {
            //content = content + "<tr><td>"+ formObj.name +"</td><td>" + formObj.name + "</td><td>" + formObj.leaveDays + "</td></tr>";
            //content = content + `<tr><td>${formObj.name} ${formObj.employeeId}</td><td>${formObj.leaveDays}</td><td>${formObj.reason}</td></tr>`;
            content = content + `<div class="application-form">
        <div class="row">
            <div class="col-sm-4">
                <label>Name : ${formObj.doc.name}</label><br />
                <label>Employee ID : ${formObj.doc.employeeId}</label><br />
                <label>Team : ${formObj.doc.employeeId}</label><br />
            </div>
            <div class="col-sm-4">
                <label>Leave days : ${formObj.doc.fromDate}</label><br />
                <label>Leave Type : ${formObj.doc.leaveType}</label><br />
                <label>Reason : ${formObj.doc.reason}</label><br />
            </div>
            <div class="col-sm-4">
                <center>
                    <input type="submit" onclick = "statusUpdate('${formObj.doc._id}','${formObj.doc._rev}','${formObj.doc.id}','${formObj.doc.employeeId}','${formObj.doc.fromDate}','${formObj.doc.toDate}','${formObj.doc.leaveType}','${formObj.doc.reason}','Approved')" class="btn1-style" value="Approve"><br />
                        <input type="submit" onclick = "statusUpdate('${formObj.doc.id}','${formObj.doc._rev}','Declined')" class="btn2-style" value="Decline">
            </center>
        </div>
        </div>
            </div>`}
    }
    console.log("content : ", content);
    document.querySelector("#application-forms").innerHTML = content;
}

function statusUpdate(id,rev,eid,empid,fromDate, toDate, leaveType, reason, status) {
    const dbUsername = "apikey-v2-112mfjkmfy0vbc1cwfx61kckru87k40qr1lnztxypzbg";
    const dbPassword = "28cadd4e1a6e2edf67df43007bae28dc";
    const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
    const formData = {
        "id" : eid,
        "employeeId" : empid,
        "fromDate" : fromDate,
        "toDate" : toDate,
        "leaveType" : leaveType,
        "reason" : reason,
        "status" : status
    }

    let url = "https://9c34f728-220d-4b98-91c8-b24ae354ff67-bluemix.cloudantnosqldb.appdomain.cloud/leaveforms/"+id+"?rev="+rev;
    //let forms =[];
    axios.put(url,formData, { headers: { 'Authorization': basicAuth } }).then(res => {
        let data = res.data;
        console.log("response : ", data);
        console.log("table list :", forms);
        console.log("available list :", form);
        console.log("success");
        alert("Updated Successfully");

    }).catch(err => {
        console.log("failed");
        alert("Error-Update Failed");
    });
}
