export function capitaliseFirstLetter(word:string) {
    return word.charAt(0).toUpperCase() + word.substring(1, word.length).toLowerCase();
}
export function camelCase (phrase:string) {
    phrase = phrase.split(' ').join('_')
    phrase = phrase.split('-').join('_')
    let words = phrase.split('_')

    return words.map((word) => capitaliseFirstLetter(word)).join('')
}
