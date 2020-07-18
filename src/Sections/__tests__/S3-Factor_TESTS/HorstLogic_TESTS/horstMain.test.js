import horstMain from "../../../Factors/centroidLogic/horst55Logic/horstMain";

//  horstMain = (NFAX, STPCRT, HOLDR, numState)

const NFAX = 7;
const STPCRT = false;
const HOLDR = [
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
const numState = 33;

const NL = 30; // max iterationsq
const P = 0.0001; // iteration threshold

const testValue1 = [
  [
    -0.4133943,
    -0.5102135,
    0.5053612,
    0.3822851,
    -0.6152223,
    0.5530391,
    0.512551,
    -0.5359175,
    0.2387648
  ],
  [
    0.4776108,
    0.5401326,
    0.4404741,
    0.5584199,
    -0.4048066,
    0.2997255,
    0.0747728,
    0.3734018,
    -0.3870535
  ],
  [
    -0.3645791,
    -0.1455137,
    -0.4312683,
    -0.1910319,
    0.3875506,
    0.6249765,
    0.3848749,
    -0.1687701,
    -0.6788629
  ],
  [
    0.3170824,
    0.4821828,
    -0.2308075,
    0.067419,
    0.3661825,
    0.3479879,
    0.181583,
    -0.2696946,
    0.5295711
  ],
  [
    -0.2706538,
    0.2534525,
    0.1990063,
    -0.1855144,
    0.2162075,
    0.0808673,
    0.1218483,
    0.2199166,
    0.2027153
  ],
  [
    0.3342935,
    -0.1265196,
    0.5237578,
    -0.1130418,
    0.3159844,
    0.010716,
    -0.1054482,
    -0.302506,
    -0.0947324
  ],
  [
    0.0846403,
    -0.3013802,
    -0.0296224,
    0.1596084,
    0.1871177,
    0.0021132,
    0.0550185,
    0.2738709,
    0.0571313
  ]
];

test("horst Main", () => {
  const value1 = horstMain(NFAX, STPCRT, HOLDR, numState, NL, P);
  expect(value1.fMatrix).toEqual(testValue1);
});
