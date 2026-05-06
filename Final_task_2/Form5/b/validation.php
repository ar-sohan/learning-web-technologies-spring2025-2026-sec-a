<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form 5</title>
</head>
<body>
    <form action="validation.php" method="post">
      <fieldset>
        <legend>Degree</legend>
        <input type="checkbox" name="degree[]" value="SSC"> SSC 
        <input type="checkbox" name="degree[]" value="HSC"> HSC 
        <input type="checkbox" name="degree[]" value="BSc"> BSc
        <input type="checkbox" name="degree[]" value="MSc"> MSc
        <hr />
        <input type="submit" name="submit" value="Submit" />
      </fieldset>
    </form>
</body>
</html>

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