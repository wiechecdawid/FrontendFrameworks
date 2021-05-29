import styled from 'styled-components'
import { Colors } from '../../styledHelpers/Colors'

const Button = styled.button`
    width: 9vw;
    height: 2em;
    border: none;
    background-color: ${ Colors.white };

    &:hover {
        background-color: ${ Colors.grey }
    }
`

const ArrowDown = () => (
    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.756964 0.666748H8.24304C8.91615 0.666748 9.25271 1.44197 8.77775 1.89393L5.03472 5.45573C4.73905 5.73709 4.26095 5.73709 3.96843 5.45573L0.222245 1.89393C-0.252712 1.44197 0.0838466 0.666748 0.756964 0.666748Z" fill="#232C47"/>
    </svg>
)

const Home = () => (
    <svg width="17" height="15" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0002 4.79199L2.89495 12.8214C2.82745 12.8823 2.7412 12.9106 2.66703 12.961V20.6667C2.66703 20.8435 2.73727 21.0131 2.86229 21.1381C2.98731 21.2631 3.15688 21.3334 3.33369 21.3334H8.66692C8.84373 21.3334 9.0133 21.2631 9.13832 21.1381C9.26334 21.0131 9.33358 20.8435 9.33358 20.6667V15.3335C9.33358 15.1567 9.40381 14.9871 9.52884 14.8621C9.65386 14.7371 9.82342 14.6668 10.0002 14.6668H14.0002C14.177 14.6668 14.3465 14.7371 14.4716 14.8621C14.5966 14.9871 14.6668 15.1567 14.6668 15.3335V20.6667C14.6668 20.8435 14.7371 21.0131 14.8621 21.1381C14.9871 21.2631 15.1567 21.3334 15.3335 21.3334H20.6667C20.8435 21.3334 21.0131 21.2631 21.1381 21.1381C21.2631 21.0131 21.3334 20.8435 21.3334 20.6667V12.9627C21.2625 12.9143 21.1784 12.8868 21.1142 12.8293L12.0002 4.79199ZM23.7787 9.84523L13.1148 0.42874C12.8095 0.152787 12.4127 0 12.0012 0C11.5898 0 11.1929 0.152787 10.8877 0.42874L0.221244 9.84523C0.156087 9.90374 0.103096 9.97452 0.0652979 10.0535C0.0274998 10.1325 0.0056353 10.2182 0.000953472 10.3056C-0.00372835 10.3931 0.00886422 10.4806 0.0380118 10.5632C0.0671594 10.6457 0.112291 10.7218 0.170828 10.7869L1.0629 11.7794C1.1214 11.8445 1.19218 11.8975 1.27117 11.9353C1.35016 11.9731 1.43583 11.995 1.52328 11.9997C1.61072 12.0043 1.69823 11.9917 1.78081 11.9626C1.86339 11.9335 1.93941 11.8883 2.00454 11.8298L11.5594 3.4016C11.6812 3.29416 11.838 3.23487 12.0004 3.23487C12.1628 3.23487 12.3196 3.29416 12.4414 3.4016L21.9963 11.8294C22.0614 11.8879 22.1374 11.933 22.22 11.9622C22.3026 11.9913 22.3901 12.0039 22.4775 11.9992C22.565 11.9946 22.6506 11.9727 22.7296 11.9349C22.8086 11.8971 22.8794 11.8441 22.9379 11.7789L23.8296 10.7865C23.9476 10.6549 24.0086 10.4818 23.999 10.3053C23.9895 10.1288 23.9103 9.96333 23.7787 9.84523Z" fill="#878B91"/>
    </svg>
)

export const HomeButton = () => (
    <Button>
        <Home />
        <span>Home</span>
        <ArrowDown />
    </Button>
)