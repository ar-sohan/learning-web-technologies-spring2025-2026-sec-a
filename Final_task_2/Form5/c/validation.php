<?php
$selectedDegrees = [];

if (isset($_POST['submit'])) {
    $selectedDegrees = $_POST['degree'];
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Form 5</title>
</head>
<body>
    <?php if ($message) echo "<p><strong>$message</strong></p>"; ?>

    <form action="" method="post">
      <fieldset>
        <legend>Degree</legend>
        <input type="checkbox" name="degree[]" value="SSC" <?php if(in_array("SSC", $selectedDegrees)) echo "checked"; ?>> SSC 
        <input type="checkbox" name="degree[]" value="HSC" <?php if(in_array("HSC", $selectedDegrees)) echo "checked"; ?>> HSC 
        <input type="checkbox" name="degree[]" value="BSc" <?php if(in_array("BSc", $selectedDegrees)) echo "checked"; ?>> BSc
        <input type="checkbox" name="degree[]" value="MSc" <?php if(in_array("MSc", $selectedDegrees)) echo "checked"; ?>> MSc
        <hr />
        <input type="submit" name="submit" value="Submit" />
      </fieldset>
    </form>

    <?php
    if (!empty($selectedDegrees)) {
        echo "<h3>Your Selection:</h3><ul>";
        foreach ($selectedDegrees as $d) {
            echo "<li>" . $d . "</li>";
        }
        echo "</ul>";
    }
    ?>
</body>
</html>