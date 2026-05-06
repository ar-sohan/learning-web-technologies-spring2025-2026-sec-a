<?php
if (isset($_POST['submit'])) {
    if (!isset($_POST['degree'])) {
        echo "Please select at least one degree.";
    } 
    else {
        $selectedDegrees = $_POST['degree'];
        $count = count($selectedDegrees);
        echo "Success! You selected $count degree(s) <br>";
            
        foreach ($selectedDegrees as $degree) {
            echo $degree . "<br>";
        }
    }
}
?>