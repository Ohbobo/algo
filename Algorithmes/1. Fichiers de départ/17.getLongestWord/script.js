function getLongestWord(str) {

    const stringToArray = str.split(' ')

    for(let i = 0; i < stringToArray.length; i++) {
        console.log(stringToArray[i].length)
    }
}


/* ÉNONCÉ 📚 */


/* Trouvez la longueur du mot le plus long dans une phrase et retournez-la. */


/* Tests à passer 🧪 */

console.log(getLongestWord("Du sublime au ridicule il n'y a qu'un pas.")); // 8
