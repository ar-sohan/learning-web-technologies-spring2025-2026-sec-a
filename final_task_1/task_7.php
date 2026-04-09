<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Patterns
    </title>
    <style>
        .container{
            margin-left : 40px;
            margin-right : 40px;
            display : flex;
            justify-content : space-between;
            border : 2px solid black;
            padding : 10px;
        }
    </style>
</head>
<body>
    
</body>
</html>

<?php
echo "<div class='container'>";

    echo"<div>";
    for($i=0; $i<3; $i++)
    {
        for($j=0; $j<= $i; $j++)
        {
            echo "* ";
        }
        echo "<br>";
    }
    echo "</div>";

    echo "<div>";
    for($i=0; $i<3; $i++)
    {
        $num = 1;
        for($j=2; $j>= $i; $j--)
        {
            echo "{$num} ";
            $num++;
        }
        echo "<br>";
    }
    echo "</div>";


    echo "<div>";
    $letter = 'A';
    for($i=0; $i<3; $i++)
    {
        for($j=0; $j <= $i; $j++)
        {
            echo "{$letter} ";
            $letter++;
        }
        echo "<br>";
    }
    echo "</div>";

echo "</div>";
?>