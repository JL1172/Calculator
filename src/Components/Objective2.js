import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
display : flex;
flex-direction : column;
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
            height : 28px;  
            border-bottom : 2px solid black;
            text-align : center;
            cursor : pointer;
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
const Second = styled.div`
border : 2px solid black;
div {
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    max-width : 90px;
    display : flex;
    flex-direction  :row;
    div {
        p {
            display :block;
            
        }
        
}
}
img {
    width : 20px;
}
`
const up = "https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/Collaps_accordion-512.png";
const down = "https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/Expand_menu-512.png";

class Objective2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nums: this.props.nums,
            selected: [],
            first: 1,
            outcome: 0,
            resultingFunc: "",
            valueForFunc: "",
            error: false,
            errorForFunction: false,
            history : [],
            visible : false,
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
        this.setState({ ...this.state, selected: [...this.state.selected, num] })
    }

    final = (func, value) => {
        if (this.state.selected.length > 0) {
            let [...array] = this.state.selected;
            let joined = array.join("")
            let numa = +joined
            return this.setState({ ...this.state, errorForFunction : false, resultingFunc: func, valueForFunc: value,
                 selected: [], first: joined, history : [...this.state.history,numa,value] })
        } else {
            this.setState({...this.state, errorForFunction : true})
        }
    }
    enter = () => {
        if (this.state.selected.length === 0 && this.state.resultingFunc.length === 0) {
            this.setState({ ...this.state, error: !this.state.error })
        } else {
            let array = [...this.state.selected]
            let joined = array.join("");
            let numa = +joined;
            let result = this.state.resultingFunc(this.state.first, numa)
            
            this.setState({ ...this.state, outcome: result, error: false, selected: [], valueForFunc: "",history : [...this.state.history,numa,"=",result] })
        }
    }
    clear = () => {
        this.setState({ ...this.state, selected: [], resultingFunc: "", outcome: 0, error: false, errorForFunction: false, valueForFunc: "" })
    }

    render() {
        return (
            <StyledDiv>
                <section>
                    {this.state.error && <span style={{ color: "red" }}>*Must enter input</span>}
                    {this.state.errorForFunction && <span style={{ color: "red" }}>*Must enter number then math sign, press clear to restart</span>}
                    <form >
                        <header>
                            <label>Selected : </label> {<span>{this.state.selected.map(n => n)}</span>}{this.state.valueForFunc}
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
                            <div onClick={() => this.final(this.addNum, "+")}>+</div>
                            <div onClick={() => this.final(this.subNum, "-")} >-</div>
                            <div onClick={() => this.final(this.multiplyNum, "*")} >*</div>
                            <div onClick={() => this.final(this.divideNum, "/")} >/</div>
                            <div onClick={() => this.final(this.sqrNum, "squared")} >x^y</div>
                            <div onClick={() => this.final(this.sqrRootNum, "sqrt")} >Sqrt</div>
                        </article>
                    </div>
                    <button disabled={this.state.error || this.state.errorForFunction} onClick={this.enter}>enter</button>
                    <button onClick={this.clear}>clear</button>
                </section>
                <Second>
                    <div>
                        History : 
                        <select>
                        {this.state.history.map((n,i)=> {
                            return <option style = {i % 2 !== 0 ? {color : 'royalblue'} : {color : "black"}} key = {i}>{n}</option>
                        })}</select>
                    </div>
                </Second>
            </StyledDiv>
        )
    }
}


export default Objective2