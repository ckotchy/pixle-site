// Load Node modules
var express = require('express');
const fs = require('fs');
const request = require('request');

// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));

app.set('PORT', process.env.PORT || 8080);

app.get("/api", (req, res) => {
    res.end('"OK"');
});

const hiddenUrl = "https://gateway.pinata.cloud/ipfs/QmZfXt7oDh5XGFUXVMYm2FhBq4DjJVPTpgj4FB6nJXTT4G";

app.get("/api/:id", (req, res) => {
    var id = req.params.id;
    
    
    fs.readFile(__dirname + '/' + 'map.json', 'utf8', (err, data) => {
        if(err){
            console.log(err);
            res.end("Invalid API call");
        } else{
            var url_mapping = JSON.parse(data);
            var pinata_url = url_mapping[id];
            if(pinata_url != undefined && pinata_url != null){
                console.log("Attempting to retrieve data from: " + pinata_url);
                let options = {json: true};
                request("https://" + pinata_url, options, (error, response, body) => {
                    if(error){
                        return console.error(error)
                    }
                    if(!error && res.statusCode == 200){
                        res.end(JSON.stringify(body))
                    }
                })

            } else{
                res.end("This token hasn't been revealed");
            }
        }
    });
});

app.get("/api/hidden/:id", (req, res) => {
    let options = {json: true};
    request(hiddenUrl, options, (error, response, body) => {
        if(error){
            return console.error(error)
        }
        if(!error && res.statusCode == 200){
            res.end(JSON.stringify(body))
        }
    })
});

// Port website will run on
console.log("started!")
app.listen(app.get('PORT'), () => console.log(`Node server listening on port ${app.get('PORT')}!`));