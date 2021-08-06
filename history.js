const historyDetails = [
    {
        sno : 1,
        date : "09-08-2021",
        type : "Casual Leave",
        reason : "Function",
        status : "Pending"
    },
    {
        sno : 2,
        date : "02-08-2021",
        type : "Sick Leave",
        reason : "Fever",
        status : "Approved"
    },
    {
        sno : 3,
        date : "26-07-2021",
        type : "Casual Leave",
        reason : "Personal",
        status : "Approved"
    },
    {
        sno : 4,
        date : "08-07-2021",
        type : "Casual Leave",
        reason : "birthday Party",
        status : "Declined"
    },
];

let content = "";
for(let hist of historyDetails){
    content = content + `<tr><td>${hist.sno}</td><td>${hist.date}</td><td>${hist.type}</td><td>${hist.reason}</td><td>${hist.status}</td></tr>`;
}
console.log(content);
document.querySelector("#history-details").innerHTML = content;