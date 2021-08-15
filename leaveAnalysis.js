anychart.onDocumentReady(function() {

    var data = {
        header: ["Name", "Leave Counts"],
        rows: [
          ["Sick Leave", 25],
          ["Casual Leave", 18],
          ["Earned Leave", 23]
    ]};
    var chart = anychart.column();
    chart.data(data);
    chart.title("Leave Analysis");
    chart.container("container");
    chart.draw();
  });