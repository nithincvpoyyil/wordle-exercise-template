import { render, screen } from "@testing-library/react"
import Wordle from "./Wordle"

describe("Wordle component",()=>{
    it("renders Wordle component",()=>{
        render(<Wordle wordle={[{char:"a",isCorrect:true},{char:"b",isCorrect:true},{char:"o",isCorrect:true},{char:"u",isCorrect:true},{char:"t",isCorrect:true}]}/>)
        expect(screen.getByText("a")).toBeInTheDocument();
        expect(screen.getByText("b")).toBeInTheDocument();
        expect(screen.getByText("o")).toBeInTheDocument();
        expect(screen.getByText("u")).toBeInTheDocument();
        expect(screen.getByText("t")).toBeInTheDocument();
    })
})