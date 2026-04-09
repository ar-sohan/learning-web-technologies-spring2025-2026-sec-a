<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Greater One</title>
</head>
<body>
    <form action="task_4.php" method="post">
        <label for="num1">Enter First Number</label>
        <input type="number" name="first"> <br><br>
        <label for="num2">Enter Second Number</label>
        <input type="number" name="second"> <br><br>
        <label for="num3">Enter Third Number</label>
        <input type="number" name="third"> <br><br>
        <button type="submit">Submit</button>
        <br><br>
    </form>
</body>
</html>

<?php
    $f_number = $_POST['first'];
    $s_number = $_POST['second'];
    $t_number = $_POST['third'];

    if($f_number > $s_number)
    {
        if ($f_number > $t_number) {
            echo "{$f_number} is the biggest number";
        }
        else {
            echo "{$t_number} is the biggest number";
        }
    }
    elseif ($f_number < $s_number) {
        if ($s_number > $t_number) {
            echo "{$s_number} is the biggest number";
        }
        else {
            echo "{$t_number} is the biggest number";
        }
    }
?>