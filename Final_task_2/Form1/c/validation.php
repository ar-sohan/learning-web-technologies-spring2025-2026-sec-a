<?php 
    if(isset($_POST['submit'])){
        $name = $_POST['uname'];
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form 1</title>
</head>
<body>
    <form method="post">
        <fieldset>
            <legend>Username : </legend>
            <input type="text" name="uname" value="<?php if(isset($_POST['uname'])){ echo "$name"; } ?>"> 
            <br>
            <hr>
            <input type="submit" name="submit" value="Submit">
        </fieldset>
    </form>
</body>
</html>