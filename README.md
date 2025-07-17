# JwtToken


JWT

JWTs are digitally signed JSON payloads, encoded in a URL-friendly string format. A JWT can contain any payload in general, but the most common use case is to use the payload to define a user session. To confirm if JWT is valid, we only need to inspect the token itself and validate the signature, without having to contact a separate server for that, or keeping the tokens in memory or in the database between requests.If JWTs are used for Authentication, they will contain at least a user ID and an expiration timestamp.


{
  "sub": "353454354354353453",
  "exp": 1504699256
}

The sub property contains the user identifier, and the exp property contains the expiration timestamp. This type of token is known as a Bearer Token, meaning that it identifies the user that owns it, and defines a user session.

This is 

{
  "sub": "353454354354353453",
  "exp": 1504699256
}

converted to this format 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNTM0NTQzNTQzNTQzNTM0NTMiLCJleHAiOjE1MDQ2OTkyNTZ9.zG-2FvGegujxoLWwIQfNB5IT46D-xC4e8dEDYwi6aRM'

A bearer token is a signed temporary replacement for the username/password combination!

The very first step for implementing JWT-based Authentication is to issue a bearer token and give it to the user, and that is the main purpose of a Login / Sign up page.
