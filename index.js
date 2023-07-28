import { jobDescription } from "./utils/jobDescription.js";
import { getSkillNames } from "./utils/getSkillNames.js";
import { matchSkillsToJobV1 } from "./functionsToTest/matchSkillsToJobV1.js";
import { matchSkillsToJobV2 } from "./functionsToTest/matchSkillsToJobV2.js";

//const matches = matchSkillsToJobV1(getSkillNames(), jobDescription);
//console.log("matches", matches);

const matches = matchSkillsToJobV2(getSkillNames(), jobDescription);

console.log("matches", matches);
