<?php
    $gender = "";
    if(isset($_POST['submit'])){
        $gender = $_POST['gender'];
        echo "Gender : {$gender}";
    }
?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Form 4</title>
  </head>
  <body>
    <form action="validation.php" method="post">
      <fieldset>
        <legend>GENDER</legend>
        <input type="radio" name="gender" value="male"
        <?php if($gender == "male") echo "checked"; ?>> Male
        <input type="radio" name="gender" value="female"
        <?php if($gender == "female") echo "checked"; ?>> Female 
        <input type="radio" name="gender" value="other"
        <?php if($gender == "other") echo "checked"; ?>> Other
        <hr />
        <input type="submit" name="submit" value="Submit" />
      </fieldset>
    </form>
  </body>
</html>

<?php
?>