#RHMAP-AUTH
A library to validate RHMAP platform credentials. The lib is used in RHMAP cloud node.js app to check if credentials are in RHMAP platform.

##Installation

```
npm install rhmap-auth --save
```


##Usage

```js
var rhmapAuth=require("rhmap-auth");
rhmapAuth(username,password,function(err,isValid){
  if (err){
    //error handler
  }else{
    if (isValid === true){ //user is valid

    }else{ // user is not valid

    }
  }
});
```
