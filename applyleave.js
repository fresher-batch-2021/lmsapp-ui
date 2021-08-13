function leaveForm() {
    event.preventDefault();
    const employeeId = document.querySelector("#employeeId").value;
    const fromDate = document.querySelector("#fromDate").value;
    const toDate = document.querySelector("#toDate").value;
    const leaveType = document.querySelector("#type").value;
    const reason = document.querySelector("#reason").value;
    const leaveFormObj = {
        "employeeId": employeeId,
        "fromDate": fromDate,
        "toDate": toDate,
        "leaveType": leaveType,
        "reason": reason
    }
    let availableCounts = [];
    let leaveCounts = localStorage.getItem("availableLeave");
    availableCounts = leaveCounts != null ? JSON.parse(leaveCounts) : null;
    console.log(leaveCounts);
    console.log(availableCounts);
    if(leaveType == "sickLeave"){
        console.log("sl");
        availableCounts.sickLeave--;
        availableCounts.total--;
    }
    else if(leaveType == "casualLeave"){
        console.log("cl");
        availableCounts.casualLeave--;
        availableCounts.total--;
    }
    else if(leaveType == "earnedLeave"){
        console.log("el");
        availableCounts.earnedLeave = availableCounts.earnedLeave-1;
        console.log(availableCounts.earnedLeave);
        availableCounts.total--;
    }
    console.log(availableCounts);
    console.log(leaveFormObj);
    window.location.href = "history.html";
}