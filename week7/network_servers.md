# Networking/Servers

## Notes

HTTPS (Hypertext transfer protocol):
- Protocol that allows resources to be requested & sent on internet
- [Status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- Types of requests
    - GET
    - POST
    - PUT & PATCH
        - (update)
    - DELETE
- Types of responses
    - 100-199: Informational Resources
    - 200-299: Successful Responses
        - 200 OK
        - 201 CREATED
    - 300-399: Redirect messages
    - 400-499: Client error responses
        - 404: Not found
    - 500-599: Server error responses
        - 500 Internal Server Error
        - 502 Bad Gateway

Testing Tools:
- Network Tab in Browser DevTools
- Ping
    - Check to see if you can get a response from server
- Curl
    - Way to request data from server
    - Used 4 testing APIs
- Postman
    - Made 4 testing APIs (curl wrapper)

Domain Name System (DNS):
- Computer don't understand [www.google.com](http://www.google.com) but they understand 11.11.11.11
- 11.11.11.11 is IP adress (Internet Protocol)
- Ping [www.google.com](http://www.google.com) in terminal and see what you get back

JS Fetch API:
- API: Application Programming Interface
- Fun APIs to try (no api key necessary)
    - https://imgflip.com/api
    - https://api.chucknorris.io/
    - https://pokeapi.co/
    - https://uselessfacts.jsph.pl/
    - https://github.com/beanboi7/yomomma-apiv2
    - https://techy-api.vercel.app/
- [List of free open apis](https://github.com/public-apis/public-apis?tab=readme-ov-file)
- Exercise: Work in teams and display data from an API

Ur Project:
- Client-side rendering (CSR):
    - Run API server in background
    - On page load, client fetches data from server
    - Server gets data from DB & sends it back to client
    - Client JS then renders data on html page
- Server-side rendering (SSR):
    - Using Next.js framework
    - Server fetches data from storage
    - Data gets rendered in html as template (What react does called hydration)
    - Send to client complete html file. No need to hydrate.

JS Server:
- Server framework 4 JS runtimes:
    - Node.js
    - Deno
    - Fastly
    - AWS
    - Cloudflare Worker
- Typescript-native
- https://hono.dev/
