var app = require('./config/express')();
console.log(app)
app.listen(process.env.PORT || 3000,function(){
  console.log('Server Started at ' + 3000);
})