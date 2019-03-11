import React from 'react';
import _ from 'lodash';
import IN from './template/IN'
import {Helmet} from "react-helmet";
import { Preloader, Placeholder } from 'react-preloading-screen';
import styled from 'styled-components'
class master extends React.Component {
    constructor(props){  
      super(props);
        this.state = {
          hero:'none',
          carousel:'none',
          gallery:'none',
          menubar:'none',
          footer:'none',
          font:[],
          footerItem:[],
          footerSocial:[],
          carouselContent:[],
          menubarItem:[],
          galleryContent:[],
          };   
      }
componentDidMount() {
  let project = this.props.project;
  let global = this.props.global;
  if(project !== null){
    this.setState({
      //Copy มาจาก project ใน CMS ได้เลย
      hero:project.hero,
      carousel:project.carousel,
      gallery:project.gallery,
      menubar:project.menubar,
      footer:project.footer,
      heroYoutubeID:project.heroContent.youtubeID,
      herobackgroundColor:project.heroContent.backgroundColor,
      heroBackgroundImage:project.heroContent.image,
      heroTitle:project.heroContent.title,
      heroTitleAnimate:project.heroContent.titleAnimate,
      heroTitleDuration:project.heroContent.titleDuration,
      heroTitleFontFamily:project.heroContent.titleFontFamily,
      heroTitleFontSize:project.heroContent.titleFontSize,
      heroTitleFontWeight:project.heroContent.titleFontWeight,
      heroTitleFontStyle:project.heroContent.titleFontStyle,
      heroTitleStatus:project.heroContent.titleStatus,
      heroTitleColor:project.heroContent.titleColor,
      heroTitlePosition:project.heroContent.titlePosition,

      heroDescription:project.heroContent.description,
      heroDescriptionAnimate:project.heroContent.descriptionAnimate,
      heroDescriptionDuration:project.heroContent.descriptionDuration,
      heroDescriptionFontFamily:project.heroContent.descriptionFontFamily,
      heroDescriptionFontSize:project.heroContent.descriptionFontSize,
      heroDescriptionFontWeight:project.heroContent.descriptionFontWeight,
      heroDescriptionFontStyle:project.heroContent.descriptionFontStyle,
      heroDescriptionStatus:project.heroContent.descriptionStatus,
      heroDescriptionColor:project.heroContent.descriptionColor,
      heroDescriptionPosition:project.heroContent.descriptionPosition,

      heroButton:project.heroContent.button,
      heroButtonPosition:project.heroContent.buttonPosition,
      heroButtonSelected:project.heroContent.buttonSelected,
      heroButtonAnimate:project.heroContent.buttonAnimate,
      heroButtonDuration:project.heroContent.buttonDuration,
      heroButtonFontFamily:project.heroContent.buttonFontFamily,
      heroButtonFontSize:project.heroContent.buttonFontSize,
      heroButtonFontWeight:project.heroContent.buttonFontWeight,
      heroButtonFontStyle:project.heroContent.buttonFontStyle,
      heroButtonStatus:project.heroContent.buttonStatus,
      heroButtonColor:project.heroContent.buttonColor,
      heroButtonSwapColor:project.heroContent.buttonSwapColor,
      heroButtonSwap:project.heroContent.buttonSwap,
      heroButtonLink:project.heroContent.buttonLink,
      heroButtonLinkTarget:project.heroContent.buttonLinkTarget,
      heroButtonRadius:project.heroContent.buttonRadius,
      heroButtonBGColor:project.heroContent.buttonBGColor,
      heroButtonHBGColor:project.heroContent.buttonHBGColor,
      heroButtonBDColor:project.heroContent.buttonBDColor,
      heroButtonHBDColor:project.heroContent.buttonHBDColor,
      heroButtonHoverColor:project.heroContent.buttonHoverColor,

      carouselBackgroundColor:project.carouselMain.backgroundColor,
      carouselSpeed:project.carouselSetting.speed,
      carouselPauseOnHover:project.carouselSetting.pauseOnHover,
      carouselDots:project.carouselSetting.dots,
      carouselAutoplay:project.carouselSetting.autoplay,
      carouselVertical:project.carouselSetting.vertical,
      carouselTitle:project.carouselMain.title,
      carouselTitlePosition:project.carouselMain.titlePosition,

      carouselDescriptionPosition:project.carouselMain.descriptionPosition,
      carouselDescription:project.carouselMain.description,
      carouselTitleAnimate:project.carouselMain.titleAnimate,
      carouselTitleDuration:project.carouselMain.titleDuration,
      carouselTitleFontFamily:project.carouselMain.titleFontFamily,
      carouselTitleFontSize:project.carouselMain.titleFontSize,
      carouselTitleFontWeight:project.carouselMain.titleFontWeight,
      carouselTitleFontStyle:project.carouselMain.titleFontStyle,
      carouselTitleStatus:project.carouselMain.titleStatus,
      carouselTitleColor:project.carouselMain.titleColor,
      carouselDescriptionAnimate:project.carouselMain.descriptionAnimate,
      carouselDescriptionDuration:project.carouselMain.descriptionDuration,
      carouselDescriptionFontFamily:project.carouselMain.descriptionFontFamily,
      carouselDescriptionFontSize:project.carouselMain.descriptionFontSize,
      carouselDescriptionFontWeight:project.carouselMain.descriptionFontWeight,
      carouselDescriptionFontStyle:project.carouselMain.descriptionFontStyle,
      carouselDescriptionStatus:project.carouselMain.descriptionStatus,
      carouselDescriptionColor:project.carouselMain.descriptionColor,

      galleryBackgroundColor:project.galleryContent.backgroundColor,
      galleryTitle:project.galleryContent.title,
      galleryTitlePosition:project.galleryContent.titlePosition,
      galleryTitleAnimate:project.galleryContent.titleAnimate,
      galleryTitleDuration:project.galleryContent.titleDuration,
      galleryTitleFontFamily:project.galleryContent.titleFontFamily,
      galleryTitleFontSize:project.galleryContent.titleFontSize,
      galleryTitleFontWeight:project.galleryContent.titleFontWeight,
      galleryTitleFontStyle:project.galleryContent.titleFontStyle,
      galleryTitleStatus:project.galleryContent.titleStatus,
      galleryTitleColor:project.galleryContent.titleColor,

      galleryDescription:project.galleryContent.description,
      galleryDescriptionPosition:project.galleryContent.descriptionPosition,
      galleryDescriptionAnimate:project.galleryContent.descriptionAnimate,
      galleryDescriptionDuration:project.galleryContent.descriptionDuration,
      galleryDescriptionFontFamily:project.galleryContent.descriptionFontFamily,
      galleryDescriptionFontSize:project.galleryContent.descriptionFontSize,
      galleryDescriptionFontWeight:project.galleryContent.descriptionFontWeight,
      galleryDescriptionFontStyle:project.galleryContent.descriptionFontStyle,
      galleryDescriptionStatus:project.galleryContent.descriptionStatus,
      galleryDescriptionColor:project.galleryContent.descriptionColor,
    })} 
  if(global !== null){
    this.setState({
      menubarLogo:global.menubarLogo.image ,
      menubarbackgroundColor:global.menubarSetting.menubarbackgroundColor,
      footerTitle:global.footerContent.title,
      footerDescription:global.footerContent.description,
      footerPosition:global.footerContent.position,
      footerbackgroundColor:global.footerContent.backgroundColor,
      footerTitleAnimate:global.footerContent.titleAnimate,
      footerTitleDuration:global.footerContent.titleDuration,
      footerTitleFontFamily:global.footerContent.titleFontFamily,
      footerTitleFontSize:global.footerContent.titleFontSize,
      footerTitleFontWeight:global.footerContent.titleFontWeight,
      footerTitleFontStyle:global.footerContent.titleFontStyle,
      footerTitleStatus:global.footerContent.titleStatus,
      footerTitleColor:global.footerContent.titleColor,
      footerDescriptionAnimate:global.footerContent.descriptionAnimate,
      footerDescriptionDuration:global.footerContent.descriptionDuration,
      footerDescriptionFontFamily:global.footerContent.descriptionFontFamily,
      footerDescriptionFontSize:global.footerContent.descriptionFontSize,
      footerDescriptionFontWeight:global.footerContent.descriptionFontWeight,
      footerDescriptionFontStyle:global.footerContent.descriptionFontStyle,
      footerDescriptionStatus:global.footerContent.descriptionStatus,
      footerDescriptionColor:global.footerContent.descriptionColor,
    })} 
  const carouselContent = _.keys(project.carouselContent).reduce((prev, cur) => {prev.push({_key: cur,...project.carouselContent[cur],});return prev;}, []); 
  this.setState({carouselContent:carouselContent});    
  const galleryContent = _.keys(project.galleryItem).reduce((prev, cur) => {prev.push({_key: cur,...project.galleryItem[cur],});return prev;}, []); 
  this.setState({galleryContent:galleryContent}); 
  const font = _.keys(global.font).reduce((prev, cur) => {prev.push({_key: cur,...global.font[cur],});return prev;}, []); 
  this.setState({font:font});    
  const footerItem = _.keys(global.footerItem).reduce((prev, cur) => {prev.push({_key: cur,...global.footerItem[cur],});return prev;}, []); 
  this.setState({footerItem:footerItem});   
  const footerSocial = _.keys(global.footerSocial).reduce((prev, cur) => {prev.push({_key: cur,...global.footerSocial[cur],});return prev;}, []); 
  this.setState({footerSocial:footerSocial});    
  const menubarItem = _.keys(global.menubarItem).reduce((prev, cur) => {prev.push({_key: cur,...global.menubarItem[cur],});return prev;}, []); 
  this.setState({menubarItem:menubarItem});  
}
  render() {
    return (
      <Preloader>
        <div>  
      <Helmet>
      {this.state.font.map((font => (
        font.font ==='none'?null:
      <link rel="stylesheet" key={font._key} href={"https://fonts.googleapis.com/css?family="+font.font}/>
      )))}
      </Helmet>  
        <IN
        //Copy มาจาก Tab ใน CMS ได้เลย
        Hero={this.state.hero} 
        Carousel={this.state.carousel} 
        Gallery={this.state.gallery} 
        Menubar={this.state.menubar} 
        Footer={this.state.footer} 
        {...this.state}
        />
        </div>
      <Placeholder>
      <Preload><Span>Loading...</Span></Preload>
      </Placeholder>
  </Preloader>
    );
  }
}

export default master;

const Preload = styled.div`
background-color:#f8f8f8;
height:100vh;
width:100vw;
`;

const Span = styled.span`
display:flex;
justify-content: center;
align-items: center;
height:100%;
`;