// Call the dataTables jQuery plugin
$(document).ready(function () {
    $('#dataTable').DataTable({
        "scrollY": "50vh",
        "scrollCollapse": true,
        "paging": false
    });
});
