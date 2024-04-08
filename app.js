

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
      UserName: <input type="text"  v-on:input="changeTitle"/>
      <p>{{title}}</p>
    </div>


    <script>
     
        var mydata= new Vue({
            el: '#app',
            data: {
                title: 'welcome'
            },
            methods: {
                changeTitle : function(event) {
                    this.title =event.target.value
                }
            },
        })
    </script>
    
</body>
</html>
