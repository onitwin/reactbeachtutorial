import React,{Component} from "react"
import Title from "./Title"
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa"

export default class ClassName extends Component{
  state={
    services:[
      {
        icon:<FaCocktail/>,
        title:'free cocktails',
        info:"Lorem ipsum etc etc Lorem ipsum etc etc Lorem ipsum etc etc"
      },
      {
        icon:<FaHiking/>,
        title:'Endless hiking',
        info:"Lorem ipsum etc etc Lorem ipsum etc etc Lorem ipsum etc etc"
      },
      {
        icon:<FaShuttleVan/>,
        title:'Free shuttle',
        info:"Lorem ipsum etc etc Lorem ipsum etc etc Lorem ipsum etc etc"
      },
      {
        icon:<FaBeer/>,
        title:'Strongest beer',
        info:"Lorem ipsum etc etc Lorem ipsum etc etc Lorem ipsum etc etc"
      }
    ]
  }
  render() {
    return(
      <section className="services">
      <Title title="services"/>
      <div className="services-center">
      {this.state.services.map((item,index)=>{
        return(
          <article key={index} className="service">
          <span>{item.icon}</span>
          <h6>{item.title}</h6>
          <p>{item.info}</p>
          </article>
        )
      })}
      </div>
      </section>
    )

  }
}
