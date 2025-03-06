// tailwind.config.ts
export default {
  darkMode: 'class',
  content: ['./app/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1E1E1E',
        stone: '#2C2A28',
        bamboo: '#D9C6A5',
        sage: '#7C8F7B',
        softwhite: '#E6E1DA',
      },
    },
  },
};
