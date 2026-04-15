<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Form 3</title>
  </head>
  <body>
    <form action="validation.php" method="post">
      <fieldset>
        <legend>DATE OF BIRTH</legend>
        <div style="display: flex; gap: 20px;">
          <div>
            dd <br />
            <input type="number" name="day" id="" /> /
          </div>
          <div>
            mm <br />
            <input type="number" name="month" id="" /> /
          </div>
          <div>
            yyyy <br />
            <input type="number" name="year" id="" />
          </div>
        </div>
        <hr />
        <input type="submit" name="submit" value="Submit" />
      </fieldset>
    </form>
  </body>
</html>

<?php
    if(isset($_POST['submit'])){
        $day = $_POST['day'];
        $month = $_POST['month'];
        $year = $_POST['year'];

        echo "<br>";

        if(($day>=0 && $day<=31) && ($month>=0 && $month<=12)){
            echo "  dd        mm       yyyy <br>";
            echo "{$day} / {$month} / {$year}";
        }
        else{
            echo "Invalid day/month/year";
        }
    }
?>