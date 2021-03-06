# Tech Blog Application

## Description

This application is a CMS-style blog site following the MVC paradigm, using Handlebars.js, Sequelize, and Express.js.

## The Task

To build a CMS-style blog site similar to a wordpress site, where developers can publish their blog posts and comment on other develoeprs' posts as well. The site will be completely built from scratch and be deployed to Heroku. Follow the MVC paradigm in architectural structure, using Handlebars.js as the template, Sequelize as the ORM, and the express-session npm package for authentication.

## Acceptance Criteria

1. GIVEN a CMS-style blog site, WHEN I visit the site for the first time, THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in.
2. WHEN I click on the homepage option, THEN I am taken to the homepage.
3. WHEN I click on any other links in the navigation, THEN I am prompted to either sign up or sign in.
4. WHEN I choose to sign up, THEN I am prompted to create a username and password.
5. WHEN I click on the sign-up button, THEN my user credentials are saved and I am logged into the site.
6. WHEN I revisit the site at a later time and choose to sign in, THEN I am prompted to enter my username and password.
7. WHEN I am signed in to the site, THEN I see navigation links for the homepage, the dashboard, and the option to log out.
8. WHEN I click on the homepage option in the navigation, THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created.
9. WHEN I click on an existing blog post, THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment.
10. WHEN I enter a comment and click on the submit button while signed in, THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.
11. WHEN I click on the dashboard option in the navigation, THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post.
12. WHEN I click on the button to add a new blog post, THEN I am prompted to enter both a title and contents for my blog post.
13. WHEN I click on the button to create a new blog post, THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post.
14. WHEN I click on one of my existing posts in the dashboard, THEN I am able to delete or update my post and taken back to an updated dashboard.
15. WHEN I click on the logout option in the navigation, THEN I am signed out of the site.
16. WHEN I am idle on the site for more than a set time, THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments.


## Links

Here is a link to the deployed Heroku app: [Tech Blog App](https://tech-blog-app321.herokuapp.com/)

Here is a link to the application repository: [Tech Blog GitHub Repo](https://github.com/justinkemp10/tech-blog-application)

## Author

[Justin Kemp](https://github.com/justinkemp10)
