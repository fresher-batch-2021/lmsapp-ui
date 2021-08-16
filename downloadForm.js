var csvFileData = [  
    ['Alan Walker', 'Singer'],  
    ['Cristiano Ronaldo', 'Footballer'],  
    ['Saina Nehwal', 'Badminton Player'],  
    ['Arijit Singh', 'Singer'],  
    ['Terence Lewis', 'Dancer']  
 ];  
const historyDetails = [
    {
        sno: 1,
        fromDate: "2021-08-12",
        toDate: "2021-08-12",
        type: "Casual Leave",
        reason: "Function",
        status: "Pending"
    },
    {
        sno: 2,
        fromDate: "2021-08-02",
        toDate: "2021-08-02",
        type: "Sick Leave",
        reason: "Fever",
        status: "Approved"
    },
    {
        sno: 3,
        fromDate: "2021-07-26",
        toDate: "2021-07-27",
        type: "Casual Leave",
        reason: "Personal",
        status: "Approved"
    },
    {
        sno: 4,
        fromDate: "2021-07-08",
        toDate: "2021-07-08",
        type: "Casual Leave",
        reason: "birthday Party",
        status: "Declined"
    },
];
     
 
 function download_csv_file() {  
   
     var csv = 'Name,Profession\n';
     
     for(let leaveDetail of historyDetails){
         csv += "EMPID"+',' + leaveDetail.sno;
         csv += "\n";
         csv += "From Date"+','+leaveDetail.fromDate;
         csv += "\n";
         csv += "To Date"+','+ leaveDetail.toDate;
         csv += "\n";
         csv += "Leave Type"+','+ leaveDetail.type;
         csv += "\n";
         csv += "Reason" +','+ leaveDetail.reason;
         csv += "\n";
         csv += "Status" +','+ leaveDetail.status;
     }
         
     document.write(csv);   
     var hiddenElement = document.createElement('a');  
     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);  
     hiddenElement.target = '_blank';  
     hiddenElement.download = 'leaveform.csv';  
     hiddenElement.click();  
}  