const synonyms = require('./synonyms_downloaded_from_WWWJDIC.js');

const allFilteredSynonyms = {};

Object.keys(synonyms).forEach((kanji) => {
  const rawSynonyms = synonyms[kanji];

  const filteredSynonyms = rawSynonyms.filter((synonym) => {
    const notRadical = synonym.indexOf("radical (no.") === -1;
    const hasNoHTML = synonym.indexOf("HTML") === -1;
    return notRadical && hasNoHTML;
  });

  const synonymsWithoutAmpersands = filteredSynonyms.map((synonym) => {
    const regExp = /&/g;
    return synonym.replace(regExp, 'and');
  });

  allFilteredSynonyms[kanji] = synonymsWithoutAmpersands;
});

console.log(JSON.stringify(allFilteredSynonyms, null, 2));
