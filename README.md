innosabi engineer backend challenge
===================================

innosabi has an API available under https://idea.innosabi.com/api/v4/suggestion that can be used to search
suggestions. With no further parameters given, it will return all accessible suggestions. Not authenticated users
therefore get an empty result.

We have created a user account for you to authenticate against the innosabi API. And your task is to create an api
that offers the search capability of the innosabi API just without any authentication required. Clients that use
your API then don't need to learn about the authentication possibilities of the innosabi API. They can focus on
the search functionality right away.

### User Story
As a frontend developer 
I have an endpoint that I can use for building a publicly available application that can search 
suggestions created on the innosabi spark platform.

As a frontend developer
the endpoint should only let me use include, filter, order, limit and page query-parameters from the innosabi API.

As a third party developer
I need the API to not require any sort of authentication. I need to be able to implement my own client
with no further authentication necessary.

### Acceptance Criteria
- Can send GET requests to ``[yourApplication]/api/suggestion`` and will see results
- Requests with any other HTTP Method are denied
- Can use query-parameters from user story - they are forwarded to the innosabi API
- Failures due to wrong use of query parameters result in an error response
- Your application supports different innosabi environments (we do have a staging environment with a different host)
- The docker-compose.yml can be used for running your application with webdevops/php-nginx-dev:7.4-alpine

### Authentication
To authenticate for performing requests please use basic access authentication.

``
Username: api@innosabi.com
Password: 0thRuch0
``
