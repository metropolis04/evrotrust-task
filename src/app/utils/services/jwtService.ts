import jsrsasign from 'jsrsasign'
const token_secret = process.env.TOKEN_SECRET as string;
// const pswd = loginSecret
// const countPswd = "VQdlegHXBWCLOvq6aDxy"

export const jwt = (data?:Record<string, unknown>, time?: number) => {

const oHeader = {alg: 'HS256', typ: 'JWT'};
const tNow = jsrsasign.KJUR.jws.IntDate.get('now');
// const tEnd = jsrsasign.KJUR.jws.IntDate.get('now + 1days');
const tEnd = tNow + (time ?? 7000);
const oPayload = {
            ...data,
            iat  : tNow,
            exp  : tEnd,
};
  const sPayload = JSON.stringify(oPayload)							
  const sHeader = JSON.stringify(oHeader)

const sJWT = jsrsasign.KJUR.jws.JWS.sign("HS256", sHeader, sPayload, token_secret );					
return  sJWT;			
}


export const verifyJwt = (jwt:string | undefined) => {
  try {
    if (jwt) {
      const isValid = jsrsasign.KJUR.jws.JWS.verifyJWT(jwt, token_secret , {alg: ["HS256"]});
      return isValid
    }
  } catch(error) {
    console.log(error)
    return false
  }
}

export const getCrypto = (password:string) => {
  const md = new jsrsasign.KJUR.crypto.MessageDigest({ alg: "sha256", prov: 'cryptojs' });
  const hashCode = md.digestHex(password);
  return hashCode;
};

export function parseJwt<T> (token:string):T | false {
  try {
    if (token) {
      const parsedToken = jsrsasign.KJUR.jws.JWS.parse(token)
      return parsedToken.payloadObj as T
    } else {
      return false
    }
  } catch(error) {
    console.log(error)
    return false
  }
    
}
