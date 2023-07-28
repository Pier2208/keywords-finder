import { skills } from "./skills.js";

export function getSkillNames() {
  return skills
    .reduce((skills, skill) => [...skills, ...skill.names], [])
    .map((skill) => skill.toLowerCase());
}
