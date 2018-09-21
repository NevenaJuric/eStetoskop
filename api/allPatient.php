<?php

    include('dbConnection.php');
    connect();

    $id = $_POST['id'];
    $response = [];

    $query = "select username, name from users where parent_id = '$id'";
    $result = mysqli_query($connection, $query) or die("...".mysqli_error($connection));

    if(mysqli_num_rows($result) == 0){
        $response = "no";
    }


    while($row = mysqli_fetch_assoc($result)){
        array_push($response, $row['username'], $row['name']);
    }
    
    echo json_encode($response);
    disconnect();
?>