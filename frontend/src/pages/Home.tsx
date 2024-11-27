import HomeHero from "../components/homeSection/HomeHero"
import HomeSectionOne from "../components/homeSection/HomeSectionOne"
import { HomeSectionTwo } from "../components/homeSection/HomeSectionTwo"


export const Home = () => {
    return (
        <div>
            <HomeHero />
            <HomeSectionOne />
            <HomeSectionTwo />
            {/*   <HomeSectionThree /> */}
        </div>
    )
}
