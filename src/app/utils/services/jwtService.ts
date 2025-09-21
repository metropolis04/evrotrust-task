const rs = require('jsrsasign');
const token_secret = process.env.TOKEN_SECRET as string;
// const pswd = loginSecret
// const countPswd = "VQdlegHXBWCLOvq6aDxy"

export const jwt = (data?:Record<string, unknown>) => {

var oHeader = {alg: 'HS256', typ: 'JWT'};
var tNow = rs.KJUR.jws.IntDate.get('now');
// var tEnd = rs.KJUR.jws.IntDate.get('now + 1days');
var tEnd = tNow + (data?.exp ?? 7000);
var oPayload = {
            ...data,
            iat  : tNow,
            exp  : tEnd,
};
  var sPayload = JSON.stringify(oPayload)							
  var sHeader = JSON.stringify(oHeader)

var sJWT = rs.KJUR.jws.JWS.sign("HS256", sHeader, sPayload, token_secret );					
return  sJWT;			
}


export const verifyJwt = (jwt:string | undefined) => {
  try {
    var isValid = rs.KJUR.jws.JWS.verifyJWT(jwt, token_secret , {alg: ["HS256"]});
    return isValid
  } catch(error) {
    console.log(error)
    return false
  }
}

export const getCrypto = (password:string) => {
  let md = new rs.KJUR.crypto.MessageDigest({ alg: ["sha256"], prov: 'cryptojs' });
  let hashCode = md.digestHex(password);
  return hashCode;
};

export const parseJwt = (token?:string) => {
  try {
    var parsedToken = rs.KJUR.jws.JWS.parse(token)
    return parsedToken.payloadObj
  } catch(error) {
    console.log(error)
    return false
  }
    
}
