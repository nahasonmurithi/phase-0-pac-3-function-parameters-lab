function say (introduction, name) {
    console.log(`${introduction}, ${name}.`);
}
console.log(say("Hi, my name is", "${name}"))
function introductionWithLanguage (name, language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}`);
}
function introductionWithLanguageOptional (name, language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}`);
    return introductionWithLanguageOptional (language = "JavaScript")
}