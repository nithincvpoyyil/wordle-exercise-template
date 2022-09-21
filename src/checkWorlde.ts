
let dict:Record<string,string> ={};

["about", "above", "admit", "after", "allow", "adieu", "board", "break", "bring", "build", "carry",
"catch", "cause", "chair", "check", "child", "dream", "drive", "early", "eight", "enjoy", "enter",
"event", "every", "exist", "field", "fight", "final", "first", "floor", "focus", "front", "glass", "green",
"group", "guess", "ruler", "rupee"].map(word=>{
    dict[word]=word;
})


export default function checkWordle(inputWord:string,wordleWord:string){

    const wordleOut:{char:string;isCorrect:boolean}[] =[];

    if(!dict[inputWord]){
        return wordleOut;
    }

    inputWord.split("").map((iChar,index)=>{
        wordleOut.push({char:iChar,isCorrect:iChar==wordleWord[index]});
    })

    return wordleOut
}