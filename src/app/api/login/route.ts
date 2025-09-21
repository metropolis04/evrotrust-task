import { jwt, getCrypto } from "@/app/utils/services/jwtService";
import type { NextRequest } from "next/server";
import dataUtils from "@/app/utils/users";

export async function POST(req:NextRequest) {

    const reqBody:{email:string, password: string} = await req.json();
    const loginData = dataUtils.findUser({ ...reqBody, password: getCrypto(reqBody.password) });
    if (loginData.success) {
        const nexttoken = jwt();
        return new Response(JSON.stringify({ ...loginData, token: nexttoken}), {
            status: 200,
            headers: {
                //   "Cache-control": "no-cache",
                     "Content-Type": "application/json",
                },
        })
    }
    else {
        return new Response(JSON.stringify({error: loginData.error}), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            }
        })
    }
}