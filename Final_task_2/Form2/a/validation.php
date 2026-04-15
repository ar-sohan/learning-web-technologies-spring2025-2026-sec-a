<?php 
    if(isset($_POST['submit'])){
        $email = $_POST['email'];
        echo "Submitted email : {$email}";
    }
?>