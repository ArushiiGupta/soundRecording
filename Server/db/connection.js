const mongoose  = require('mongoose');
const atlasConnectionString ='mongodb+srv://arushibhavan:Arushi1707@cluster0.irxefcx.mongodb.net/';
mongoose.connect(atlasConnectionString, {

    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(()=>{
    console.log("Database connected");
  }
  )
  .catch((error)=> {
    console.log("Error");
  }
  )
  
  ;