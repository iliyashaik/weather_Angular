# ☁️ Weather App

Angular weather application with dynamic animated backgrounds that change based on real-time weather conditions.

## Features

- **Real-time weather data** — Search by city name or zip code using OpenWeatherMap API
- **Dynamic backgrounds** — Gradient backgrounds change based on weather (clear, rain, snow, clouds, thunderstorm, fog)
- **Weather animations** — Rain drops, snowflakes, drifting clouds, pulsing sun, twinkling stars, lightning flashes, and fog effects
- **Day/Night detection** — Different visuals for clear day vs clear night
- **Responsive design** — Centered layout that works on all screen sizes

## Tech Stack

- Angular 15
- OpenWeatherMap API
- CSS animations
- Firebase Hosting

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
ng serve
```

Navigate to `http://localhost:4200/`

## Adding Weather Characters

Place GIF or PNG images in `src/assets/` with these names:

| Weather | Filename |
|---|---|
| Rain / Drizzle | `rain-character.gif` |
| Snow | `snow-character.gif` |
| Clouds | `cloud-character.gif` |
| Clear (day) | `sunny-character.gif` |
| Clear (night) | `night-character.gif` |
| Mist / Fog | `fog-character.gif` |

## Build & Deploy

```bash
# Production build
ng build

# Firebase deploy
firebase login
firebase init
firebase deploy -m "commit message" --only hosting
```

## Author

**Iliyaz Shaik** — [GitHub](https://github.com/iliyashaik) · [LinkedIn](https://www.linkedin.com/in/iliyazshaik/) · [Email](mailto:iliyas.shaik3@gmail.com)


