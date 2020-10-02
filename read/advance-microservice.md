# Problem with Monolithic Applications

- No frequent and easy release
- Inadequate support for a continous delivery
- Team and project management is difficult (team dependencies)
- High cost for scalability and performance
- Minimal technology diversity
- Less portable bcoz tightly coupled

## Forcing Driving Microservice Adoption

- Need new team members to become quickly productive
- Easy to understand and modify applications
- Practice Continous Deployment
- Run multiple application copies on multiple machines for scalability and availability
- Take advantage of emerging technologies such as frameworks, programming language

# Microservices Benefits

- Microservices are relatively small
  - Easier to understand
  - Faster IDE - increasing productivity
  - Applications starts faster - speeding up deployments
- Easier-to-scale development
- Improved fault isolation
- Can be deployed independently
- No long-term commitment to a technology stack

# Microservices Challenges

- Complex distributed system
- IDEs do not support distributed applications development, bcoz developer tools/IDE are oriented on building monolithic applications with no explicit support for developing distributed applications.
- Testing Complexity (Integeration testing)
- Developers must implement the inter-service communication mechanism
- Multipe services use case implementation without using distrbuted transactions
- Implementing use cases that span multiple service requires careful coordination between the team.

---

# Data Consistency

- Data consistency

  - Atomicity
  - Consistency
  - Isolation
  - Durability

- CAP Theorem : Consistency, Availability and Partition

  - Consistency: Every read gets us the most recent write
  - Availability: Every node (if not failed) always executes queries
  - Partition tolerance: When connections between nodes are down, the other two (A and C) promises are kept
  - [assets/data-consistency.png]
  - NOTE : no db (sql or nosql) uptill now can claim that it can provide all the - Consistency, Availability and Partition in CAP theorem

- Data Consistency in Microservice architecture
  - Strong consistency is hard in distributed services
  - Even harder with microservices as they own their data
  - Strong consistency only inside a microservice
  - Dependency on the data schema
  - Dependency on the actual collected data
- [assets/data-consistency-microservice.png]
- Data consistency Types:
  1. Strong consistency:
  - Subsequent accesses to a distributed system always return the updated value
  2. Weak consistency:
  - Used in distributed computing where Subsequent accesses do not always return an updated value
  - Inconsistent responses
  3. Eventual consistency
  - Special type of weak consistency method
  - Guarantees last update value return if no new updates are made to a given data item.

---

# CQRS Pattern (Command Query Responsibility Segregation)

- Let us assume we have application which we need to spilt to
  - Command Side
  - Query Side
- Command Side : Takes the responsibilities like - CREATE, UPDATE, DELETE and REQUEST, it will also emit different type of events whenever there is change in the data
- Query Side : Takes the responsibilities of executing them against one or more materialized view by subscribing to data-stream or events whenever the data changes

---

# Decompose by Bussiness Capability (Decompose large monolithic app into microservices by business capability)

- Identifiy Bussiness Capability:
  - Services which are required to have proper understanding about businesses
  - Identify the organization structure, business processes, area of operations, agile or iterative process

---

# Decompose by subdomain

- Advantage of decompose by subdomain- easy to do integration test
- Forces driving service decomposition with domain
  - Need for stable architecture
  - Cohesive services
  - Services conform common principles (Changes on one service should have min impact over other services)
  - Testable services

---

# Database per Service Pattern

- each microservice persist its data private to one db and its data is accessible by API
- if impact/down/hacked on one db, will not impact any other db

---

# API Gateway Pattern

- API Gateway Pattern is used in microservice to facility Routing
- It defines How microservice based application will access different isolated services
- Need to focus on - network performance, no of service instance, partition of services, etc
- It provides single entry point to all the clients and API Gateway Responsibility to handle request

---

# Microservice Chassis Pattern

- Development Time can be impacted by handling various mechanism is called as ==> Cross-cutting concerns
- Generally in microservice arch we use - different infrastructure services, databases, message-brokers, api gateway, service registration, service discovery etc (These are all Cross-cutting concerns)
- Microservice Chassis Pattern --> Objective is to reduce the time for microservice configuration/development
- example of Microservice Chassis Pattern in Java is Spring Boot- H2 db, Spring cloud, eureka Dicovery, cloud security, cloud Oauth2, euul, etc just by selecting them in STS (Spring tool suite)

---

# Externalized Configuration

- All services are made up of 2 parts:
  - first part- code written for actual bussines process
  - second part- configuration, parameters
- Externalized Configuration --> helps to idenify various important confiuration like- db url/uname/password, server location, dicovery, service location which should not be exposed to external world

---

# Multiple Services per Host

- Registering mutliple services to single host per server
- First create -> server Application
- then using this application register all your discovery server/service
- Eureka Discover service is provide in Spring Boot world

---

# Pattern Choices

- Patterns are well derived solution for existing problem
- Monolithic App have patterns like - Layered architecture pattern
- Microservices Pattern Classification:
  - Decomposition pattern [Breakdown monolithic app to small components]
  - Deployment pattern [provide type of deployment which can be choosed for a scenario]
  - Cross-cutting pattern [transaction, management and security]
  - Communication styles [async or synchronous commun, messages commun, req-resp commun]
  - External API [exploit API to provide access to web-services]
  - Service discovery pattern [Services are dicoverable]
  - Data management pattern
  - Reliability pattern
  - Observability pattern
  - UI pattern

## Microservices Deployment Patterns

- Types of Microservice Deployment patterns
  - Multiple service instance per host
  - Service instance per host
  - Service instance per VM
  - Service instance per container
  - Serverless deployment
  - Service deployment platform

## Microservices Discovery Patterns

- Types of Microservice Discovery Patterns
  - Client-side discovery
  - Server-side discovery
  - Service registry
  - self-registration
  - Third-party registration
- [assets/Microservice-Discovery-Patterns.png]

## Microservices Observability Patterns

- Microservice must be under strict observabtion and we need to record these observations. We do so inorder to ensure if there are issues or problems, so that we can trace and analyze the Root cause
- Some of the Observabtion which can be used are:
  - Log aggregation
  - Application metrics
  - Audit logging
  - Distributed tracing
  - Exception tracting
  - Health check API
  - Log deployments and changes

## Microservices Data Management Patterns

- Database per service
- Shared database
- Saga
- API Composition
- CQRS
- Event Sourcing
- Transaction log tailing
- Database triggers
- Application events

---

- circuit breaker
