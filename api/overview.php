<?php
    include('dbConnection.php');
    connect();

    $id = $_POST['id'];


    $response = [];

    $query = "select u.name, d.diagnosis, a.alergic, a.medicament, a.hrono, a.operation from users u, diagnosis d, about a 
    where parent_id = '$id' and u.id = d.id and u.id = a.id";
    $result = mysqli_query($connection, $query) or die("Greska prilikom izvrsavanja upita!".mysqli_error($connection));


    if(mysqli_num_rows($result) == 0){
        $response = "no";
    }

    while($row = mysqli_fetch_assoc($result)){
        array_push($response, $row['name'], $row['diagnosis'], $row['alergic'], $row['medicament'], $row['hrono'], $row['operation']);
    }


    echo json_encode($response);

    disconnect();
?>