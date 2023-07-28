export function matchSkillsToJobV2(skills, jobDescription) {
  const cache = {};
  const words = jobDescription.split(" ");

  return skills.filter((skill) => {
    const skillLen = skill.split(" ").length;

    if (skillLen > 0) {
      if (!cache[skillLen]) {
        cache[skillLen] = words.map((_, i) =>
          words.slice(i, i + skillLen).join(" ")
        );
        return cache[skillLen].find(
          (words) => words.toLowerCase() === skill.toLowerCase()
        );
      } else {
        return cache[skillLen].find(
          (words) => words.toLowerCase() === skill.toLowerCase()
        );
      }
    } else {
      return words.find((word) => word.toLowerCase() === skill.toLowerCase());
    }
  });
}
