<?php 
include('dbConnection.php');

$data = stripcslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);
$id = $mydata['id'];
$name =  $mydata['name'];
$email =  $mydata['email'];
$phoneNo = $mydata['phoneNo'];
$message = $mydata['message'];

// Insert Data
// if(!empty($name) && !empty($email) && !empty($phoneNo) && !empty($message)){
//     $sql = "INSERT INTO contact(name, email, phoneNo, message) VALUES 
//     ('$name', '$email', '$phoneNo', '$message')";
//     if($conn->query($sql) == TRUE){
//         echo "Message Send Successfully";
//     }else{
//         echo "Unable to Send Message";
//     }
// }else{
//     echo "Fill All Fileds";
// }


// insert or update data
if(!empty($name) && !empty($email) && !empty($phoneNo) && !empty($message)){
    $sql = "INSERT INTO contact(id, name, email, phoneNo, message) VALUES 
    ('$id','$name', '$email', '$phoneNo', '$message') ON DUPLICATE KEY UPDATE name= '$name', email= '$email', phoneNo= '$phoneNo', message= '$message'";
    if($conn->query($sql) == TRUE){
        echo "Message Send Successfully";
    }else{
        echo "Unable to Send Message";
    }
}else{
    echo "Fill All Fileds";
}
?>