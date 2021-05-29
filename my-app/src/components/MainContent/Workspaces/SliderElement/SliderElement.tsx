import styled from 'styled-components'
import mac from '../../../../assets/images/mac.jpg'
import office from '../../../../assets/images/office.jpg'
import { Colors } from '../../../../styledHelpers/Colors'

const SliderBox = styled.div`
    background-color: ${ Colors.white };
    min-width: 25vw;
    height: 20vw;
    position: relative;

    & span {
        font-size: 1em;
    }

    & p {
        color: gray;
        padding: 2%;
        font-size: .9em;
        margin-top: 20%;
    }

    & h2 {
        position: absolute;
        z-index: 2;
        top: 35%;
        right: 10%;
    }

    & > div {
        width: 100%;
        height:40%;
        overflow: hidden;
    }

    & div.slider-avatar {
        position: absolute;
        width: 40%;
        left: 10%;
        top: 20%;
        z-index: 2;
        border: 1.5px solid black;
        border-radius: 10%;
        overflow: hidden;
    }

    & > div img.slider-background {
        width: 100%;
    }

    & img.slider-profile {
        width: 100%;
        height: 100%;
    }
`

export const SliderElement = () => (
    <SliderBox>
        <div>
            <img className="slider-background" src={office} alt="office" />
            <div className="slider-avatar">
                <img className="slider-profile" src={mac} alt="mac" />
            </div>
            <h2>Lorem ipsum</h2>
            
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet, nulla sodales vestibulum rutrum, enim magna lobortis metus, ut luctus turpis nisi eget magna.</p>
    </SliderBox>
)