/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            height: {
                chatListWrapper: 'calc(100% - 4rem)',
                chatListContainer: 'calc(100% - 2.5rem)',
            },
            maxHeight: {
                chatListWrapper: 'calc(100% - 4rem)',
                chatListContainer: 'calc(100% - 2.5rem)',
            },
        },
    },
    plugins: [],
};
