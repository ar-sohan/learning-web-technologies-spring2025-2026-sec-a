<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form 1</title>
</head>
<body>
    <form action="" method="post">
        <fieldset>
            <legend>Username : </legend>
            <input type="text" name="uname" id=""> <br>
            <hr>
            <input type="submit" name="submit" value="Submit">
        </fieldset>
    </form>
</body>
</html>

<?php 
    if(isset($_POST['submit'])){
        $name = $_POST['uname'];
        echo "Submitted name : {$name}";
    }
?>