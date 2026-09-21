# ❓ Quizzical

A quiz minigame built with Next.js and using API of [Open Trivia Database](https://opentdb.com). Test your trivia knowledge, get your score, and try again with the new questions in the next rounds!

## Tech stack

* **React 19** - UI library
* **Next.js 16** (App Router) - server actions
* **TypeScript** - type safety

## Project structure

```
├── app/
│   ├── components/
│   │   ├── Background.tsx
│   │   ├── Landing.tsx      # Landing display
│   │   ├── Game.tsx         # Main game component
│   │   ├── Card.tsx         # Card component (question &
│   │   │                      possible answers)
│   │   └── Answer.tsx       # Answer component with dynamic
│   │                          classes logic
│   ├── lib/
│   │   ├── data.ts          # Server actions - token management,
│   │   │                      fetching data, checking answers
│   │   └── types.ts         # TypeScript types definitions
│   ├── index.css            # Styling
│   ├── layout.tsx
│   ├── page.tsx             # Main game page
│   ├── loading.tsx
│   └── error.tsx
└── public/                  # Assets used for background
```

## Screenshots

![Screenshot of landing display.](public/screenshots/screenshot-1.png)

![Screenshot of a quiz with some answers selected by user.](public/screenshots/screenshot-2.png)

![Screenshot of a final display with correct answers highlighted green, wrong user-selected answers highlighted red, and user score.](public/screenshots/screenshot-3.png)