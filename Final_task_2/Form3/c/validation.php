<?php
    if(isset($_POST['submit'])){
        $day = $_POST['day'];
        $month = $_POST['month'];
        $year = $_POST['year'];
    }
?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Form 3</title>
  </head>
  <body>
    <form method="post">
      <fieldset>
        <legend>DATE OF BIRTH</legend>
        <div style="display: flex; gap: 20px;">
          <div>
            dd <br />
            <input type="number" name="day" value="<?php if(isset($_POST['submit'])){echo "$day";}?>"/> /
          </div>
          <div>
            mm <br />
            <input type="number" name="month" value="<?php if(isset($_POST['submit'])){echo "$month";}?>" /> /
          </div>
          <div>
            yyyy <br />
            <input type="number" name="year" value="<?php if(isset($_POST['submit'])){echo "$year";}?>" />
          </div>
        </div>
        <hr />
        <input type="submit" name="submit" value="Submit" />
      </fieldset>
    </form>
  </body>
</html>