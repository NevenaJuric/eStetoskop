<?php

include 'dbConnection.php';

connect();

$username = $_POST['username'];
$password = $_POST['password'];

$query = "select id, name, type from users where username = '$username' and password = '$password'";
$result = mysqli_query($connection, $query) or die("Greska prilikom upita!" . mysqli_error($connection));

$n = mysqli_num_rows($result);

if ($n > 0) {
    $row = mysqli_fetch_assoc($result);
    $id = $row['id'];
    $cookie_name = "estetoskop";
    $cookie_value = (string) $id;
    setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
    echo json_encode($row);
} else{
    echo $n;
}

disconnect();

?>
