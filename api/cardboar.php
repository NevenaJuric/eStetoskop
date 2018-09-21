<?php
    include 'dbConnection.php';
    connect();

    $id = $_POST['id'];

    $query = "select diagnosis from diagnosis where id = '$id'";
    $result = mysqli_query($connection, $query) or die("Greska prilikom upita!".mysqli_error($connection));

    $resposne = [];

    if(mysqli_num_rows($result) == 0){
        $resposne = "no";
    }

    while($row = mysqli_fetch_assoc($result)){
        array_push($resposne, $row['diagnosis']);
    }

    echo json_encode($resposne);

    disconnect();   
?>