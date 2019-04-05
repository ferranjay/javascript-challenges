<?php

    //getInfo.PHP

    include "db_connection.php";   
    
    
    $sql_querie = "SELECT * FROM jschallenge";
    
    $db_result = $conn->query($sql_querie);  

    foreach ($db_result as $row)
    {            


        echo '<div class="card">' .
             '<h3>' . $row['pro_name'] . '</h3>'. 
             '</div>';
  
    }       

    $conn = null;
  
?>
