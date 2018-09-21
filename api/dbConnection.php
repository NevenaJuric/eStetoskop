<?php

    function connect(){
        global $connection;
        $connection = mysqli_connect('localhost', 'root', '', 'estetoskop');
        if(mysqli_connect_errno()){
            die("Neuspela konekcija sa bazom: ".mysqli_connect_error($connection));
        }
    }

    function disconnect(){
        global $connection;
        mysqli_close($connection);
    }

?>