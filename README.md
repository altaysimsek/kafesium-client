# CS2 Arena

CS2 Arena is a tournament and matchmaking platform developed for Counter-Strike 2 players. You can easily log in with Steam integration, join tournaments, and compete with other players.

## Features

- 🎮 Easy login with Steam
- 🏆 Tournament system
- 👥 Team creation and management
- 📊 Leaderboard
- 🎯 Matchmaking system
- 🌐 Modern and responsive design

## Technologies

- **Frontend:**
  - Next.js 14
  - React 19
  - TypeScript
  - Tailwind CSS
  - Lucide Icons

- **Backend:**
  - Node.js
  - Express
  - MySQL
  - Steam API

## Getting Started

### Requirements

- Node.js 18 or higher
- npm or yarn
- MySQL
- Steam API key

### Installation

1. Clone the project:
   ```bash
   git clone https://github.com/yourusername/cs2-arena.git
   cd cs2-arena
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file:
   ```env
   NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
   STEAM_API_KEY=your_steam_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
cs2-arena/
├── src/
│   ├── app/              # Next.js app router
│   ├── components/       # React components
│   ├── contexts/         # React contexts
│   ├── lib/             # Helper functions
│   ├── types/           # TypeScript types
│   └── styles/          # Global styles
├── public/              # Static files
└── prisma/             # Database schema
```

## Contributing

1. Fork this repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push your branch (`git push origin feature/amazing-feature`)
5. Create a Pull Request

## License

## Contact


