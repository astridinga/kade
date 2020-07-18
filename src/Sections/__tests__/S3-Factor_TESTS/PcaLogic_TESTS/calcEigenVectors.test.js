import calcEigenVectors from "../../../Factors/PcaLogic/calcEigenVectors";

const parameter1 = 9;
const parameter2 = 8;
const parameter3 = [
  2.38377319,
  2.01532507,
  1.34082863,
  1.12735463,
  0.73223162,
  0.51169237,
  0.40132702,
  0.3195748,
  0.16789266
];
const parameter4 = [
  [
    -0.3115471760229969,
    0.42723866130709676,
    -0.1969857556335256,
    0.2810348546217704,
    -0.4240019706378486,
    0.08020196907306053,
    -0.4347629968786119,
    0.265969265156432,
    0.39579409489168205
  ],
  [
    -0.3243872098107257,
    0.2757851716247267,
    -0.46785372583788276,
    0.31739832316760025,
    0.19744779141643184,
    -0.1568603725804967,
    0.5391393080007015,
    0.21039432652370668,
    -0.3171102332107574
  ],
  [
    0.2510595133555497,
    0.47017067123763984,
    0.22921260207254088,
    0.017583674338963434,
    -0.3778876586245981,
    -0.6066903813028525,
    0.04455696595609605,
    -0.3094964646667285,
    -0.2332710268055186
  ],
  [
    0.2695862649250367,
    0.5106630301696589,
    -0.1475382356732224,
    -0.04066477948748142,
    0.1790938645682228,
    0.5988363253797119,
    -0.2137023706633472,
    -0.2584084962854848,
    -0.3741686103957148
  ],
  [
    -0.3402247356241901,
    -0.4224709437726043,
    -0.24955281461621925,
    0.2895733292292743,
    -0.21861414684114014,
    -0.03330443976758774,
    -0.3198319857200606,
    -0.5208501908674331,
    -0.3703476195818482
  ],
  [
    0.44736709358333365,
    -0.07551616972515687,
    -0.5107747447261589,
    0.15288061329255764,
    -0.11544317654408445,
    0.033496657405254815,
    0.28106876112638973,
    -0.39201912930775135,
    0.512609862006006
  ],
  [
    0.46049232051598676,
    -0.1282645561773949,
    -0.33334302829796303,
    0.15506377177644312,
    0.30384310334302,
    -0.37949896214741813,
    -0.49393939924715985,
    0.3618358765093853,
    -0.15840218800250108
  ],
  [
    -0.365731404382852,
    0.22549083214034285,
    -0.20182397283338344,
    -0.4586943317909678,
    0.48107157267694745,
    -0.3090135860298573,
    -0.21330148352430847,
    -0.3451954260486938,
    0.269600369090764
  ],
  [
    -0.0173446586287953,
    0.08994538870629941,
    0.4393012835226091,
    0.6903944139314557,
    0.47063068535378805,
    -0.023328821733605246,
    -0.0434754654745543,
    -0.2176753591956418,
    0.22509724866359068
  ]
];

const testValue1 = [
  [
    -0.48101241,
    0.60651717,
    -0.22809799,
    0.29839426,
    -0.36282075,
    0.05737061,
    -0.275424,
    0.15035495
  ],
  [
    -0.50083675,
    0.39151055,
    -0.54174727,
    0.33700388,
    0.16895713,
    -0.11220642,
    0.34154678,
    0.11893791
  ],
  [
    0.38762265,
    0.66746437,
    0.2654148,
    0.01866981,
    -0.32336049,
    -0.43398186,
    0.02822701,
    -0.17496128
  ],
  [
    0.41622698,
    0.72494819,
    -0.17084065,
    -0.04317663,
    0.15325158,
    0.42836365,
    -0.13538126,
    -0.14608077
  ],
  [
    -0.52528905,
    -0.59974882,
    -0.28896757,
    0.30746015,
    -0.18706929,
    -0.02382356,
    -0.20261477,
    -0.29444155
  ],
  [
    0.69071121,
    -0.10720437,
    -0.5914473,
    0.16232398,
    -0.09878534,
    0.02396106,
    0.17805812,
    -0.22161213
  ],
  [
    0.71097586,
    -0.18208712,
    -0.38599174,
    0.164642,
    0.26000016,
    -0.27146576,
    -0.31291247,
    0.20454925
  ],
  [
    -0.56467001,
    0.32011162,
    -0.23370036,
    -0.48702769,
    0.41165551,
    -0.22104569,
    -0.13512729,
    -0.19514224
  ],
  [
    -0.02677924,
    0.1276884,
    0.50868521,
    0.73303978,
    0.40272119,
    -0.01668773,
    -0.02754187,
    -0.12305394
  ]
];
const testValue2 = [
  0.22835654,
  1.20663079,
  -0.68241731,
  0.64923424,
  0.17032289,
  -0.13697049,
  -0.10301571,
  -0.16238833
];

test("calculate eigen vectors", () => {
  const value1 = calcEigenVectors(parameter1, parameter2, parameter3, parameter4);
  expect(value1[0]).toEqual(testValue1);
  expect(value1[1]).toEqual(testValue2);
});
