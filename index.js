var request=require("request");
module.exports=function(username,password,cb){
  var url=getUrl();
  
  var body=getBody(username,password);
  request({
    url:url,
    method:"POST",
    body:body,
    json:true
  },function(err,res,body){
    if (err){
      cb(err);
    }else {
      if (res.statusCode >=400){
        cb(body);
      }else{
        cb(null,body.result.toLowerCase()==='ok');
      }
    }
  });
};

function getUrl(){
  return "https://"+process.env.FH_MILLICORE+"/box/srv/1.1/act/sys/auth/login";
}

function getBody(username,password){
  return {
    d:process.env.FH_MILLICORE.split(".")[0],
    p:password,
    u:username
  };
}