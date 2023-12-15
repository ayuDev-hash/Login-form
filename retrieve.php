<?php 
include('dbConnection.php');

//Retrieve contact info
$sql = "SELECT * FROM contact";
$result = $conn->query($sql);
if($result->num_rows > 0){
    $data = array();
    while($row = $result->fetch_assoc()){
        $data[] = $row;
    }
}
echo json_encode($data);


?>