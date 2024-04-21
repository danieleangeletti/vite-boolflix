BoolFlix

In this exercise, we begin to replicate the logic behind many websites that allow viewing movies and TV shows.
Like much more renowned sites, we will use an API that enables us to have a set of results relevant to our search.

Milestone 0:
Design the structure of the global state along the lines of the exercises done in the previous days.

Milestone 1:
Create a basic layout with a search bar (an input and a button) where we can write completely or partially the name of a movie. By clicking the button, we can search the API for all movies containing what the user has written.
After the API response, we want to display the following values for each movie found:
Title
Original Title
Language
Rating

Milestone 2:
Transform the static language string into an actual flag of the corresponding nation, managing the case where we do not have the flag of the nation returned by the API (flags are not in FontAwesome).
Then expand the search to TV series as well. With the same search action, we must take both movies and TV series that match the query, being careful to end up with similar values (the series and movies have different fields in the JSON response, similar but not always identical).
Here's an example call for TV series:
https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs

Milestone 3:
In this milestone, first, we add the movie or series cover to our list. The API only passes us the final part of the URL because then we can generate many different sizes from that portion of the URL.
We must therefore take the base URL of the images from TMDB:
https://image.tmdb.org/t/p/ then add the size we want to generate (we find all possible sizes at this link:
https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) and then add the final part of the URL passed by the API.
Example URL:
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
Then we transform the vote from a decimal from 1 to 10 into an integer from 1 to 5, so we can display on the screen a number of full stars ranging from 1 to 5, leaving the remaining empty (we find the icons in FontAwesome).
Always round up to the next whole number, we do not manage half-full (or half-empty :P) icons.

Milestone 4:
Transform what we have done so far into a real web app, creating a complete layout similar to Netflix:

● A header that contains the logo and search bar

● After searching for something in the search bar, the results appear in the form of "cards" where the background is represented by the cover image (I recommend the poster_path with w342)

● When hovering over a card, additional information already taken in previous points plus the overview appears
