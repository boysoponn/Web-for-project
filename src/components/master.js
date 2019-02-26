import React from 'react';
import config from '../config';
import _ from 'lodash';
import IN from './template/IN'
import { withRouter } from 'react-router-dom';
import {Helmet} from "react-helmet";

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
          isLoaded: false
          };   
      }
componentDidMount() {
  const pathArray = this.props.location.pathname.split('/');
  let checkProject = config.database().ref('production/'+pathArray[1]+'/');
  checkProject.on('value', async (snapshot) => { 
  const snapshotValue = snapshot.val();
  const app = config.database().ref('project/'+snapshotValue);
  app.on('value', async (snapshot) => { 
    const snapshotValue2 = snapshot.val(); 
    const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {
      prev.push({
        _key: cur,
        ...snapshotValue2[cur]
      });
      return prev;     
    }, []);  
    let row=0; 
      while(row<snapshotArr.length){     
        if(pathArray[2] === snapshotArr[row].pathName){

          const detailInPath = config.database().ref('project/'+snapshotValue+'/'+snapshotArr[row]._key);
          detailInPath.on('value', async (snapshot) => { 
          const snapshotValue = snapshot.val(); 
          let data = _(snapshotValue).value();
          if(data !== null){
            this.setState({
              //Copy มาจาก Data ใน CMS ได้เลย
              hero:data.hero,
              carousel:data.carousel,
              gallery:data.gallery,
              menubar:data.menubar,
              footer:data.footer,
              heroYoutubeID:data.heroContent.youtubeID,
              herobackgroundColor:data.heroContent.backgroundColor,
              heroBackgroundImage:data.heroContent.image,
              heroTitle:data.heroContent.title,
              heroTitleAnimate:data.heroContent.titleAnimate,
              heroTitleDuration:data.heroContent.titleDuration,
              heroTitleFontFamily:data.heroContent.titleFontFamily,
              heroTitleFontSize:data.heroContent.titleFontSize,
              heroTitleFontWeight:data.heroContent.titleFontWeight,
              heroTitleFontStyle:data.heroContent.titleFontStyle,
              heroTitleStatus:data.heroContent.titleStatus,
              heroTitleColor:data.heroContent.titleColor,
              heroTitlePosition:data.heroContent.titlePosition,
    
              heroDescription:data.heroContent.description,
              heroDescriptionAnimate:data.heroContent.descriptionAnimate,
              heroDescriptionDuration:data.heroContent.descriptionDuration,
              heroDescriptionFontFamily:data.heroContent.descriptionFontFamily,
              heroDescriptionFontSize:data.heroContent.descriptionFontSize,
              heroDescriptionFontWeight:data.heroContent.descriptionFontWeight,
              heroDescriptionFontStyle:data.heroContent.descriptionFontStyle,
              heroDescriptionStatus:data.heroContent.descriptionStatus,
              heroDescriptionColor:data.heroContent.descriptionColor,
              heroDescriptionPosition:data.heroContent.descriptionPosition,
    
              heroButton:data.heroContent.button,
              heroButtonPosition:data.heroContent.buttonPosition,
              heroButtonSelected:data.heroContent.buttonSelected,
              heroButtonAnimate:data.heroContent.buttonAnimate,
              heroButtonDuration:data.heroContent.buttonDuration,
              heroButtonFontFamily:data.heroContent.buttonFontFamily,
              heroButtonFontSize:data.heroContent.buttonFontSize,
              heroButtonFontWeight:data.heroContent.buttonFontWeight,
              heroButtonFontStyle:data.heroContent.buttonFontStyle,
              heroButtonStatus:data.heroContent.buttonStatus,
              heroButtonColor:data.heroContent.buttonColor,
              heroButtonSwapColor:data.heroContent.buttonSwapColor,
              heroButtonSwap:data.heroContent.buttonSwap,
              heroButtonLink:data.heroContent.buttonLink,
              heroButtonLinkTarget:data.heroContent.buttonLinkTarget,
              heroButtonRadius:data.heroContent.buttonRadius,
              heroButtonBGColor:data.heroContent.buttonBGColor,
              heroButtonHBGColor:data.heroContent.buttonHBGColor,
              heroButtonBDColor:data.heroContent.buttonBDColor,
              heroButtonHBDColor:data.heroContent.buttonHBDColor,
              heroButtonHoverColor:data.heroContent.buttonHoverColor,
    
              carouselBackgroundColor:data.carouselMain.backgroundColor,
              carouselSpeed:data.carouselSetting.speed,
              carouselPauseOnHover:data.carouselSetting.pauseOnHover,
              carouselDots:data.carouselSetting.dots,
              carouselAutoplay:data.carouselSetting.autoplay,
              carouselVertical:data.carouselSetting.vertical,
              carouselTitle:data.carouselMain.title,
              carouselTitlePosition:data.carouselMain.titlePosition,
    
              carouselDescriptionPosition:data.carouselMain.descriptionPosition,
              carouselDescription:data.carouselMain.description,
              carouselTitleAnimate:data.carouselMain.titleAnimate,
              carouselTitleDuration:data.carouselMain.titleDuration,
              carouselTitleFontFamily:data.carouselMain.titleFontFamily,
              carouselTitleFontSize:data.carouselMain.titleFontSize,
              carouselTitleFontWeight:data.carouselMain.titleFontWeight,
              carouselTitleFontStyle:data.carouselMain.titleFontStyle,
              carouselTitleStatus:data.carouselMain.titleStatus,
              carouselTitleColor:data.carouselMain.titleColor,
              carouselDescriptionAnimate:data.carouselMain.descriptionAnimate,
              carouselDescriptionDuration:data.carouselMain.descriptionDuration,
              carouselDescriptionFontFamily:data.carouselMain.descriptionFontFamily,
              carouselDescriptionFontSize:data.carouselMain.descriptionFontSize,
              carouselDescriptionFontWeight:data.carouselMain.descriptionFontWeight,
              carouselDescriptionFontStyle:data.carouselMain.descriptionFontStyle,
              carouselDescriptionStatus:data.carouselMain.descriptionStatus,
              carouselDescriptionColor:data.carouselMain.descriptionColor,
    
              galleryBackgroundColor:data.galleryContent.backgroundColor,
              galleryTitle:data.galleryContent.title,
              galleryTitlePosition:data.galleryContent.titlePosition,
              galleryTitleAnimate:data.galleryContent.titleAnimate,
              galleryTitleDuration:data.galleryContent.titleDuration,
              galleryTitleFontFamily:data.galleryContent.titleFontFamily,
              galleryTitleFontSize:data.galleryContent.titleFontSize,
              galleryTitleFontWeight:data.galleryContent.titleFontWeight,
              galleryTitleFontStyle:data.galleryContent.titleFontStyle,
              galleryTitleStatus:data.galleryContent.titleStatus,
              galleryTitleColor:data.galleryContent.titleColor,
    
              galleryDescription:data.galleryContent.description,
              galleryDescriptionPosition:data.galleryContent.descriptionPosition,
              galleryDescriptionAnimate:data.galleryContent.descriptionAnimate,
              galleryDescriptionDuration:data.galleryContent.descriptionDuration,
              galleryDescriptionFontFamily:data.galleryContent.descriptionFontFamily,
              galleryDescriptionFontSize:data.galleryContent.descriptionFontSize,
              galleryDescriptionFontWeight:data.galleryContent.descriptionFontWeight,
              galleryDescriptionFontStyle:data.galleryContent.descriptionFontStyle,
              galleryDescriptionStatus:data.galleryContent.descriptionStatus,
              galleryDescriptionColor:data.galleryContent.descriptionColor,
            })} 
          });
        
          let carouselItems = config.database().ref('project/'+snapshotValue+'/'+snapshotArr[row]._key+'/carouselContent');
          carouselItems.on('value', async (snapshot) => { 
            const snapshotValue2 = snapshot.val(); 
            const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev;}, []); 
            this.setState({carouselContent:snapshotArr}); });
        
          let galleryContent = config.database().ref('project/'+snapshotValue+'/'+snapshotArr[row]._key+'/galleryItem');
          galleryContent.on('value', async (snapshot) => { 
            const snapshotValue2 = snapshot.val(); 
            const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev;}, []); 
            this.setState({galleryContent:snapshotArr}); });
        
          let menubarItem = config.database().ref('global/'+snapshotValue+'/menubarItem/');
          menubarItem.on('value', async (snapshot) => { 
            const snapshotValue2 = snapshot.val(); 
            const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev; }, []); 
            this.setState({ menubarItem:snapshotArr});});
        
          let footerItem = config.database().ref('global/'+snapshotValue+'/footerItem/');
          footerItem.on('value', async (snapshot) => { 
            const snapshotValue2 = snapshot.val(); 
            const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev; }, []); 
            this.setState({ footerItem:snapshotArr});});
        
          let footerSocial = config.database().ref('global/'+snapshotValue+'/footerSocial/');
          footerSocial.on('value', async (snapshot) => { 
            const snapshotValue2 = snapshot.val(); 
            const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev; }, []); 
            this.setState({ footerSocial:snapshotArr});});
        
          let font = config.database().ref('global/'+snapshotValue+'/font/');
          font.on('value', async (snapshot) => { 
            const snapshotValue2 = snapshot.val(); 
            const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev; }, []); 
            this.setState({ font:snapshotArr});});

          let global = config.database().ref('global/'+snapshotValue+'/');
          global.on('value', async (snapshot) => { 
            const snapshotValue = snapshot.val(); 
            let data = _(snapshotValue).value();
            if(data !== null){this.setState({menubarLogo:data.menubarLogo.image ,menubarbackgroundColor:data.menubarSetting.menubarbackgroundColor,})}});     
            
          let footerContent = config.database().ref('global/'+snapshotValue+'/footerContent');
            footerContent.on('value', async (snapshot) => { 
            const snapshotValue = snapshot.val(); 
            let data = _(snapshotValue).value();
            if(data !== null){this.setState({
              footerTitle:data.title,
              footerDescription:data.description,
              footerPosition:data.position,
              footerbackgroundColor:data.backgroundColor,
              footerTitleAnimate:data.titleAnimate,
              footerTitleDuration:data.titleDuration,
              footerTitleFontFamily:data.titleFontFamily,
              footerTitleFontSize:data.titleFontSize,
              footerTitleFontWeight:data.titleFontWeight,
              footerTitleFontStyle:data.titleFontStyle,
              footerTitleStatus:data.titleStatus,
              footerTitleColor:data.titleColor,
          
              footerDescriptionAnimate:data.descriptionAnimate,
              footerDescriptionDuration:data.descriptionDuration,
              footerDescriptionFontFamily:data.descriptionFontFamily,
              footerDescriptionFontSize:data.descriptionFontSize,
              footerDescriptionFontWeight:data.descriptionFontWeight,
              footerDescriptionFontStyle:data.descriptionFontStyle,
              footerDescriptionStatus:data.descriptionStatus,
              footerDescriptionColor:data.descriptionColor,
            })}});
          }
        row++;
      } 
    })
  });
}
  render() {

    return (
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
    );
  }
}

export default withRouter(master);
