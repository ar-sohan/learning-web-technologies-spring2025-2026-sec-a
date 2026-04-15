<?php
    if(isset($_POST['submit'])){
        $day = $_POST['day'];
        $month = $_POST['month'];
        $year = $_POST['year'];

        if(($day>=0 && $day<=31) && ($month>=0 && $month<=12)){
            echo "<br>";
            echo "  dd        mm       yyyy <br>";
            echo "{$day} / {$month} / {$year}";
        }
        else{
            echo "Invalid day/month/year";
        }
    }
?>