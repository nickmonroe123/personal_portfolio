/** @type {import('tailwindcss').Config} */
const env = process.env.NODE_ENV;
var explosion_name = 'url("/bg-explosion.png")';
var circle_name = 'url("/bg-circles.png")';
var circleStarName = 'url("/circle-star.svg")';
var site_name_bg = 'url("/site-bg.svg")';
if(env == "development"){
    explosion_name = 'url("/bg-explosion.png")';
    circle_name = 'url("/bg-circles.png")';
    circleStarName = 'url("/circle-star.svg")';
    site_name_bg = 'url("/site-bg.svg")';
}
else if (env == "production"){
    explosion_name = 'url("bg-explosion.png")';
    circle_name = 'url("bg-circles.png")';
    circleStarName = 'url("circle-star.svg")';
    site_name_bg = 'url("site-bg.svg")';
}

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
