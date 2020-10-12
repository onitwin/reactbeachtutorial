import React,{Component} from "react"
import Title from "./Title"
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa"

export default class ClassName extends Component{
  state={
    services:[
      {
        icon:<FaCocktail/>,
        title:'free cocktails',
        info:"Lorem ipsum etc etc"
      },
      {
        icon:<FaHiking/>,
        title:'endless hiking',
        info:"Lorem ipsum etc etc"
      },
      {
        icon:<FaShuttleVan/>,
        title:'free shuttle',
        info:"Lorem ipsum etc etc"
      },
      {
        icon:<FaBeer/>,
        title:'strongest beer',
        info:"Lorem ipsum etc etc"
      }
    ]
  }
  render() {
    return(
      <div>
      <Title title="services"/>
      </div>
    )

  }
}
