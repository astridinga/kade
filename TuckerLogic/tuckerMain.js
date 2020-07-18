import tuckerMain from "../../../Factors/centroidLogic/tuckerLogic/tuckerMain";

const tuckerData = [
  [1.0, 0.499, 0.394, 0.097, 0.126, 0.085, 0.284, 0.152, 0.232],
  [0.499, 1.0, 0.436, 0.007, 0.023, 0.083, 0.467, 0.235, 0.307],
  [0.394, 0.436, 1.0, 0.292, 0.307, 0.328, 0.291, 0.309, 0.364],
  [0.097, 0.007, 0.292, 1.0, 0.621, 0.51, 0.044, 0.319, 0.213],
  [0.126, 0.023, 0.307, 0.621, 1.0, 0.623, 0.114, 0.376, 0.276],
  [0.085, 0.083, 0.328, 0.51, 0.623, 1.0, 0.086, 0.337, 0.271],
  [0.284, 0.467, 0.291, 0.044, 0.114, 0.086, 1.0, 0.393, 0.431],
  [0.152, 0.235, 0.309, 0.319, 0.376, 0.337, 0.393, 1.0, 0.489],
  [0.232, 0.307, 0.364, 0.213, 0.276, 0.271, 0.431, 0.489, 1.0]
];

const NFAX = 8;
const numQsorts = 9;
const testValue1 = [
  [
    0.46813,
    0.50529,
    0.6241,
    0.5385,
    0.61066,
    0.58239,
    0.50944,
    0.61264,
    0.6073
  ],
  [
    0.40027,
    0.54643,
    0.16845,
    -0.50249,
    -0.53019,
    -0.45822,
    0.36174,
    -0.06082,
    0.11177
  ],
  [
    -0.29626,
    -0.13859,
    -0.21692,
    -0.14713,
    -0.12252,
    -0.11951,
    0.2822,
    0.34397,
    0.32438
  ],
  [
    -0.12572,
    0.11613,
    0.08843,
    -0.11506,
    0.03835,
    0.19177,
    0.11932,
    0.05647,
    0.08736
  ],
  [
    0.07314,
    0.11978,
    -0.12932,
    0.06784,
    0.09222,
    -0.12402,
    0.20776,
    0.04664,
    -0.08268
  ],
  [
    0.03545,
    -0.08863,
    0.11582,
    0.11345,
    0.08036,
    -0.10636,
    -0.07445,
    0.09218,
    0.13945
  ],
  [
    -0.11972,
    0.07657,
    0.09884,
    0.12111,
    -0.11137,
    -0.0877,
    0.03898,
    0.0348,
    -0.02923
  ],
  [
    0.1118,
    0.0946,
    0.01032,
    -0.06536,
    -0.07912,
    -0.0774,
    0.03096,
    -0.02924,
    0.08256
  ]
];
const testValue2 = [1, 0.85883, 0.94125, 0.48294, 0.63494, 0.6444, 0.6316];
const testValue3 = [0.623, 0.292, 0.124, 0.051, 0.037, 0.028, 0.023, 0.021];
const testValue4 = [0.624, 0.547, 0.345, 0.193, 0.207, 0.14, 0.118, 0.109];
const testValue5 = [
  2.8693,
  1.3773,
  0.5099,
  0.1137,
  0.1172,
  0.0848,
  0.0679,
  0.0458
];

test("tucker main", () => {
  const value1 = tuckerMain(NFAX, tuckerData, numQsorts);
  expect(value1.fMatrix).toEqual(testValue1);
  expect(value1.lArray).toEqual(testValue2);
  expect(value1.largestCorrelationArray).toEqual(testValue3);
  expect(value1.largestLoadingArray).toEqual(testValue4);
  expect(value1.eigenvalues).toEqual(testValue5);
});
