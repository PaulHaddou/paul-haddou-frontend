export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./lib/ui/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "4xl": "1921px",
        "3xl": "1700px",
        "16inch": "1440px",
        "13inch": "1280px",
        navbarBreakPoint: "1060px",
      },
      height: {
        navbar: "150px",
      },
      colors: {
        dark: {
          DEFAULT: "#07071c",
          10: "#11111110",
        },
        primary: {
          DEFAULT: "#07071c",
          beige: "#ecddc0",
          200: "#F6CAB2",
        },
        spring: "#5DCD7B",
        blackest: "#000000",
        white: {
          DEFAULT: "#ffffff",
          5: "#FFFFFF0D",
          10: "#FFFFFF1A",
          20: "#FFFFFF33",
          70: "#FFFFFF70",
        },
        gray: {
          DEFAULT: "#f6f6f6",
        },
        states: {
          red: "#d71919",
          "red-10": "#ef080827",
        },
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
      },
      fontSize: {
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        28: "28px",
        30: "30px",
        32: "32px",
        40: "40px",
        48: "48px",
      },
      lineHeight: {
        140: "140%",
        150: "150%",
      },
      fontFamily: {
        primary: ["Cinzel Decorative"],
        secondary: ["Cinzel"],
      },
      backgroundImage: {
        homeBorderSides:
          "linear-gradient(180deg,rgba(255, 255, 255, 0) 1.56%,rgba(255, 255, 255, 0.9) 49.48%,rgba(255, 255, 255, 0) 100%)",
      },
      transitionDelay: {
        main: "700ms",
      },
      zIndex: {
        bg: -1,
        bottomBar: 90,
        navbar: 100,
        sidebar: 105,
      },
      borderRadius: {
        4: "4px",
        8: "8px",
        10: "10px",
        11: "11px",
        16: "16px",
        48: "48px",
      },
      spacing: {
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
        28: "28px",
        30: "30px",
        32: "32px",
        34: "34px",
        40: "40px",
        48: "48px",
        56: "56px",
        64: "64px",
        150: "150px",
        maxW: "1920px",
      },
      boxShadow: {
        //
      },
    },
  },
};
