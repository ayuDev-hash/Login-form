<?php 
include('dbConnection.php');
$data = stripcslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);
$id = $mydata['sid'];

//delete contact info from db
if(!empty($id)){
    $sql = "DELETE FROM contact WHERE id = {$id}";
    if($conn->query($sql) == TRUE){
        echo "Contact Data Delete Successfully!";

    }else{
        echo "Unable to delete contact details";
    }
}

?>