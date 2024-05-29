function solution(skills, skillTrees) {
  const skillSequence = {};
  let rightTree = 0;

  skills.split('').forEach((skill, index) => (skillSequence[skill] = index));

  for (const skillTree of skillTrees) {
    let checkSkill = 0;

    for (const skill of skillTree) {
      if (skillSequence[skill] === undefined) continue;
      if (checkSkill < skillSequence[skill]) {
        checkSkill = -1;
        break;
      }

      checkSkill += 1;
    }

    if (checkSkill > -1) {
      rightTree += 1;
    }
  }

  return rightTree;
}
