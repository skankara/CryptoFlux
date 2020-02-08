const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require('./routes/authRoutes');

authRoutes(app);
app.listen(PORT,()=>{
  console.log("Server started at http://localhost:5000");
});
