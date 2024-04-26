@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&family=VT323&display=swap');

body {
  background: #f2f2f2;
  color: #444;
  margin: 0;
}
body * {
  font-family: "Poppins";
}

/* header */
header {
  text-align: center;
  background: #e7e7e7;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
header img {
  max-width: 60px;
  transform: rotate(-10deg);
}
header h1 {
  margin: 0;
  font-size: 2em;
  padding-top: 25px;
  margin-left: 15px;
  color: #777;
  transform: rotate(2deg);
}
.task-list{
  max-width: 640px;
  margin: 20px auto;
}
.task{
  padding:6px 20px;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 2 px 4px 6px rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task h3,.task .icons{
  display: inline-block;
}
.task .icons{
  text-align: right;
}
.task i{
  font-size: 1.4em;
  margin-left: 6px;
  cursor: pointer;
  color: #bbb;
}
.filter{
  width: 640px;
  margin: 10px auto;
  text-align: right;
}
.filter button{
  display: inline-block;
  margin-left: 10px;
  background: pink;
  border: 2px solid #555;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 1em;
}
.new-task-form{
  background: lightblue;
  padding: 20px 0;
}
form{
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
}
form button{
  display: inline-block;
 
  background: lightsalmon;
  border: 0;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  font-size: 1em;
}
form input{
  border: 0;
  padding: 10px;
  border-radius: 6px;
  color: #555;
  font-size: 1em;
}
