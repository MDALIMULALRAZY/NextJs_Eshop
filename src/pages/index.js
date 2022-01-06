import Head from "next/head";
import {Fragment} from "react";
import {HomePagesNavData as navContent} from "@data/navbar";
import sliderData from "@data/slider/home-ten.json";
import {SliderFive as Slider} from "@components/slider";
import {HeaderFive as Header} from "@components/header";
import {FooterTwo as Footer} from "@components/footer";
import {CategoriesSeven as Categories} from "@components/categories";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";
import AnimatedSlides from "@components/animatedSlides";
import { PromoBannerOne as PromoBanner} from '@components/promo-banners' 

const HomeTen = () => {
    const logo = "/assets/images/no-placeholder/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Happy & Ambitious </title>
            </Head>

            <Header
                logo={logo}
                navbar={true}
                navData={navContent}
                containerFluid={true}
                logoAlignment="left"
                navbarAlignment="center"
            />
            <ContentWrapper>
                <PromoBanner />
                <Slider
                    dots={true}
                    arrows={true}
                    data={sliderData}
                    className="nomargin"
                    sliderWrapper="slider-style-2"
                />
                <AnimatedSlides/>
                <h2 className="tp-caption1-wd-2" style={{padding:"10px", marginTop:"1em",}}>DECOUVREZ NOS CATEGORIES</h2>
                <Categories/>
            </ContentWrapper>
            <Footer
                logo={logo}
                dark={true}
                newsletter={false}
            />
        </Fragment>
    )
}
export default HomeTen;