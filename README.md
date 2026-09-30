# ❓ Quizzical

A quiz minigame built with Next.js and using API of [Open Trivia Database](https://opentdb.com). Test your trivia knowledge, get your score, and try again with the new questions in the next rounds!

## Tech stack

* **React 19** - UI library
* **Next.js 16** (App Router) - server actions
* **TypeScript** - type safety
* **Tailwind CSS** - styling
* **Next Themes** - theme management

## Project structure

```
├── app/
│   ├── components/
│   │   ├── Background.tsx
│   │   ├── Landing.tsx      # Landing display
│   │   ├── Game.tsx         # Main game component
│   │   ├── Card.tsx         # Card component (question &
│   │   │                      possible answers)
│   │   ├── Answer.tsx       # Answer component with dynamic
│   │   │                      classes logic
│   │   └── ThemeSwitch.tsx  # Button for toggling themes
│   ├── lib/
│   │   ├── data.ts          # Server actions - token management,
│   │   │                      fetching data, checking answers
│   │   └── types.ts         # TypeScript types definitions
│   ├── svgs/                # Graphics for background & theme switch
│   ├── index.css            # Tailwind custom variables
│   ├── layout.tsx
│   ├── page.tsx             # Main game page
│   ├── loading.tsx
│   └── error.tsx
└── public/                  # Image assets
```

## Screenshots

<div>
    <img src="public/screenshots/screenshot-1.png" alt="Screenshot of landing display. Light mode." width="416" />
    <img src="public/screenshots/screenshot-2.png" alt="Screenshot of a quiz with some answers selected by user. Light mode." width="416" />
</div>

<div>
    <img src="public/screenshots/screenshot-3.png" alt="Screenshot of a final display with correct answers highlighted green, wrong user-selected answers highlighted red, and user score. Light mode." width="416" />
</div>

<h3>Dark mode</h3>

<div>
    <img src="public/screenshots/screenshot-4.png" alt="Screenshot of a quiz with some answers selected by user. Dark mode." width="416" />
    <img src="public/screenshots/screenshot-5.png" alt="Screenshot of a final display with correct answers highlighted green, wrong user-selected answers highlighted red, and user score." width="416" />
</div>

<h3>Dark mode on mobile</h3>

<div>
    <img src="public/screenshots/screenshot-6.png" alt="Screenshot of a quiz with some answers selected by user. Dark mode. Mobile, portrait orientation." height="600" />
    <img src="public/screenshots/screenshot-7.png" alt="Screenshot of a final display with correct answers highlighted green, wrong user-selected answers highlighted red, and user score. Dark mode. Mobile, portrait orientation." height="600" />
</div>