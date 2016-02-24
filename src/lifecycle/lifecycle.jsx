import React from 'react';
import {render} from 'react-dom';

let Header = React.createClass({
    getDefaultProps(){
        console.log(`%c Header getDefaultProps method`,`color:green`);
        return {
            a: 1
        }
    },

    getInitialState(){
        console.log(`%c Header getInitialState method`,`color:green`);
        return {
            b: 2
        }
    },

    componentWillMount(){
        console.log(`%c Header componentWillMount method`,`color:green`);
    },

    componentDidMount(){
        console.log(`%c Header componentDidMount method`,`color:green`);
    },

    componentWillReceiveProps(){
        console.log(`%c Header componentWillReceiveProps method`,`color:green`);
    },

    shouldComponentUpdate(){
        console.log(`%c Header shouldComponentUpdate method`,`color:green`);
        return true;
    },

    componentWillUpdate(){
        console.log(`%c Header componentWillUpdate method`,`color:green`);
    },

    componentDidUpdate(){
        console.log(`%c Header componentDidUpdate method`,`color:green`);
    },

    componentWillUnmount(){
        console.log(`%c Header componentWillUnmount method`,`color:green`);
    },

    render(){
        console.log(`%c Header render method`,`color:green`);
        return (
            <div style={{width:'100%',height:'48px',lineHeight:'48px',textAlign:'center'}}>
                {this.props.title}
            </div>
        )
    }
})


let Lifecycle = React.createClass({
    getDefaultProps(){
        console.log(`%c Lifecycle getDefaultProps method`,`color:blue`);
        return {
            a: 1
        }
    },

    getInitialState(){
        console.log(`%c Lifecycle getInitialState method`,`color:blue`);
        return {
            title:'Lifecycle'
        }
    },

    componentWillMount(){
        console.log(`%c Lifecycle componentWillMount method`,`color:blue`);
    },

    componentDidMount(){
        console.log(`%c Lifecycle componentDidMount method`,`color:blue`);
    },

    componentWillReceiveProps(){
        console.log(`%c Lifecycle componentWillReceiveProps method`,`color:blue`);
    },

    shouldComponentUpdate(){
        console.log(`%c Lifecycle shouldComponentUpdate method`,`color:blue`);
        return true;
    },

    componentWillUpdate(){
        console.log(`%c Lifecycle componentWillUpdate method`,`color:blue`);
    },

    componentDidUpdate(){
        console.log(`%c Lifecycle componentDidUpdate method`,`color:blue`);
    },

    componentWillUnmount(){
        console.log(`%c Lifecycle componentWillUnmount method`,`color:blue`);
    },

    handleTap(){
        let value = this.refs.myInput.value;

        this.setState({title:value});
    },

    render(){
        console.log(`%c Lifecycle render method`,`color:blue`);

        return (
            <div>
                {
                    this.state.title != '' &&
                    <Header title={this.state.title} />
                }

                <div className="body">
                    <input type="text" placeholder="修改标题" ref="myInput" />
                    <input type="button" onClick={this.handleTap} value="update"/>
                </div>
            </div>
        )
    }
})

render(
    <Lifecycle />,
    document.getElementById("app")
);