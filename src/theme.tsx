export type CommonTheme = {
  font: {
    family: string;
    weight: {
      normal: number;
      bold: number;
    };
  };
  colors: {
    blue1: string;
    blue2: string;
    blue3: string;
    blue4: string;
    placeholder: string;
  };
  sizes: {
    maxWidth: number;
  };
};

export const theme: CommonTheme = {
  font: {
    family: `'Spoqa Han Sans Neo', 'sans-serif'`,
    weight: {
      normal: 400,
      bold: 700,
    },
  },
  colors: {
    blue1: "#CAE9FF",
    blue2: "#369EFC",
    blue3: "#007BE9",
    blue4: "#2d3d50",
    placeholder: "#a8afb6",
  },
  sizes: {
    maxWidth: 700,
  },
};
