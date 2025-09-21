import { jwt } from "@/app/utils/services/jwtService";
import type { NextRequest } from "next/server";
import dataUtils from "@/app/utils/users";

export async function POST(req:NextRequest) {

    const reqBody = await req.json();
    const emailVerified = dataUtils.checkEmail(reqBody.email);
    if (emailVerified.success) {
        const nexttoken = jwt({ ...reqBody, reset: true }, 86400);
        return new Response(JSON.stringify({ ...emailVerified, token: nexttoken}), {
            status: 200,
            headers: {
                //   "Cache-control": "no-cache",
                     "Content-Type": "application/json",
                },
        })
    }
    else {
        return new Response(JSON.stringify({error: emailVerified.error}), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            }
        })
    }
}