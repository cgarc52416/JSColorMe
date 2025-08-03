<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="description" content="JS Color Me Demo Landing Page">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/recolor.js"></script>
    <script type="module" src="js/hexToFilter.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=cruelty_free" />
    <link rel="stylesheet" href="css/recolor.css">
    <title>JS Color Me Demo</title>
</head>
<body>
   <div id="content">
        <h1>JS Color Me Demo</h1>

        <?php 
            // If form posted, display filter conversion
            if (isset($_POST['submitSVG'])) {
                $filter = htmlspecialchars($_POST["filter"], ENT_QUOTES, 'UTF-8');

                // Future addition: Insert into DB for historic record of colors tried and submitted
                echo '<h3>Filter conversion:</h3><p>' . $filter . '</p>';
                echo '<button type="button" name="reset" onclick="resetPage()">Reset Page</button>';
            // Else display generate form button
            } else {
                echo '<div class="buttons-container">
                        <button type="button" name="item-svg">Recolor SVG</button>
                    </div>';
            }
        ?>
   </div> 
</body>
</html>