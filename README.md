# react-stateevents-practice1

# Deliverables

You have a fake api response that is being exported from `api.js`. The response is an array of multiple `dog` objects that look like this:

> `{ "id": 1, "name": "Happy Slay", "img": "https://www.sciencenews.org/sites/default/files/2018/08/main/articles/082918_lh_crispr-beagles_feat_REV.jpg", "breed": "Beagle"}`

- You have a regular component called DogCard, a container component called DogsList, an App component
- On the DOM your application should show a list of dog images and a button for each image with an innerText that says "Bark"
- When a User clicks on the "Bark" button it should render an `<h2>` to the screen with an innerText that says "Bark"
- When a User clicks on the button a second time the "Ruff" should be removed from the DOM

Below you will find a gif of the completed app

# What are we practicing?

- Making decisions about when we need state and which component should hold state
- mapping through an array to render a list of components
- setState
- Event Handling in React

![dog gif](state-pairing-gif.gif)

HOMEWORK

1. Change the "bark" button on DogCard to a "favorite" button
2. The DogCard component will no longer render a new <h2> when the button is clicked
3. Create a FavoriteContainer
4. When a user clicks on the "favorite" button for a dog, that dog should be added to the FavoriteContainer
5. BONUS: figure out how to add multiple dogs to the FavoriteContainer
