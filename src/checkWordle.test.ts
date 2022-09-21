import checkWordle from "./checkWorlde"


describe("checkWordle",()=>{
    it("should return empty on no dict keyword",()=>{
        expect(checkWordle("abc","about")).toStrictEqual([])
    })
    it("should retrun correct wordle",()=>{
        expect(checkWordle("about","about")).toStrictEqual([{char:"a",isCorrect:true},{char:"b",isCorrect:true},{char:"o",isCorrect:true},{char:"u",isCorrect:true},{char:"t",isCorrect:true}])
        expect(checkWordle("after","after")).toStrictEqual([{char:"a",isCorrect:true},{char:"f",isCorrect:true},{char:"t",isCorrect:true},{char:"e",isCorrect:true},{char:"r",isCorrect:true}])
    })
    it("should retrun incorrect wordle",()=>{
        expect(checkWordle("after","about")).toStrictEqual([{char:"a",isCorrect:true},{char:"f",isCorrect:false},{char:"t",isCorrect:false},{char:"e",isCorrect:false},{char:"r",isCorrect:false}])
    })
})