
function removeSymbolFrom(symbol:string, words:string) {
    return words.split(symbol).join("");
}
function removeSpaces(word: string) {
    return removeSymbolFrom(' ', word)
}

function removeHyphens(word: string) {
    return removeSymbolFrom('-', word)
}

function removeUnderscores(word: string) {
    return removeSymbolFrom('_', word)
}

export function camelCase (word:string) {
    return removeSpaces(removeHyphens(removeUnderscores(word)));
}
