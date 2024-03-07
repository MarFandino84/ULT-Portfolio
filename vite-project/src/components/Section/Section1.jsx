import React from 'react'
import { Brack, ImgStyle, ContainerHero,
 Span1, Span2, DownloadCVDiv} from "./Section1Styles"
import { ProfilePicture } from '../data/ProfilePic'
import Flag from "react-flagkit"


const Section1 = () => {
  return (
    <>
<ContainerHero>
   <DownloadCVDiv>
      <p>Download CV</p>
      <a href="Mariano Fandino English.pdf" target='blank'><Flag country="US" /></a> 
      <a href="Mariano Fandino CV Español.pdf" target='blank'><Flag country="ES" /></a> 
      
   </DownloadCVDiv>
  <Span1>Hi, I'm a 
       <Brack> 
           <span>{"<"}</span>
       </Brack> 
  </Span1>
  <Span2>Software Developer
       <Brack> 
          <span>{"/"}</span> 
          <span>{">"}</span>
      </Brack>
  </Span2>
      <ImgStyle src={ProfilePicture} />
     
</ContainerHero>
    </>
  )
}

export default Section1
