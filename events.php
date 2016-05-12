<?php
    // echo "yo"
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $entityBody = file_get_contents('php://input');
        $dataJson = json_decode($entityBody);
        if (array_key_exists('events', $dataJson)) {
            file_put_contents("./events.json", json_encode($dataJson));
            echo "writeover success";
        } else {
            echo "no writeover";
        }
    } else {
        $data = json_decode(file_get_contents("./events.json"));
        header('Content-Type: application/json');
        echo json_encode($data);
    }
?>
