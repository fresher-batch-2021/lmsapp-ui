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
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);
let content = "";
for (let hist of historyDetails) {
    if(id == hist.sno){
    content = content + `
                    <div class="row">
                        <div class=col-sm-1></div>
                        <div class="col-sm-3">
                            <label>EmployeeId</label>
                        </div>
                        <div class="col-sm-6">
                            <input type="text" required name="empID" value = "1234" id="employeeId" readonly class="box-control">
                            <br />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-1"></div>
                        <div class="col-sm-3">
                            <label>From Date : </label>
                        </div>
                        <div class="col-sm-6">
                            <input type="date" value = ${hist.fromDate} required id="fromDate" class="box-control">
                            <br />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-1"></div>
                        <div class="col-sm-3">
                            <label>To Date : </label>
                        </div>
                        <div class="col-sm-8">
                            <input type="date" value = ${hist.toDate} required id="toDate" class="box-control">
                            <br />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-1"></div>
                        <div class="col-sm-3">
                            <label>Leave Type : </label>
                        </div>
                        <div class="col-sm-8">
                            <select  required id="type" class="box-control">
                                <option value="">${hist.type}</option>
                                <option value="sickLeave">Sick Leave</option>
                                <option value="casualLeave">Casual Leave</option>
                            </select>
                            <br />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-1"></div>
                        <div class="col-sm-3">
                            <label>Reason : </label>
                        </div>
                        <div class="col-sm-8">
                            <input type="text" value = ${hist.reason} required id="reason" class="box-control">
                            <br />
                        </div>
                    </div>
                    <div>
                        <div class="row">
                            <div class="col-sm-2"></div>
                            <div class="col-sm-8">
                                <input type="submit" style="width : 100%; height : 40px; font-size : 16px;"
                                    value="UPDATE" class="btn1-style">
                                <div class="col-sm-2"></div>
                            </div>
                        </div>
                    </div>
    `;
    document.querySelector("#edit-leave").innerHTML = content;
    }
}


