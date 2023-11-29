/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                heading: ["Play", "sans-serif"],
                paragraph: ["Quicksand", "sans-serif"],
                subHeading: ["Rajdhani", "sans-serif"],
            },
        },
    },
    plugins: [],
};
