import calcSignVector from '../../../Factors/centroidLogic/horst55Logic/calcSignVector';

const parameter1 = [[0,-0.0264432,-0.0004852,0.0128825,0.0170792,-0.0037115,0.0083936,0.0222463,0.0046819],[-0.0264432,0,0.009291,-0.0466627,-0.055239,-0.0007148,-0.0171522,-0.0823968,-0.0178669],[-0.0004852,0.009291,0,-0.009862,-0.0114034,0.0041395,-0.0030831,-0.0077492,0.0010562],[0.0128825,-0.0466627,-0.009862,0,0.0239184,0.0083516,0.0030205,0.0451524,0.0113723],[0.0170792,-0.055239,-0.0114034,0.0239184,0,0.0085656,0.0056758,0.0524008,0.0142414],[-0.0037115,-0.0007148,0.0041395,0.0083516,0.0085656,0,0.0004278,0.0005008,-0.0039253],[0.0083936,-0.0171522,-0.0030831,0.0030205,0.0056758,0.0004278,0,0.0144971,0.0057383],[0.0222463,-0.0823968,-0.0077492,0.0451524,0.0524008,0.0005008,0.0144971,0,0.014998],[0.0046819,-0.0178669,0.0010562,0.0113723,0.0142414,-0.0039253,0.0057383,0.014998,0]]; 
const parameter2 = [0.0346436,-0.2371846,-0.0180962,0.048173,0.0552388,0.0136337,0.0175178,0.0596494,0.0302959];
const parameter3 = [1,-1,1,-1,1,1,-1,-1,-1];

const testValue1 = {"W":[0.0885004,-0.2557666,-0.0366782,0.1612224,0.1885236,0.0067843,0.0579884,0.2399414,0.0639173],"V":[1,-1,-1,1,1,1,1,1,1]};

test("calc Sign Vector", () => {
    const value1 = calcSignVector(parameter1, parameter2, parameter3);
    expect(value1).toEqual(testValue1);
});
