function removeSpaces(word: string) {
    return word.split(" ").join("");
}

function removeHyphens(word: string) {
    return word.split("-").join("");
}

function removeUnderscores(word: string) {
    return word.split("_").join("");
}

export function camelCase (word:string) {
    return removeSpaces(removeHyphens(removeUnderscores(word)));
}
