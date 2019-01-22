const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload());


app.use(express.static('public'));

app.post('/uploads', function(req, res){

    //console.log('request: ', req.files.file)
    let file = req.files.file;
    const fileName = req.files.file.name

    file.mv(`./public/videos/${fileName}`, function(err) {
        if(err)
        return res.status(500).send(err);

        res.send('File Uploaded')
    })

    console.log('file: ', file)
    console.log('file name: ', fileName)
    //res.send(file);
})

module.exports = app;