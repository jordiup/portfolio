import styled from 'styled-components'

import Img1 from "../../../assets/imgs/1.jpg";
import Img2 from "../../../assets/imgs/2.jpg";
import Img3 from "../../../assets/imgs/3.jpg";
import Img4 from "../../../assets/imgs/4.jpg";
import Img5 from "../../../assets/imgs/5.jpg";
import Img6 from "../../../assets/imgs/6.jpg";

	export const Item1 = styled.div`
    background-color: orangered;
    background-image: url("../imgs/1.jpg");
    margin: 20px 10px 10px 10px;
    // padding: 20px 0 20px 20px; 
  `
  export const Item2 = styled.div`
    background-color: yellowgreen;
    background-image: url("../imgs/2.jpg");
    margin: 20px 10px 10px 10px;
    // height: 70%;
    // width: 70%;
  `
  export const Item3 = styled.div`
     background-color: blueviolet;
     background-image: url("../imgs/3.jpg");
    // height: 70%;
    // width: 70%;
    margin: 10px 10px 10px 20px;
  `
  export const Item4 = styled.div`
    background-color: palevioletred;
		background-image: url("../imgs/16.jpg");
		background-size: cover !important;
    grid-row: 1/3; 
    grid-column: 2/3;
    width: 100%;

    // &:hover {
    //   transform: rotateY(-180deg);
    // }
  `
  export const Item5 = styled.div`
    background-color: royalblue;
    background-image: url("../imgs/5.jpg");
    margin: 10px 10px 10px 20px;
    // height: 70%;
    // width: 70%;

  `
  export const Item6 = styled.div`
    background-color: goldenrod;
    background-image: url("../imgs/6.jpg");
  `

export const PicContainer = styled.div
	`
  font-weight: 900;
  font-family: sans-serif;

  display: grid;
  grid-template-rows: repeat(2, 150px);
  grid-template-columns: 200px 250px 200px;
  
  font-size: 1.5rem;
  color: white;
  
  // margin: 0 25%;
  
	justify-content: center;	

	p {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0 auto;
	}

	div {
		position: relative;
		background-size: contain;
	}	

	
	`

export const Wrapper = styled.div`
	padding-bottom: 4rem;
	background-image: url('../illustrations/overlay.svg');
	background-size: contain;
	background-position: right top;
	background-repeat: no-repeat;
`

export const IntroWrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`
