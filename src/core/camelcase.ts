
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

function capitaliseFirstLetter(word:string) {
    return word.charAt(0).toUpperCase() + word.slice(1)

}

export function camelCase (word:string) {
    return capitaliseFirstLetter(removeSpaces(removeHyphens(removeUnderscores(word))));
}
