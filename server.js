require('dotenv').config({ path: './config.env' });
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');


//Connect Database
connectDB();

const app = express();

app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/users.js'));
app.use('/api/auth', require('./routes/api/auth.js'));
app.use('/api/profile', require('./routes/api/profile.js'));
   
// Deployment
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
} 
 else  {
     app.get('/', (req, res) => {
         res.send('API running');
        app.use('/api/profile', require('./routes/api/profile.js'))
     });
    // app.use('/api/home')
}
// else()=>
// {
//     app.get('/routes/api/profile' ,function(req,res){
//         res.sendFile(path.join(__dirname,"CreateProfile.js"))
//     })
// }


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));