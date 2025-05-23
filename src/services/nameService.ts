import adjectives from '../data/adjectives.json'
import nouns from '../data/nouns.json'

export function GetName(){
    const adjectivesList = adjectives.adjectives;
    const nounsList = nouns.nouns;

    const adjectivesLength = adjectivesList.length;
    const nounsLength = nounsList.length;

    const adjective = adjectivesList[Math.floor(Math.random() * (adjectivesLength+1))];
    const noun = nounsList[Math.floor(Math.random() * (nounsLength+1))];
    return `${adjective}-${noun}`;
}