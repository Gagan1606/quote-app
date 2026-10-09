import {quotes} from "../../data"
import {NextRequest} from "next/server";

export function GET(){
    return Response.json(quotes, {headers:{
        "x-called-get": "true" 
    }});
}

export async function POST(request: NextRequest){
    const {text}=await request.json();
    if(!text) return Response.json({
        error: "required field - text"
    }, {status: 400});
    quotes.push({ "id": quotes.length+1, "text": text, author: "NA"});
    return new Response("successfully added!", {
        status:201
    });
}

