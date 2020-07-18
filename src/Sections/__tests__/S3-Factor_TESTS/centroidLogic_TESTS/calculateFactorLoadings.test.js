import calculateFactorLoadings from "../../../Factors/centroidLogic/calculateFactorLoadings";

const parameter1 = [
  [1, 0.5375, 0.20625, 0.225, 0.1, -0.225, -0.31875, 0.2375, 0.05],
  [0.5375, 1, -0.075, 0.0875, 0.175, -0.025, -0.1625, 0.38125, 0.06875],
  [0.20625, -0.075, 1, 0.4, -0.54375, 0.0875, 0.05, -0.09375, 0.1125],
  [0.225, 0.0875, 0.4, 1, -0.5625, 0.275, 0.16875, 0.05625, 0.025],
  [0.1, 0.175, -0.54375, -0.5625, 1, -0.0625, -0.13125, 0.01875, -0.03125],
  [-0.225, -0.025, 0.0875, 0.275, -0.0625, 1, 0.61875, -0.36875, -0.2125],
  [-0.31875, -0.1625, 0.05, 0.16875, -0.13125, 0.61875, 1, -0.2875, -0.03125],
  [0.2375, 0.38125, -0.09375, 0.05625, 0.01875, -0.36875, -0.2875, 1, -0.2125],
  [0.05, 0.06875, 0.1125, 0.025, -0.03125, -0.2125, -0.03125, -0.2125, 1]
];

const testValue1 = [
  [
    -0.2913921,
    -0.38405309,
    0.36818255,
    0.33476604,
    -0.54873003,
    0.47844413,
    0.58270093,
    -0.5156279,
    0.00535119
  ],
  [
    [
      1,
      0.42558996,
      0.31353549,
      0.32254818,
      -0.0598956,
      -0.08558516,
      -0.14895555,
      0.0872501,
      0.05155929
    ],
    [
      0.42558996,
      1,
      0.06640165,
      0.21606793,
      -0.03574146,
      0.15874795,
      0.06128809,
      0.18322151,
      0.07080514
    ],
    [
      0.31353549,
      0.06640165,
      1,
      0.27674499,
      -0.34171718,
      -0.08865478,
      -0.16454031,
      0.0960952,
      0.11052979
    ],
    [
      0.32254818,
      0.21606793,
      0.27674499,
      1,
      -0.37880382,
      0.11483315,
      -0.02631848,
      0.22886471,
      0.0232086
    ],
    [
      -0.0598956,
      -0.03574146,
      -0.34171718,
      -0.37880382,
      1,
      0.20003666,
      0.1884955,
      -0.26419051,
      -0.02831364
    ],
    [
      -0.08558516,
      0.15874795,
      -0.08865478,
      0.11483315,
      0.20003666,
      1,
      0.33996016,
      -0.12205086,
      -0.21506025
    ],
    [
      -0.14895555,
      0.06128809,
      -0.16454031,
      -0.02631848,
      0.1884955,
      0.33996016,
      1,
      0.01295686,
      -0.03436814
    ],
    [
      0.0872501,
      0.18322151,
      0.0960952,
      0.22886471,
      -0.26419051,
      -0.12205086,
      0.01295686,
      1,
      -0.20974078
    ],
    [
      0.05155929,
      0.07080514,
      0.11052979,
      0.0232086,
      -0.02831364,
      -0.21506025,
      -0.03436814,
      -0.20974078,
      1
    ]
  ]
];

test("calculate Factor Loadings", () => {
  const value1 = calculateFactorLoadings(parameter1);
  expect(value1).toEqual(testValue1);
});
