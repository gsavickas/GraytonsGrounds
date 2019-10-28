const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const userRoutes = require("./GG_SPA/routes/users.routes");


app.use(bodyParser.json());
app.use(express.static(__dirname+"/dist"))

app.use("/users", userRoutes);

app.get('/', (req,res)=>{
    res.send('/dist/index.html');
})

app.get('/*', (req, res)=>{
    res.redirect('back');
})

app.listen(PORT);

// Database admin XEvPuLquIXm45xMX

 /*
 Routing withing Angular App

 {path: 'home', component: HomePageComponent},
  {path: 'coffee/main', component: AllComponent},
  {path: 'coffee/grounds', component: GroundsComponent},
  {path: 'coffee/whole-bean', component: WholeBeanComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'about', component: AboutUsComponent},
  {path: '**', redirectTo: 'home'}
 */