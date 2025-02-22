/**@Type{import('tailwindcss').config}*/

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                custom: ['Rubik Mono One', 'monospace'],
            }
        },
    },
    plugins: [],
    }