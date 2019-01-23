const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const savedVideos = [];

app.use(fileUpload());

app.use(express.static('public'));

app.post('/api/upload', function(req, res){

    let file = req.files.file;
    const fileName = req.files.file.name
    savedVideos.push(fileName)

    file.mv(`./public/videos/${fileName}`, function(err) {
        if(err)
        return res.status(500).send(err);

        res.send({
            status: 'File Uploaded',
            content: savedVideos
        })
    })
})


module.exports = app;
