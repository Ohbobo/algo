function getVowelsNumber(txt) {
    const req =  txt.split('');
    const newArray = [];
    for(let i = 0; i < req.length; i++) {
         const vowels = req[i].match(/[aeiou]/gi);
         if(vowels !== null) {
             newArray.push(vowels);
         }
    }
    return newArray.length;
}


/* ÉNONCÉ 📚 */


/* Créez un programme qui retourne le nombre de voyelles dans une chaîne de caractères. */


/* Tests à passer 🧪 */

console.log(getVowelsNumber("jdhqgdqsghdakzejamazemlqksd"));               // 5
console.log(getVowelsNumber("Lorem ipsum dolor sit amet consectetur."));   // 13
console.log(getVowelsNumber("L’imagination gouverne le monde."));          // 13
console.log(getVowelsNumber("zzzZZZzz"));                                  // 0