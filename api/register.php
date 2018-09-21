<?php

include 'dbConnection.php';

connect();

$username = $_POST['username'];
$password = $_POST['password'];
$name = $_POST['name'];
$id = $_POST['id'];

$response;

$query = "select * from users where username = '$username'";
$result = mysqli_query($connection, $query) or die("Greska prilikom upita!" . mysqli_error($connection));

$n = mysqli_num_rows($result);

if ($n > 0) {
    die(false);
}

$query = "select * from users where id = '$id'";
$result = mysqli_query($connection, $query) or die("Greska prilikom upita!" . mysqli_error($connection));

$parent_user = mysqli_fetch_assoc($result);

if ($parent_user['type'] == "L") {
    $id = $parent_user['id'];
    $query = "insert into users values('', '$username', '$password', '$name', 'P', '$id')";
    $result = mysqli_query($connection, $query) or die("Greška prilikom izvršavanja upita!" . mysqli_error($connection));
    echo true;
}
if ($parent_user['type'] == "A") {
    $query = "insert into users values('', '$username', '$password', '$name', 'L', '$id')";
    $result = mysqli_query($connection, $query) or die("Greška prilikom izvršavanja upita!" . mysqli_error($connection));
    echo true;
}

disconnect();
