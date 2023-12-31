/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        animation: {
            none: 'none',
            spin: 'spin 1s linear infinite',
            ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
            pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            bounce: 'bounce 1s infinite',
        },
        borderRadius: {
            none: '0px',
            sm: '0.125rem',
            DEFAULT: '0.25rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
            full: '9999px',
        },
        columns: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            '3xs': '16rem',
            '2xs': '18rem',
            xs: '20rem',
            sm: '24rem',
            md: '28rem',
            lg: '32rem',
            xl: '36rem',
            '2xl': '42rem',
            '3xl': '48rem',
            '4xl': '56rem',
            '5xl': '64rem',
            '6xl': '72rem',
            '7xl': '80rem',
        },
        cursor: {
            auto: 'auto',
            default: 'default',
            pointer: 'pointer',
            wait: 'wait',
            text: 'text',
            move: 'move',
            help: 'help',
            'not-allowed': 'not-allowed',
            none: 'none',
            'context-menu': 'context-menu',
            progress: 'progress',
            cell: 'cell',
            crosshair: 'crosshair',
            'vertical-text': 'vertical-text',
            alias: 'alias',
            copy: 'copy',
            'no-drop': 'no-drop',
            grab: 'grab',
            grabbing: 'grabbing',
            'all-scroll': 'all-scroll',
            'col-resize': 'col-resize',
            'row-resize': 'row-resize',
            'n-resize': 'n-resize',
            'e-resize': 'e-resize',
            's-resize': 's-resize',
            'w-resize': 'w-resize',
            'ne-resize': 'ne-resize',
            'nw-resize': 'nw-resize',
            'se-resize': 'se-resize',
            'sw-resize': 'sw-resize',
            'ew-resize': 'ew-resize',
            'ns-resize': 'ns-resize',
            'nesw-resize': 'nesw-resize',
            'nwse-resize': 'nwse-resize',
            'zoom-in': 'zoom-in',
            'zoom-out': 'zoom-out',
        },
        fontFamily: {
            sans: ['Karla', 'sans-serif'],
        },
        fontSize: {
            xs: [
                '0.75rem',
                {
                    lineHeight: '1rem',
                },
            ],
            sm: [
                '0.875rem',
                {
                    lineHeight: '1.25rem',
                },
            ],
            base: [
                '1rem',
                {
                    lineHeight: '1.5rem',
                },
            ],
            lg: [
                '1.125rem',
                {
                    lineHeight: '1.75rem',
                },
            ],
            xl: [
                '1.25rem',
                {
                    lineHeight: '1.75rem',
                },
            ],
            h2: [
                '1.5rem',
                {
                    lineHeight: '2rem',
                },
            ],
            h1: [
                '1.875rem',
                {
                    lineHeight: '2.25rem',
                },
            ],
        },
        fontWeight: {
            thin: '100',
            extralight: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900',
        },
        leading: {
            none: 1,
            tight: 1.25,
            snug: 1.375,
            normal: 1.5,
            relaxed: 1.625,
            loose: 4,
        },
        opacity: {
            0: '0',
            5: '0.05',
            10: '0.1',
            15: '0.15',
            20: '0.2',
            25: '0.25',
            30: '0.3',
            35: '0.35',
            40: '0.4',
            45: '0.45',
            50: '0.5',
            55: '0.55',
            60: '0.6',
            65: '0.65',
            70: '0.7',
            75: '0.75',
            80: '0.8',
            85: '0.85',
            90: '0.9',
            95: '0.95',
            100: '1',
        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
    },
    plugins: [],
};
