<!DOCTYPE html>
<html lang="en">
<head>
    <title>Even or Odd</title>
</head>
<body>
    <form action="task_3.php" method="post">
        <label>Enter a number</label>
        <input type="number" name="num"> 
        <button type="submit">Check</button>
    </form>
    <br><br>
</body>
</html>

<?php

    $number = $_POST['num'];
    if ($number % 2 == 0) {
        echo "{$number} is even";
    }
    else {
        echo "{$number} is odd";
    }
?>
