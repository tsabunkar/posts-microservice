# What is a Microservice ?

- Monolithic Server
  - A monolith contains all routing, all middlewares, all business logic, all database access required to implement ALL feature of our application.
  - [assets/monolithic-server]
- Microservice Server
  - A single microservice contains all routing, all middlewares, all business logic, all database access to implement ONE feature of our application.
  - all service are self contained and isolated from each other
  - If suppose other service-B has crashed/down it will not effect any other service.
  - All service are stand-alone
  - [assets/microservice-server]

---

# Challenge with Microservice

- Data management between services (way in which we store data and communicate that data between different service)challenging
  - Reason why data management b/w service is difficuilt:
    - With microservice, we store and access data in sort of strange way:
      - How we store data : Each service gets its own database (if service needs one)
      - How we access data : Service will never, ever reach into another service database [assets/never-access.png]
- Reason Why Database-Per-Service (Each service gets its own database)
  - We want each service to run independently of other services ==> (Problem of having shared db for all the service is- if db is crashes all the service will be down, scaling of db is challenging [assets/shared-db.png])
  - Database schema/structure might change unexpectedly ==> (Suppose of DB of B Team changes the schema and didn't inform the Service A Team, then Service A functionality might disrupt [assets/disrupt-schema.png])
  - Some services might function more efficiently with different types of DB's (sql vs nosql)
- Reason Why One Service-A depends on DB for B (other service db) is bad idea
  - If suppose DB for B crashes then - both service A and Service B will be down
  - [assets/cross-depends-db.png]
- Main challenge with microservice - since we don't allow service to access other services db, but if a service want to access data between multiple db (like join) then how can we achieve it ?

## To solve above problem-

- Communication strategies between services can be done in 2 ways

  1. Sync (Synchronous)
  2. Async (Asynchronous)

- NOTE: This sync and async is not same as what meant in JS world.
- Sync Communication b/w services :
  - Services communicate with each other using direct requests.
  - i.e.- direct request from service A to service B to fetch the required data from DB of B
  - [./assets/sync.png]
  - Pros:
    - Conceptually easy to understand
    - Service D won't need a db
  - Cons:
    - Introduce a dependency between services
    - If any inter-service request fails, the overall request fails
    - The entier request is only as fast as the slowest request
    - Can easily introduce webs of requests. (web/inter of dependencies)
- Async Communication b/w services :
  - Sevices commuincate with each other using events.
  - Async commuincation b/w services can be done 2 ways:
    1. Event based commuincation
    2. Database-per-service with event-bus

1. Event Based communication :

- Introduce Event Bus/ Event Broker, which can be accessible by all the services
- Each service is connected to event bus, Each service can emit event to event bus (or) recieve event from event bus.
- This is not good approach bcoz - It has all the cons of the Sync Communication + Conceptually difficuilt to understand.
- [assets/event-bus.png]

2. Database-per-service with event-bus:

- Create separate db for Service D whose schema is very specific to this service.
- Request to create a product, This will flow to service B which will store in DB for service B and also makes an additional request to Event Bus/broker, then event bus will send this request to Service D as it is interested/subscribed to consume this event and then storing this record in database of D.
- [assets/db-per-service.png][assets/database-per-service-event-bus.png]
- Pros :
  - Service D has zero dependencies on other services.
  - Service D will be extermely fast bcoz it has everything stuffed in his db (Might have duplication of columns and records)
- Cons :
  - Data duplication. Paying for extra storage + extra DB ==> (Cloud computing made db very cheap)
  - Conceptually tricky to understand
