
import {quotes} from "../../../data"
import { NextRequest } from "next/server";

export async function GET(_request: NextRequest, {params}:{params: Promise<{id:string}>}){
    const {id}=(await params);
    const selectedQuote= quotes.find((quote)=> quote.id==Number(id));
    return Response.json(selectedQuote?.text, {headers:{
        "x-called-get": "true" 
    }});
} 

export async function PATCH(request: NextRequest, {params}:{params:Promise<({id: string})>}){
    const {id}=(await params);
    const {text, author}=await request.json();
    const quote=quotes.find((quote)=> quote.id==Number(id))
    if(!quote) return Response.json({
        error: "invalid id"
    }, {status: 400});
    if(author) quote.author=author;
    if(text) quote.text=text;
    return new Response("successfully modified!", {
        headers:{
            "x-called-patch": "true"
        },
        status:201
    });
}