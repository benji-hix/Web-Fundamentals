// variables needed grouped by category 

// effective raw
var effectiveRaw = 0;
var attackTotal = 0;
var critModifier = 0;


// attack
var attackWeaponRaw = 0;
    var attackWeaponBloatValue = 1.5;
    var attackWeaponBloat = 0;
var attackSkillsFlat = 0;
var attackMiscFlat = 0;
var attackSkillsMultiplier
var attackMiscMultiplier = 0;
var attackConsumables = [0, 25];
var attackConsumablesIndex = 0;
var attackCanteen = [0, 15];
var attackCanteenIndex = 0;
var attackPowercharm = [0, 15];
var attackPowercharmIndex = 0;

// affinity
var affinityTotal = 0;
var affinityDamage = .25;
var affinityWeaponBase = 0;
var affinitySkills = 0;
var affinityMisc = 0;

//motion value + hitzone
var motionValueTotal = 0;
var mvAmmoBase = [34, 56, 81, 34, 130, 30]
    var mvAmmoBaseIndex = 0
/* normal: 0
    spread: 1
    pierce: 2
    sticky: 3
    cluster: 4
    slicing: 5
*/
var mvCritDistance = [1, 1.3];
    var mvCritDistanceIndex = 0
var mvAmmoSkills = [[.1, .2], [.1, .15], [.1, .2]];
    var mvAmmoSkillsIndex = 0
/*
    normal: 0
    spread: 1
    pierce: 2
*/
var mvAmmoCanteen = [1, 1.1];
    var mvAmmoCanteenIndex = 0;


var hitzoneBase = 0;
var hitzoneTender = hitzoneBase + .25(100-hitzoneBase);
// training center cart has hzv of 80 

effectiveRaw = attackWeaponRaw * critModifier * motionValueTotal/100 * hitzoneTender/100;

attackWeaponRaw = attackWeaponBloat / attackWeaponBloatValue;

attackTotal = (attackWeaponRaw + attackConsumables + attackCanteen
+ attackPowercharm + attackSkillsFlat + attackMiscFlat) * attackMiscMultiplier * attackSkillsMultiplier;

critModifier = (affinityDamage * affinityTotal) + 1;
affinityTotal = affinityWeaponBase + affinityMisc + affinitySkills;

motionValueTotal = mvAmmoBase[mvAmmoBaseIndex] * mvCritDistance[mvCritDistanceIndex] * mvAmmoSkills[mvAmmoSkillsIndex] 
    * mvAmmoCanteen[mvAmmoCanteenIndex];

