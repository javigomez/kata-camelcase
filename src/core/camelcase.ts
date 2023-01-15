export function capitaliseFirstLetter(word:string) {
    return word.charAt(0).toUpperCase() + word.substring(1, word.length).toLowerCase();
}

function removeSeparators(phrase: string) {
    return phrase.split(/[ _-]/);
}

export function camelCase (phrase:string) {
    let words = removeSeparators(phrase)
    return words.map((word) => capitaliseFirstLetter(word)).join('')
}


