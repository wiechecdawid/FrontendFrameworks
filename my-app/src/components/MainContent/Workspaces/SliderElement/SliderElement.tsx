import styled from 'styled-components'
import mac from '../../../../assets/images/mac.jpg'
import office from '../../../../assets/images/office.jpg'
import { Colors } from '../../../../styledHelpers/Colors'

const SliderBox = styled.div`
    background-color: ${ Colors.white };
    max-width: 25vw;
    height: 20vw;
    position: relative;

    & span {
        font-size: 1em;
    }

    & p {
        font-size: .5em;
        color: gray;
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
            <p>Lorem ipsum</p>
        </div>
    </SliderBox>
)