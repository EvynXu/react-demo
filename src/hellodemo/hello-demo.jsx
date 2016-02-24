import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const h1Style = {
    fontSize:'50px',
    color:'orange'
}

//class HelloDemo extends Component{

//}
let HelloDemo = React.createClass({
    getDefaultProps(){
        return {
            title:'React Demo'
        }
    },

    getInitialState(){
        return {
            list : [
                {name:'张三'},
                {name:'李四'},
                {name:'王五'},
                {name:'赵六'}
            ]
        }
    },

    handleTap(){
        let that = this;
        let name = that.refs.myInput.value;
        if(name.length>0){
            let s = that.state.list;
            s.push({name:name});
            that.setState({list:s},()=>{
                that.refs.myInput.value = '';
            })
        }
    },

    render(){
        let listDom = [];

        this.state.list.map((item,i)=>{
            listDom.push(<div key={i} className="item">{item.name}</div>);
        });

        return (
            <div>
                <h1 style={h1Style}>{this.props.title}</h1>
                <h2>Hello {this.props.name}</h2>

                <div style={{width:'200px',height:'60px',border:'1px solid red',borderRadius:'5px',padding:'35px 0 0 15px'}}>
                    <input type="text" ref="myInput" />
                    <input type="button" onClick={this.handleTap} value="Add"/>
                </div>

                <div>
                    {listDom}
                </div>
            </div>
        )
    }
})

ReactDOM.render(
    <HelloDemo name={"React"} />,
    document.getElementById("app")
);