<?php
    if(isset($_POST['submit'])){
        $degree = $_POST['degree'];

        // echo "Degree(s) : {$degree0}";
        foreach($degree as $d){
            echo $d "<br>";
        }
    }
?>