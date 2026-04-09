<?php
    $arr = [
        [1, 2, 3, 'A'],
        [1, 2, 'B', 'C'],
        [1, 'A', 'B', 'C'],
    ];

    for($i=0; $i<3; $i++)
    {
        for($j=0; $j < 3-$i; $j++)
        {
            echo "{$arr[$i][$j]} ";
        }
        echo "<br>";
    }

    echo "<br>";

    for($i=0; $i<3; $i++)
    {
        for($j=3-$i; $j <= 3; $j++)
        {
            echo "{$arr[$i][$j]} ";
        }
        echo "<br>";
    }
?>