
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="vue.js"></script>
</head>
<body>

    <div id="app">
      <h1>{{title}}</h1>
      <button @click="show">Show Para</button>
      <p v-if="showPara">This is not always visible</p>
    </div>

<script src="app.js"></script>
    
    
</body>
</html>
