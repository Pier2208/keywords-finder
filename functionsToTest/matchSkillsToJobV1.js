export function matchSkillsToJobV1(skills, jobDescription) {
  const matches = [];
  const words = jobDescription.split(" ");
  const cleanupRegex = /[,()!?:.;"*\n ]$/g;
  const isMoreThanOneWordSkillRegex = /\s/g;

  const wordsLen = words.length;
  const skillsLen = skills.length;

  let skillIndex = 0;
  while (skillIndex < skillsLen) {
    let isSkillFound = false;
    let isMultiWordsSkill = false;
    let numWordsInSkill = 2;
    let wordIndex = 0;

    if (isMoreThanOneWordSkillRegex.test(skills[skillIndex])) {
      isMultiWordsSkill = true;
      numWordsInSkill = skills[skillIndex].split(" ").length;
    } else {
      isMultiWordsSkill = false;
    }

    while (!isSkillFound && wordIndex < wordsLen) {
      if (isMultiWordsSkill && wordIndex + (numWordsInSkill - 1) < wordsLen) {
        let w = "";
        for (let i = 0; i < numWordsInSkill; i++) {
          w +=
            words[wordIndex + i].replace(cleanupRegex, "").toLowerCase() + " ";
        }

        if (w.trim() === skills[skillIndex]) {
          matches.push(skills[skillIndex]);
          isSkillFound = true;
        }
      }

      if (
        skills[skillIndex] ===
        words[wordIndex].replace(cleanupRegex, "").toLowerCase()
      ) {
        matches.push(skills[skillIndex]);
        isSkillFound = true;
      }
      wordIndex++;
    }
    skillIndex++;
  }

  return matches;
}
