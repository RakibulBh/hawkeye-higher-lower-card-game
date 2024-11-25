# Hawk-Eye Software Engineering Challenge Documentation

## Approach

1st step - undestand the problem and break down every key function that we need in our game:
- Generating a random deck
- shuffling
- checking scores

Figure out the data store:
- Assign cards to values in a map which will help me decide which card is higher or lower than another.
- instead of generating every card hard coded, we can list all the clubs and valued and geberate the deck our selves by iterating over each card snd giving them 4 clubs.

## Objectives - Innovative Solutions

I have use Next.js, React.js, TailwindCSS which are all frameworks used to help me develop the applicatiom much faster, giving me more type to solve the problem and time saved on development, re usable components in react allow me to not use diplicated code and keep things as efficient as possible by creating components which could be re-used for various different use cases.

## Problems Faced

When score was being checked if it was 0 after deducting a point, it wouldnt recognise it was a 0 until the next click even though user lost.
- This took me a while to solve however I remembered learning how react only updates its changes until the next render, which means in the dame render i cannot access the updated state, i fixed this easily by implementing a new variable that tracks the updated score.

Another issue i had was a function of mine not working and being called, i knew this was not being called beause i used a print function inside the function to debug my function, when i saw the statement was not printing i realised that there is an issue when calling the function and turns out i had not called it properly.

## Evaluation

i believe i don't a good job om the task, i challenged myself to not just create a CLI app but an app with an actual interface.

Although it went well, I have a lot it improvements to make and such are:
- Create better UI, to give it a game look
- Make it responsive, so any device is able to play it.
- Better messages, give toast notificstions or other messages to better tell the player if they were wrong or right
- Sounds, sounds are key go any game, adding sounds would engance user experience
