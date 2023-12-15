$(document).ready(function () {
  //Ajax Request for Retrieving Data
  function showdata() {
    output = "";
    $.ajax({
      url: "retrieve.php",
      method: "GET",
      dataType: "json",
      success: function (data) {
        // console.log(data);
        if (data) {
          x = data;
        } else {
          x = "";
        }
        for (i = 0; i < x.length; i++) {
          output +=
            "<tr><td>" +
            x[i].id +
            "</td><td>" +
            x[i].name +
            "</td><td>" +
            x[i].email +
            "</td><td>" +
            x[i].phoneNo +
            "</td><td>" +
            x[i].message +
            "</td><td> <button class= 'btn-edit' data-sid=" + x[i].id + ">Edit</button> <button class='btn-del' data-sid=" + x[i].id + "> Delete </button></td></tr>";
        }
        $("#tbody").html(output);
      },
    });
  }
  showdata();

  // Ajax Request for Insert Data
  $("#form_button").click(function (e) {
    e.preventDefault();
    let contid = $("#cid").val();
    let nm = $("#name_input").val();
    let em = $("#email_input").val();
    let phn = $("#telephone_input").val();
    let msgg = $("#message_input").val();

    mydata = {id:contid, name: nm, email: em, phoneNo: phn, message: msgg };
    $.ajax({
      url: "insert.php",
      method: "POST",
      data: JSON.stringify(mydata),
      success: function (data) {
        // console.log(data);
        msg = "<div>" + data + "</div>";
        $("#msg").html(msg);
        $("#myform")[0].reset();
        showdata();
      },
    });
  });

  //Ajax Request for Deleting Data
  $("tbody").on("click", ".btn-del", function () {
    console.log("delete button clicked")
    let id = $(this).attr("data-sid");
    console.log(id);
    mydata = {sid: id};
    $.ajax({
        url:"delete.php",
        method: "POST",
        data: JSON.stringify(mydata),
        success: function(data){
            // console.log(data);
            msg = "<div class ='show-msg'>" + data + "</div>";
            $("#msg").html(msg);
           showdata();
        }
    })
  });


  //Ajax Request for Edit Data

  $("tbody").on("click", ".btn-edit", function () {
    console.log("Edit button clicked")
    let id = $(this).attr("data-sid");
    console.log(id);
    mydata = {sid:id};
    $.ajax({
        url: "edit.php",
        method: "POST",
        dataType: "json",
        data: JSON.stringify(mydata),
        success:function(data){
            // console.log(data);
            $("#cid").val(data.id);
            $("#name_input").val(data.name);
            $("#email_input").val(data.email);
            $("#telephone_input").val(data.phoneNo);
            $("#message_input").val(data.message);
        },
    });
  });  

});
