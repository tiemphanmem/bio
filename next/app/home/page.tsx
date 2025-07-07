
import HeroBanner from '@/components/HeroBanner';
import FeaturedProducts from './FeaturedProducts';
import AboutSection from './AboutSection'
import ContactForum from './ContactForum'
import CategoryMenu from '@/components/CategoryMenu';
// import ArtSlider from './slide/ArtSlider'
import FullWidthSlider from './slide/FullWidthSlider';
import CertificationAndPartners from './CertificationAndPartners';
import SteelIdentification from './SteelIdentification';

export default function Home() {
  return (
    <>
      {/* <CategoryMenu /> */}
      {/* <HeroBanner /> */}
      <FullWidthSlider />
      <AboutSection />
      <CertificationAndPartners />
      <SteelIdentification />
      <FeaturedProducts />
      <ContactForum />
    </>
  );
}
