import {Component} from "react";

class DemoState extends Component {

    constructor() {
        super();
        this.state = {
            num: 0,
            students: [

            ],
            classrooms: [

            ]
        }
    }

    componentDidMount() {
        this.setState({
            num: 7
        })
    }

    componentWillUnmount() {
        // confirm("Bạn xác nhận rời khỏi")
    }


    increment = () => {
         // this.setState({
         //     num: this.state.num + 1,
         // })
        // this.setState({
        //     num: this.state.num + 1,
        // })
        // this.setState({
        //     num: this.state.num + 1,
        // })

        this.setState(temp => {
            return {
                num: temp.num + 1
            }
        })

        this.setState(temp => {
            return {
                num: temp.num + 1
            }
        })
        this.setState(temp => {
            return {
                num: temp.num + 1
            }
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.num}</h1>
                <button onClick={this.increment}>Increment</button>
            </>
        )
    }

}

export default DemoState;

// let a =5;
// let b = 6;
// const sum = () => {
//     console.log(a + b)
// }
//
// function sum (a,b) {
//     return a+b;
// }