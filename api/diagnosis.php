<?php

    include 'dbConnection.php';
    connect();

    $patient = $_POST['patient'];
    $diagnosis = $_POST['diagnosis'];

    $query = "select id from users where username = '$patient'";
    $result = mysqli_query($connection, $query) or die("...".mysqli_error($connection));

    while($row = mysqli_fetch_assoc($result)){
        $id = $row['id'];
    }

    $query = "insert into diagnosis values('$id', '$patient', '$diagnosis')";
    $result = mysqli_query($connection, $query);

    if($result == true){
        echo true;
    }else{
        echo false;
    }

    disconnect();

?>