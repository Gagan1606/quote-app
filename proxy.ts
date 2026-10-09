import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest){
    const apiKey=request.headers.get("x-api-key");
    if(!(request.method=="GET") && (!apiKey || ((apiKey) != process.env.X_API_KEY))) 
        return Response.json({error: "authentication failed"}, {status: 401});
    const response=NextResponse.next();
     response.headers.set("x-passed-mw", "true");
     return response;
};