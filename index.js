function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (let i = 0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}

function johnJennonFacts(facts) {
  var empty2 = [];
  let i = 0;
  while (facts.length > i) {
    empty2.push(`${facts[i]}!!!`);
    i++;
  }
  return empty2;
}




