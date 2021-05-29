import { Subtitle } from '../../common/Subtitle/Subtitle'
import { SliderElement } from './SliderElement/SliderElement'
import { Slider } from './Slider/Slider'

export const Workspaces = () => (
    <div>
        <Subtitle content="Workspaces" />
        <Slider>
            <SliderElement />
            <SliderElement />
            <SliderElement />
            <SliderElement />
        </Slider>
    </div>
)