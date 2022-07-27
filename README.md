# members-only

A project in The Odin Project to practice the basics of authentication.

## Demo

[Live Preview](https://salty-garden-66039.herokuapp.com/)

## Features

- Signup/Signin using an email and a password
- Authenticated users have the ability to post a message
- There are three roles: Guest, Member, and Admin
  - Guest
    - Can view messages but the author will be listed as unknown
  - Member
    - Can view messages and the author of that message
  - Admin
    - Can view anything and has the power to delete messages

## Lessons Learned

This project solidified my learnings about the basics of authentication from the previous lessons. The use of PassportJS to deal with signing user in and out, and persisting their data using cookies that is created after a successful login, for future use whenever we create a request on the protected routes. Learned how to secure the password of a user using the bcryptjs module, storing a hashed password in the database.

## Built with

[![Tech](https://skillicons.dev/icons?i=js,nodejs,express,mongodb,pug,heroku)](https://skillicons.dev)

## Acknowledgements

- [The Odin Project](https://www.theodinproject.com/)
