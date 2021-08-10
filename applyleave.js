function leaveForm(){
    event.preventDefault();
    const employeeId = document.querySelector("#employeeId").value;
    const fromDate = document.querySelector("#fromDate").value;
    const toDate = document.querySelector("#toDate").value;
    const leaveType = document.querySelector("#type").value;
    const reason = document.querySelector("#reason").value;
    const leaveFormObj = {
        "employeeId" : employeeId,
        "fromDate" : fromDate,
        "toDate" : toDate,
        "leaveType" : leaveType,
        "reason" : reason
    }
    console.log(leaveFormObj);
    window.location.href="history.html";
}