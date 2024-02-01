import React from "react";
class List extends React.Component{
    constructor(props){
        super(props)
        // console.log('construtor')
        this.state={
            list:["测试",'开发']
        }
    }
    render(){
        // console.log('render')
        const liList = this.state.list.map((name,index)=>{
            return <li key={index}>{name}</li>
        })
        return <ul>
        {liList}
        </ul>
    }
}
export default List