const quotes = [
  {
    source: "Consolation to Helvia",
    text: `Being without your country is not misery: you have thoroughly taught yourself by your studies to know that to a wise man every place is his country.`,
  },
];

export default quotes.map((quote) => ({
  ...quote,
  author: "Seneca",
}));
