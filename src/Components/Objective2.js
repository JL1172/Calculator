import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
display : flex;
flex-direction : row;
height : 100vh;
justify-content : center;
align-items : center;
form {
    border : 2px solid black;
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    height : 20vh;
    header {
        display : flex;
    }
}
section {
    border : 2px solid black;
    display : flex;
    flex-direction  :column;
    height : 35%;
    width : 20%;
    main:nth-of-type(1) {
        display : flex;
        border : 2px solid blue;
        flex-wrap : wrap;
        width : 88.3%;
        justify-content  :space-between;
    }
    input {
        flex-basis : 100px;
        flex-grow : 2;
        display : flex;
        justify-content : center;
        background-color : grey;
        color : white;
    }
    div:nth-of-type(even) {
        background-color : lightslategray;
    }
    main:nth-child(1) 
    div:nth-of-type(1) {
        border : none;
        display : flex;
        justify-content : center; 
    }
    article{
        border : 2px solid black;
        width : 35px;
        display : flex;
        flex-direction : column;
        flex-basis : 20px;
        flex-grow : 2;
        div {
            margin-top : .5rem;
            height : 28px;  
            border-bottom : 2px solid black;
            text-align : center;
            &:active {
                background-color : royalblue;
            }
        }
        div:nth-of-type(1) {
            padding-left : .8rem;
        }
    }
    div:nth-of-type(1) {
        display : flex;
        height : fit-content;
        justify-content : space-between;
        flex-wrap : wrap;
    }
    button {
        height : 20%;
    }
}
`

class Objective2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nums: this.props.nums,
            selected:[],
            first : 1,
            outcome: 0,
            resultingFunc: "",
            valueForFunc : "",
            error: false,
            errorForFunction : false,
        }
    }
    addNum = (integer, integer2) => {
        
        let sum = +integer + +integer2;
        return sum;
    }
    subNum = (integer, integer2) => {
        return +integer - +integer2;
    }
    divideNum = (integer, integer2) => {
        return +integer / +integer2;
    }
    multiplyNum = (integer, integer2) => {
        return +integer * +integer2;
    }
    sqrNum = (integer, integer2) => {
        let num = +integer;
        return num ** +integer2;
    }
    sqrRootNum = (integer, integer2) => {
        return Math.pow(+integer, 1 / +integer2)
    }
    select = (num) => {
             this.setState({ ...this.state, selected: [...this.state.selected, num]})
        }

    final = (func,value) => {
                let [...array] = this.state.selected;
                let joined = array.join("")
                let numa = +joined
              this.setState({ ...this.state, resultingFunc: func, valueForFunc : value,selected : [], first : joined}) }
    enter = () => {
        if (this.state.selected.length === 0 && this.state.resultingFunc.length === 0) {
            this.setState({ ...this.state, error: !this.state.error })
        } else {
            let array = [...this.state.selected]
            let joined = array.join("");
            let numa = +joined; 
            let result = this.state.resultingFunc(this.state.first, numa)
            this.setState({ ...this.state, outcome: result, error : false, selected : [],valueForFunc : ""})
        }
    }
    clear = () => {
        this.setState({ ...this.state, selected: [], resultingFunc: "", outcome: 0,error : false, errorForFunction : false,valueForFunc : ""})
    }

    render() {
        return (
            <StyledDiv>
                <section>
                    {this.state.error && <span style={{ color: "red" }}>*Must enter input</span>}
                    {this.state.errorForFunction && <span style={{ color: "red" }}>*Must enter number then math sign</span>}
                    <form >
                        <header>
                    <label>Selected : </label> {<span>{this.state.selected.map(n=> n)}</span>}{this.state.valueForFunc}
                        </header>
                        <header>
                    <label>Output : </label><span>{this.state.outcome}</span>
                        </header>
                    </form>
                    <div>
                        <main>
                            {this.state.nums.map((n, i) => {
                                return <input type="button" key={i} value={n.number} id={i} onClick={() => this.select(n.number)} />
                            })}
                        </main>
                        <article>
                            <div onClick={() => this.final(this.addNum,"+")}>+</div>
                            <div onClick={() => this.final(this.subNum,"-")} >-</div>
                            <div onClick={() => this.final(this.multiplyNum,"*")} >*</div>
                            <div onClick={() => this.final(this.divideNum,"/")} >/</div>
                            <div onClick={() => this.final(this.sqrNum,"squared")} >x^y</div>
                            <div onClick={() => this.final(this.sqrRootNum,"sqrt")} >Sqrt</div>
                        </article>
                    </div>
                    <button disabled = {this.state.error || this.state.errorForFunction} onClick={this.enter}>enter</button>
                    <button onClick={this.clear}>clear</button>
                </section>
            </StyledDiv>
        )
    }
}


export default Objective2