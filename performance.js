import { matchSkillsToJobV1 } from "./functionsToTest/matchSkillsToJobV1.js";
import { matchSkillsToJobV2 } from "./functionsToTest/matchSkillsToJobV2.js";
import { getSkillNames } from "./utils/getSkillNames.js";
import { jobDescription } from "./utils/jobDescription.js";

const skills = getSkillNames();

function getPerformance(fn, skills, jobDescription) {
  const times = [];

  for (let i = 0; i < 400; i++) {
    const start = performance.now();
    fn(skills, jobDescription);
    const end = performance.now();
    const time = end - start;
    times.push(time);
  }
  return times.reduce((a, b) => a + b) / times.length;
}

// testing v2
const avg2 = getPerformance(matchSkillsToJobV2, skills, jobDescription);

// testing v1
const avg = getPerformance(matchSkillsToJobV1, skills, jobDescription);

console.log("Average Excecution time over 400 iterations for v1: " + avg);
console.log("Average Excecution time over 400 iterations for v2: " + avg2);
