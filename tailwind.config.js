module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px', // Small screens, default breakpoint
        md: '768px', // Medium screens, default breakpoint
        lg: '1024px', // Large screens, default breakpoint
        xl: '1280px', // Extra-large screens, default breakpoint
        // Add more custom breakpoints if needed
      },
    },
  },
  plugins: [],
};
