# Projects microservices

- Posts:
  - Create a Post
  - List all Posts
  - [assets/post-services.png]
- Comments:
  - Create a comment
  - List all comments
- [assets/services-project.png]
- Architecture Design: [assets/arch-services.png]

---

# Project Set-up

- Generate a new React App using Create-React-App
- Create an Express-based project for the Posts Service
- Create an Express-based project for the comments Service

---

# Steps

- npx create-react-app client (or install this dependency globally, then install client project)
- (or) create-react-app client
- mkdir posts
- cd posts
- npm init -y
- npm i express cors axios body-parser
- npm i -D nodemon
- cd ..
- mkdir comments
- cd comments
- npm init -y
- npm i express cors axios body-parser
- npm i -D nodemon
