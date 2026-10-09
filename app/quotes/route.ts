export function GET(request: Request){
    return Response.redirect(new URL("/api/quotes", request.url));
}