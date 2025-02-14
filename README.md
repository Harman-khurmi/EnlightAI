Things I have added in this:
1. Globa, state management using react Context API for Dark/Light theme.
Context API: React provides a built-in tool called the Context API. You create a “context” (that central box) and a “provider” (the component that holds the box). This provider wraps around your entire app (or the parts that need access to the information).

Global State: Instead of passing the theme from one component to the next (which can get messy), we store it in one central place.
Context API: This is the tool that lets you create that central place.
Provider: This component gives every child component access to the central theme.
Custom Hook: This makes it super simple for any component to read or change the theme.

2. Used Auth0 for auto SignUp and use the login data of user.
create context for it to use isAuthenticated and user details throughout the project.

3. use Google Gemini API Key in config folder.
Again another context to get the promt from the main and throw the prompt result.

usestates are made for recentprompt, prevprompt , input and result.

4. tailwind scrollbar - to customise the scroll bar
5. npm install flowbite - to create the skeleton loading effect
