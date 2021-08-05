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
];
let content = "";
for (let formObj of form) {
    //content = content + "<tr><td>"+ formObj.name +"</td><td>" + formObj.name + "</td><td>" + formObj.leaveDays + "</td></tr>";
    //content = content + `<tr><td>${formObj.name} ${formObj.employeeId}</td><td>${formObj.leaveDays}</td><td>${formObj.reason}</td></tr>`;

    content = content + `<div class="application-form">
        <div class="row">
            <div class="col-sm-4">
                <label>Name : ${formObj.name}</label><br />
                <label>Employee ID : ${formObj.employeeId}</label><br />
                <label>Team : ${formObj.team}</label><br />
            </div>
            <div class="col-sm-4">
                <label>Leave days : ${formObj.leaveDays}</label><br />
                <label>Leave Type : ${formObj.leaveType}</label><br />
                <label>Reason : ${formObj.reason}</label><br />
            </div>
            <div class="col-sm-4">
                <center>
                    <input type="submit" class="btn1-style" value="Approve"><br />
                        <input type="submit" class="btn2-style" value="Decline">
            </center>
        </div>
    </div>
            </div>`
}
console.log("renis");
console.log(content);
document.querySelector("#application-forms").innerHTML = content;
console.log("renis");