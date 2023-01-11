function removeSpaces(word: string) {
    return word.replace(/\s/g, '');
}

export function camelCase (word:string) {

    return removeSpaces(word);
}
