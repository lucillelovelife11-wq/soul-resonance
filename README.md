# Soul Resonance V3

English-only multiplayer tarot conversation game.

## Run
`npm install` then `npm start`. Deploy as a Render Node Web Service.

## Images and licensing
The app links directly to Wikimedia Commons original Rider–Waite–Smith 1909 scans via `Special:FilePath` rather than bundling image files. This requires an internet connection, and some Commons file names may need verification. Original art: Pamela Colman Smith (1909), public domain. Modern recolorings are not included.

## Gameplay
Each player gets one private-to-them card per round (3 rounds). Each tarot card has a random upright/reversed orientation. With two players there are six total cards. The report offers an optional card reveal, showing only cards whose ratings are public or belong to the current player. A separate randomly chosen angel-inspired oracle message ends the report. Oracle messages and reflection text are authored game copy, not AI generated.

## Limitations
No LLM API is connected. The report uses deterministic template logic; there is no claim of true mind-reading. Room state is in memory and resets on Render restart.
