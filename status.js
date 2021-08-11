availableCounts = [
    {
        total: 12,
        sickLeave: 8,
        casualLeave: 4
    }
];

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
`;
}
document.querySelector("#availableLeaves").innerHTML = content;