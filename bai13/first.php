<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php - buổi 1</title>
</head>
<body>
    <h1>Đây là file php</h1>
    <?php 
        //1. cú pháp in ra màn hình
        echo "Hello World! <br>";
        echo "PHP <br>";

        //2. biến
        //cú pháp: $ + tên biến = giá trị của biến
        $ten = "li";
        $tuoi = 20;
        //nối chuỗi trong php dùng dấu .
        echo "Xin chào " . $ten . " ". $tuoi . " tuổi! <br>";

        //3. hằng 
        define("soPi", "3.14");
        echo soPi . "<br>";

        //4. phân biệt '' với ""
        echo "$ten" . "<br>"; //thay thế biến bằng giá trị của biến
        echo '$ten' . "<br>"; //biến không được thay thế

        //5. chuỗi
        #5.1: kiểm tra độ dài của chuỗi
        echo strlen($ten) . "<br>";
        #5.2: đếm số từ
        echo str_word_count($ten) . "<br>";
        #5.3: tìm kiếm ký tự trong chuỗi -> trả về vị trí của ký tự đó trong chuỗi
        echo strpos($ten, "l") . "<br>";
        #5.4: thay thế ký tự trong chuỗi
        echo str_replace("l", "L", $ten) . "<br>";

        //6. toán tử
        $sothuNhat = 10;
        $sothuHai = 5;
        // + - * / %
        // += -= *= /= %=
        //so sánh: == != > < <= >= ===
        // echo $sothuNhat %= $sothuHai . "<br>";

        //7. câu điều kiện
        //kiểm tra tổng của số thứ nhất và số thứ hai nếu <15, thì hiển thị tổng là ...nhỏ hơn 15; nếu =15 thì hiển thị là tổng là 15; nếu >15 thì hiển thị là tổng là lớn hơn 15.
        $tong = $sothuNhat + $sothuHai;
        //echo "$tong" . "<br>";
        if($tong < 15) {
            echo "tổng nhỏ hơn 15";
        }
        elseif($tong = 15) {
            echo "tổng là 15";
        }
        else {
            echo "tổng lớn hơn 15";
        }

        //8.switch case
        $color = "red";
        switch ($color){
            case "red":
                echo"is red";
                break;
            case "red":
                echo"is blue";
                break;
            default :
                echo"no color";
                break;
            
        }
        //9.for 
        for($i =0;$i<100;$i++){
            echo $i."<br>";
        }


    ?>
</body>
</html>