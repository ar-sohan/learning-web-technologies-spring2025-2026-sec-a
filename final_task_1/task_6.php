<?php
    echo "Searching 30 <br>";
    // numeric array
    $num = [10, 20, 30, 40, 35];
    for ($i=0; $i < count($num); $i++) { 
        if($num[$i] == 30){
            echo "Found {$num[$i]}!";
        }
    }
?>