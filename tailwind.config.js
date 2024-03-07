/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F3F3F3',
        // primary
        'primary': {
          DEFAULT: '#2B3499',
          '50': '#E8F1FC',
          '100': '#C8DEFA',
          '200': '#A8CAF6',
          '300': '#88B6F2',
          '400': '#68A2EE',
          '500': '#5D8DE7',
          '600': '#4A68DA',
          '700': '#2B3499',
          '800': '#0E1459',
          '900': '#070B31',
        },
        // green
        'green': {
          DEFAULT: '#21534A',
          '50': '#E7ECEC',
          '100': '#C9D7D4',
          '200': '#ADC1BD',
          '300': '#91ABA6',
          '400': '#75958F',
          '500': '#597F78',
          '600': '#426D65',
          '700': '#21534A',
          '800': '#163731',
          '900': '#132F2A',
        },
        // orange
        'orange': {
          DEFAULT: '#D15939',
          '50': '#FBF4EA',
          '100': '#F7EAD7',
          '200': '#F4D7C5',
          '300': '#EFC5B1',
          '400': '#EAB39D',
          '500': '#E08F75',
          '600': '#DB7D61',
          '700': '#D15939',
          '800': '#702E1C',
          '900': '#3E180E',
        },
        // violet
        'violet': {
          DEFAULT: '#D07CBD',
          '50': '#FCF3F7',
          '100': '#F8DEEB',
          '200': '#F5CFE2',
          '300': '#F3C3DB',
          '400': '#F1B7D4',
          '500': '#EFABCD',
          '600': '#ED9FC6',
          '700': '#D07CBD',
          '800': '#B258B4',
          '900': '#650E8B',
        },
        // warning
        'warning': {
          DEFAULT: '#FE7811',
          '50': '#FFF7ED',
          '100': '#FEE4CB',
          '200': '#FED2AC',
          '300': '#FEC08D',
          '400': '#FEAE6E',
          '500': '#FE9C4F',
          '600': '#FE8A30',
          '700': '#FE7811',
          '800': '#B24E01',
          '900': '#7A3501',
        },
        // error
        'error': {
          DEFAULT: '#FF3333',
          '50': '#FFF1F1',
          '100': '#FFD5D5',
          '200': '#FFBABA',
          '300': '#FF9F9F',
          '400': '#FF8484',
          '500': '#FF6969',
          '600': '#FF4E4E',
          '700': '#FF3333',
          '800': '#CC0000',
          '900': '#9E0000',
        },
        // success
        'success': {
          DEFAULT: '#2EBB2C',
          '50': '#F2FCF1',
          '100': '#D6F1D4',
          '200': '#BAE8B8',
          '300': '#9EDF9C',
          '400': '#82D680',
          '500': '#66CD64',
          '600': '#4AC448',
          '700': '#2EBB2C',
          '800': '#196718',
          '900': '#0C320C',
        },
        // shades
        'shades': {
          DEFAULT: '#FFFFFF',
          '0': '#FFFFFF',
          '50': '#F3F3F3',
          '100': '#e8e8e8',
          '200': '#b5b5b5',
          '300': '#8c8c8c',
          '400': '#8a8a8a',
          '500': '#6b6b6b',
          '600': '#545454',
          '700': '#333333',
          '800': '#000000',
        },
      },
      fontSize: {
        'display1-desktop': ['111px', '111px'],
        'display1-mobile': ['64px', '64px'],
        'display2-desktop': ['89', '89px'],
        'display2-mobile': ['54px', '54px'],
        'display3-desktop': ['71px', '71px'],
        'display3-mobile': ['48px', '48px'],
        'display4-desktop': ['57px', '57px'],
        'display4-mobile': ['40px', '40px'],
        'display5-desktop': ['45px', '45px'],
        'display5-mobile': ['36px', '36px'],
        'display6-desktop': ['36px', '36px'],
        'display6-mobile': ['32px', '32px'],
        'h1-desktop': ['92px', {

          fontWeight: '700',
          lineHeight: '110.4px'
        }
        ],
        'h1-mobile': ['48px', {

          fontWeight: '500',
          lineHeight: '57.6px'
        }
        ],
        'h2-desktop': ['73px', {

          fontWeight: '700',
          lineHeight: '87.6px'
        }
        ],
        'h2-mobile': ['40px', {

          fontWeight: '500',
          lineHeight: '48px'
        }
        ],
        'h3-desktop': ['59px', {

          fontWeight: '700',
          lineHeight: '70.8px'
        }
        ],
        'h3-mobile': ['36px', {

          fontWeight: '500',
          lineHeight: '43.2px'
        }
        ],
        'h4-desktop': ['47px', {

          fontWeight: '700',
          lineHeight: '56.4px'
        }
        ],
        'h4-mobile': ['28px', {

          fontWeight: '500',
          lineHeight: '33.6px'
        }
        ],
        'h5-desktop': ['38px', {

          fontWeight: '700',
          lineHeight: '45.6px'
        }
        ],
        'h5-mobile': ['24px', {

          fontWeight: '500',
          lineHeight: '33.6px'
        }
        ],
        'h6-desktop': ['30px', {

          fontWeight: '700',
          lineHeight: '36px'
        }
        ],
        'h6-mobile': ['20px', {

          fontWeight: '500',
          lineHeight: '24px'
        }
        ],
        'large1-desktop': ['28px', {
          fontWeight: '600',
          lineHeight: '39.2px'
        }],

        'large1-mobile': ['20px', {
          fontWeight: '700',
          lineHeight: '28px'
        }],

        'large2-desktop': ['24px', {
          fontWeight: '600',
          lineHeight: '33.6px'
        }],

        'large2-mobile': ['18px', {
          fontWeight: '600',
          lineHeight: '25.2px'
        }],

        'large3-desktop': ['20px', {
          fontWeight: '600',
          lineHeight: '24px'
        }],

        'large3-mobile': ['16px', {
          fontWeight: '600',
          lineHeight: '19.2px'
        }],

        'base-bold-desktop': ['16px', {
          fontWeight: '700',
          lineHeight: '19.2px',
        }],
        'base-bold-mobile': ['14px', {
          fontWeight: '700',
          lineHeight: '16.8px',
        }],
        'base-medium-desktop': ['16px', {
          fontWeight: '500',
          lineHeight: '19.2px',
        }],
        'base-medium-mobile': ['14px', {
          fontWeight: '500',
          lineHeight: '16.8px',
        }],
        'base-regular-desktop': ['16px', {
          fontWeight: '400',
          lineHeight: '19.2px',
        }],
        'base-regular-mobile': ['14px', {
          fontWeight: '400',
          lineHeight: '16.8px',
        }],
        'small-desktop': ['14px', {
          fontWeight: '400',
          lineHeight: '16.8px',
        }],
        'small-mobile': ['12px', {
          fontWeight: '400',
          lineHeight: '14.4px',
        }],
        'xmall-desktop': ['10px', {
          fontWeight: '400',
          lineHeight: '12px',
        }],
        'xmall-mobile': ['10px', {
          fontWeight: '400',
          lineHeight: '12px',
        }],
      },
      fontWeight: {
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
      },
      fontFamily: {
        'base': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

