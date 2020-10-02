# Request Minimisation Strategy

- Downfall of current situation is - For every Post Request made we get array, for each and every post request we need to make follow-up requests to comment microservice (Thus adding up network costs to all the comments requests)
- ./assets/inefficient-request.png
- Thus to make this efficient (in persepctive of network calls) - We need to make one posts request and get all the associated comments for that posts
- Easy Solved in Monolithic architecture : ./assets/request-min.png (Since both the Services (i.e- Posts and Comments) are in same project)
- To Solve with Microservices architecture : ./assets/request-min-mc.png (2 Solutions)
  - Sync Communication: In Post Service we will write business logic which will request comments service to provide all the comments with specific commentId once response recieved in posts service then embeed this response in to the posts response and send back to client. (Sort of Microservices Communication) [.assets/sync-comm.png] (Thus its easy to understand but not the best solution in engineering perspective)
    - Cons of this Sync Communication technique
      - Introduces dependency b/w services.
      - If any inter-service request fails, the overall request fails
      - The entire request is as fast as the slow request
      - Can easily introduce webs of requests
  - Async Communication: Introduces Event Broker
    - purposes of this event broker is to take/recieves the events/notification from one microservice and the send them on to interested parties
    -
