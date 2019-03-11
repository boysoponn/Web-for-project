import React from 'react';
import styled from 'styled-components'
class Home extends React.Component {

  render() {
return (
  <Text>
  <H1>ProjectCMS</H1>
  <P>create your website</P>
  <a href="https://projectcms.tk/"><Button className='fillRight'>Getting Started</Button></a>
</Text>
);
  }
}

export default Home;


const Text = styled.div`
text-align: center;
color: #000;
padding:10vh 5vw 15vh;
`;

const H1 = styled.h1`
font-size: 7vw;
color: #313030;
font-weight: bolder;
font-family:Roboto;
`;

const P = styled.p`
text-align: center;
color: #313030;
font-size: 1vw;
font-weight: bold;
font-family:Roboto;
`;

const Button = styled.button`
  position: relative;
  width: 15vw;
  font-size: 1vw;
  font-weight: 400;
  font-family:Roboto;
  margin-top: 10vh;
  padding: 1.5vw 0.5vw;
  letter-spacing: 2px;
  color: black;
  border: 3px  solid #313030;
  border-radius: 20px;
  text-transform: uppercase;
  outline: 0;
  overflow:hidden;
  background: white;
  z-index: 1;
  cursor: pointer;
  transition:         0.09s ease-in;
  -o-transition:      0.09s ease-in;
  -ms-transition:     0.09s ease-in;
  -moz-transition:    0.09s ease-in;
  -webkit-transition: 0.09s ease-in;
  .fillRight&{
    :hover {
      color: white;
    }
    :before {
      content: "";
      position: absolute;
      background: #313030;
      bottom: 0;
      left:0 ;
      right: 100%;
      top: 0;
      z-index: -1;
      -webkit-transition: all 0.09s ease-in;

    }
    :hover:before {
      right: 0;
    }
  }
`;