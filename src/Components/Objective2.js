import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
display : flex;
flex-direction : column;
height : 100%;
justify-content : center;
align-items : center;
background-image : linear-gradient(45deg, white, lightgray, lightslategray);
margin-top : 10rem;
form {
    background-color : black;
    border-radius : 5px;
    color : white;
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
    outline : 2px solid lightgray;
    outline : 2px solid black;
    outline-offset : 3px;
    border-radius : 10px;
    display : flex;
    flex-direction  :column;
    height : 40%;
    width : 20rem;
    main:nth-of-type(1) {
        display : flex;
        border : 2px solid lightgray;
        flex-wrap : wrap;
        width : 80%;
        justify-content  :space-between;
    }
    input {
        flex-basis : 100px;
        border: 2px solid lightcyan; 
        flex-grow : 2;
        display : flex;
        justify-content : center;
        background-color : grey;
        color : white;
        &:hover {
            background-color : lightgray;
        }
        &:active {
            border-color : gray;
            color : black; 
        }
    }
    main:nth-child(1) 
    div:nth-of-type(1) {
        border : none;
        display : flex;
        justify-content : center; 
    }
    article{
        border : 2px solid gray;
        width : 35px;
        display : flex;
        flex-direction : column;
        justify-self : center;
        flex-basis : 20px;
        flex-grow : 2;
        div {
            height : 30px;  
            border-bottom : 2px solid gray;
            text-align : center;
            align-items :center;
            justify-content : center;
            background-color : lightgray;
            cursor : pointer;
            &:hover {
                background-color : whitesmoke;
            }
            img {
                justify-content : center;
                align-items : center;
            }
        }
        div:nth-of-type(1) {
            justify-content : center;
            height : 30px;
        }
        div:nth-of-type(odd) {
            background-color : lightgray; 
            &:hover {
                background-color : whitesmoke;
            }
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
        border : 2px solid black;
        border-radius : 5px;
        background-color : whitesmoke;
        color : black;
        font-size : larger;
        &:hover {
            background-color : lightgray;
        }
        &:active {
            color : dodgerblue;
        }
    }
}
`
const Second = styled.div`
position : absolute;
top: 10rem;
transform : translateX(2rem);
display : flex;
div {
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;

    select {
        display : flex;
        border-radius :5px;
        color : white;
        padding : .3rem;
        appearance : none;
        background-color : transparent;

    }
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
        if (integer2 == 0) return "cannot be computed"
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
                    {/* {this.state.error && <span style={{ color: "red" }}>*Must enter input</span>}
                    {this.state.errorForFunction && <span style={{ color: "red" }}>*Must enter number then math sign, press clear to restart</span>} */}
                    <form >
                        <header>
                       
                            <label style={{marginRight : ".5rem"}}>Selected :  {this.state.error && <span style={{ color: "red" }}>*Must enter input</span>}
                    {this.state.errorForFunction && <span style={{ color: "red" }}>*Must enter number then math sign, press clear to restart</span>}
                                 </label > {this.state.valueForFunc}{<span >{this.state.selected.map(n => n)}</span>}
                        </header>
                        <header>
                            <label  style={{marginRight : ".3rem"}} >Output : </label><span>{this.state.outcome}</span>
                        </header>
                    </form>
                    <div>
                        <main>
                            {this.state.nums.map((n, i) => {
                                return <input type="button" key={i} value={n.number} id={i} onClick={() => this.select(n.number)} />
                            })}
                        </main>
                        <article>
                            <div onClick={() => this.final(this.addNum, "+")}><img style = {{width : "20px"}} alt = "mathsign" src = 'https://cdn4.iconfinder.com/data/icons/maths-symbol/128/mathematics-01-512.png'/></div>
                            <div onClick={() => this.final(this.subNum, "-")} ><img  style = {{width : "20px"}} alt = "mathsign" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Minus_symbol.svg/2048px-Minus_symbol.svg.png"/></div>
                            <div onClick={() => this.final(this.multiplyNum, "x")} ><img  style = {{width : "20px"}} alt = "mathsign" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Multiplication_Sign.svg/2048px-Multiplication_Sign.svg.png"/></div>
                            <div onClick={() => this.final(this.divideNum, "/")} ><img style = {{width : "20px"}} alt = "mathsign" src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Division_Sign.svg/318px-Division_Sign.svg.png'/></div>
                            <div onClick={() => this.final(this.sqrNum, "x^y")} ><img style = {{width : "20px"}} alt = "mathsign" src = 'https://cdn.iconscout.com/icon/premium/png-512-thumb/nth-power-8712369-7160710.png?f=avif&w=256'/></div>
                            <div onClick={() => this.final(this.sqrRootNum, "sqrt")} ><img style = {{width : "25px"}} alt = "mathsign" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Root_x.svg/2048px-Root_x.svg.png"/></div>
                        </article>
                    </div>
                    <button disabled={this.state.error || this.state.errorForFunction || !this.state.resultingFunc} onClick={this.enter}>enter</button>
                    <button onClick={this.clear}>clear</button>
                </section>
                <Second>
                    <div>
                        <select>
                            <option>--History--</option>
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