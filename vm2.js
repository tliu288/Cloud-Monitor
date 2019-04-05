const Express = require("express");
var fs = require('fs');
var app = Express();

const port = process.env.PORT || 10000;
const server = app.listen(port, function(){
    console.log('listening on port ' + port);
});

var logdata;

// Start VM
app.post("/instance/start/:id", (request, response) => {
    logdata = "Virtual machine: [" + request.params.id + "]     Event: Start      TimeStamp : " + new Date() + "\n";
    console.log(logdata);

    fs.appendFile("log.txt", logdata, function(err, logdata) {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });

});

// Stop VM
app.post("/instance/start/:id", (request, response) => {
    logdata = "Virtual machine: [" + request.params.id + "]     Event: Stop      TimeStamp : "+ new Date() + "\n";
    console.log(logdata);

    fs.appendFile("log.txt", logdata, function(err, logdata) {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });

});

app.get("/instance/upgrade/:id", (request, response) => {
    logdata = "Virtual machine: [" + request.params.id + "]     Event: Upgrade      TimeStamp : "+ new Date() + "\n";
    console.log(logdata);

    fs.appendFile("log.txt", logdata, function(err, logdata) {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });

});

app.get("/instance/downgrade/:id", (request, response) => {
    logdata = "Virtual machine: [" + request.params.id + "]     Event: Downgrade      TimeStamp : "+ new Date() + "\n";
    console.log(logdata);

    fs.appendFile("log.txt", logdata, function(err, logdata) {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });
});

app.get("/instance/delete/:id", (request, response) => {
    logdata = "Virtual machine: [" + request.params.id + "]     Event: Delete     s TimeStamp : "+ new Date() + "\n";
    console.log(logdata);

    fs.appendFile("log.txt", logdata, function(err, logdata) {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });
})

