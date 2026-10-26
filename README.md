# Soul Resonance V5 — no API fees

Node.js + Socket.IO multiplayer relationship tarot game. All UI is in English.

## Run

`npm install` then `npm start` (Node.js >=20). Deploy on Render using existing configuration. No OpenAI key is needed.

## Interpretations

The 78-card, upright/reversed reference `tarot-meanings.json` is a **new, short paraphrased keyword dataset** informed by human-written meanings at [Labyrinthos](https://labyrinthos.co/blogs/tarot-card-meanings-list). It is not a copied or licensed collection of the author's original prose. The app combines these meanings with original relationship reflections offline. No language model, usage billing, or online interpretation request. This improves card specificity but is still a rule-based system.

## Private messages

Each question allows the assigned rater to choose a recipient and write an optional 700-character message. Only the sender and recipient can see it, including in the final report. The message is held in the server's memory and disappears when the service restarts. The Save Message button is separate from Submit Rating; save before advancing the round.

## Testing

Test with two browsers/devices, both public and private rating, sending a note, receiving a note, and final report. The full 78-card Rider–Waite–Smith image links still depend on Wikimedia Commons.


## V6: Solo Readings
Four new solo spreads are available in the same spread selector: Career & Studies (5 cards), Two Paths (6 cards), How They May See Me (3 cards), and Yes or No? (1 card). Solo games start immediately, show one card at a time, and do not require ratings or other players. Questions and option labels are optional. Solo reports include every drawn card and a randomly selected angel oracle reflection. The yes/no output is deliberately qualified, not a factual prediction; the perception spread does not claim to read another person's mind. No paid AI API is used.
