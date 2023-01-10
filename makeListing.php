<?php
    include ('conn.php');

    $item_name = $_POST['itemName'];
    $image_link= $_POST['ImageLink'];
    $itemDes = $_POST['itemDes'];
    $price = $_POST['price'];

    
    $insert = $conn->prepare("INSERT INTO products(itemName,ImageLink,itemDes,price) VALUE(?,?,?,?)");
    $insert->bind_param("sssi",$item_name,$image_link,$itemDes,$price);
    $insert->execute();
    header( "Location: inserted.html" );
    $insert->close();
    $conn->close();
    
?>