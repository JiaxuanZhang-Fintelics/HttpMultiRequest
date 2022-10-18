const axios = require('axios');

/**
 *  Async function that uses Axios to send requests
 */
async function send(Url,Method,Body=null,times=5,Headers=null){
    try{
        for(let i=0;i<times;i++){
            const res=await axios({
                method:Method,
                url:Url,
                data:Body,
                headers:Headers
            });
            console.log(res.status);
        }
    }
    catch(err){
        console.log(err);
    }
}

// demo code
const data=JSON.parse('{}');
data.result=true;
send("http://localhost:8000/111","post",JSON.stringify(data), 10,{'Authorization': 'Basic xxxxxxxxxxxxxxxxxxx',"Content-Type": "application/json"} );