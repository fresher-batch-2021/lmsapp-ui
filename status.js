let availableCounts = [];
let leaveCounts = localStorage.getItem("availableLeave");
availableCounts = leaveCounts != null ? JSON.parse(leaveCounts):null;
console.log(leaveCounts);
console.log(availableCounts);
let content = "";
for (let counts of availableCounts) {
    content = content + `
                <div class = "content">
                    Available Leave : ${counts.total} days
                </div>
                <div class = "content">
                    Available Sick Leave : ${counts.sickLeave} days
                </div>
                <div class = "content">
                    Available Casual Leave : ${counts.casualLeave} days
                </div>
                <div class = "content">
                    Available Earned Leave : ${counts.earnedLeave} days
                </div>
`;
}
document.querySelector("#availableLeaves").innerHTML = content;