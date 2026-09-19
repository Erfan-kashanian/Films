const movies = [
  {
    id: 1,
    title: "Mock Horizon",
    poster: "https://placehold.co/600x900/png?text=Mock+Horizon",
    country: ["USA"],
    year: 2025,
    genre: ["Action"],
    type: "movie",
    description: "Mock data created for testing the React application."
  },
  {
    id: 2,
    title: "Mock Midnight",
    poster: "https://placehold.co/600x900/png?text=Mock+Midnight",
    country: ["UK"],
    year: 2024,
    genre: ["Thriller"],
    type: "series",
    description: "Mock data created for testing the React application."
  },
  {
    id: 3,
    title: "Mock Tokyo Days",
    poster: "https://placehold.co/600x900/png?text=Mock+Tokyo+Days",
    country: ["Japan"],
    year: 2025,
    genre: ["Drama"],
    type: "documentary",
    description: "Mock data created for testing the React application."
  },
  {
    id: 4,
    title: "Mock Paris Story",
    poster: "https://placehold.co/600x900/png?text=Mock+Paris+Story",
    country: ["France"],
    year: 2023,
    genre: ["Comedy"],
    type: "short-film",
    description: "Mock data created for testing the React application."
  },
  {
    id: 5,
    title: "Mock Seoul Future",
    poster: "https://placehold.co/600x900/png?text=Mock+Seoul+Future",
    country: ["South Korea"],
    year: 2025,
    genre: ["Sci-Fi"],
    type: "movie",
    description: "Mock data created for testing the React application."
  },

  {
    id: 6,
    title: "Mock Fireline",
    poster: "https://placehold.co/600x900/png?text=Mock+Fireline",
    country: ["USA"],
    year: 2024,
    genre: ["Action"],
    type: "series",
    description: "Mock data created for testing the React application."
  },
  {
    id: 7,
    title: "Mock London Laughs",
    poster: "https://placehold.co/600x900/png?text=Mock+London+Laughs",
    country: ["UK"],
    year: 2025,
    genre: ["Comedy"],
    type: "documentary",
    description: "Mock data created for testing the React application."
  },
  {
    id: 8,
    title: "Mock Sakura",
    poster: "https://placehold.co/600x900/png?text=Mock+Sakura",
    country: ["Japan"],
    year: 2024,
    genre: ["Sci-Fi"],
    type: "short-film",
    description: "Mock data created for testing the React application."
  },
  {
    id: 9,
    title: "Mock French Shadow",
    poster: "https://placehold.co/600x900/png?text=Mock+French+Shadow",
    country: ["France"],
    year: 2025,
    genre: ["Thriller"],
    type: "movie",
    description: "Mock data created for testing the React application."
  },
  {
    id: 10,
    title: "Mock Seoul Family",
    poster: "https://placehold.co/600x900/png?text=Mock+Seoul+Family",
    country: ["South Korea"],
    year: 2023,
    genre: ["Drama"],
    type: "series",
    description: "Mock data created for testing the React application."
  },

  {
    id: 11,
    title: "Mock Desert Run",
    poster: "https://placehold.co/600x900/png?text=Mock+Desert+Run",
    country: ["USA"],
    year: 2023,
    genre: ["Thriller"],
    type: "documentary",
    description: "Mock data created for testing the React application."
  },
  {
    id: 12,
    title: "Mock British Future",
    poster: "https://placehold.co/600x900/png?text=Mock+British+Future",
    country: ["UK"],
    year: 2024,
    genre: ["Sci-Fi"],
    type: "short-film",
    description: "Mock data created for testing the React application."
  },
  {
    id: 13,
    title: "Mock Tokyo Smile",
    poster: "https://placehold.co/600x900/png?text=Mock+Tokyo+Smile",
    country: ["Japan"],
    year: 2023,
    genre: ["Comedy"],
    type: "movie",
    description: "Mock data created for testing the React application."
  },
  {
    id: 14,
    title: "Mock Paris Emotion",
    poster: "https://placehold.co/600x900/png?text=Mock+Paris+Emotion",
    country: ["France"],
    year: 2024,
    genre: ["Drama"],
    type: "series",
    description: "Mock data created for testing the React application."
  },
  {
    id: 15,
    title: "Mock Korean Chase",
    poster: "https://placehold.co/600x900/png?text=Mock+Korean+Chase",
    country: ["South Korea"],
    year: 2025,
    genre: ["Action"],
    type: "documentary",
    description: "Mock data created for testing the React application."
  },

  {
    id: 16,
    title: "Mock Ocean Mission",
    poster: "https://placehold.co/600x900/png?text=Mock+Ocean+Mission",
    country: ["USA"],
    year: 2025,
    genre: ["Sci-Fi"],
    type: "short-film",
    description: "Mock data created for testing the React application."
  },
  {
    id: 17,
    title: "Mock London Hearts",
    poster: "https://placehold.co/600x900/png?text=Mock+London+Hearts",
    country: ["UK"],
    year: 2023,
    genre: ["Drama"],
    type: "movie",
    description: "Mock data created for testing the React application."
  },
  {
    id: 18,
    title: "Mock Kyoto Mystery",
    poster: "https://placehold.co/600x900/png?text=Mock+Kyoto+Mystery",
    country: ["Japan"],
    year: 2025,
    genre: ["Thriller"],
    type: "series",
    description: "Mock data created for testing the React application."
  },
  {
    id: 19,
    title: "Mock French Action",
    poster: "https://placehold.co/600x900/png?text=Mock+French+Action",
    country: ["France"],
    year: 2023,
    genre: ["Action"],
    type: "documentary",
    description: "Mock data created for testing the React application."
  },
  {
    id: 20,
    title: "Mock Korean Comedy",
    poster: "https://placehold.co/600x900/png?text=Mock+Korean+Comedy",
    country: ["South Korea"],
    year: 2024,
    genre: ["Comedy"],
    type: "short-film",
    description: "Mock data created for testing the React application."
  },

  {
    id: 21,
    title: "Mock California Laugh",
    poster: "https://placehold.co/600x900/png?text=Mock+California+Laugh",
    country: ["USA"],
    year: 2024,
    genre: ["Comedy"],
    type: "movie",
    description: "Mock data created for testing the React application."
  },
  {
    id: 22,
    title: "Mock London Chase",
    poster: "https://placehold.co/600x900/png?text=Mock+London+Chase",
    country: ["UK"],
    year: 2025,
    genre: ["Action"],
    type: "series",
    description: "Mock data created for testing the React application."
  },
  {
    id: 23,
    title: "Mock Japanese Drama",
    poster: "https://placehold.co/600x900/png?text=Mock+Japanese+Drama",
    country: ["Japan"],
    year: 2024,
    genre: ["Drama"],
    type: "documentary",
    description: "Mock data created for testing the React application."
  },
  {
    id: 24,
    title: "Mock Paris Future",
    poster: "https://placehold.co/600x900/png?text=Mock+Paris+Future",
    country: ["France"],
    year: 2025,
    genre: ["Sci-Fi"],
    type: "short-film",
    description: "Mock data created for testing the React application."
  },
  {
    id: 25,
    title: "Mock Seoul Night",
    poster: "https://placehold.co/600x900/png?text=Mock+Seoul+Night",
    country: ["South Korea"],
    year: 2023,
    genre: ["Thriller"],
    type: "movie",
    description: "Mock data created for testing the React application."
  }
];

export default movies;