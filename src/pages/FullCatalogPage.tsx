import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesCatalog from '../components/ServicesCatalog';
import { assets } from '../config/assets';
import { useLanguage } from '../contexts/LanguageContext';

const FullCatalogPage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full overflow-x-hidden bg-black min-h-screen">
      <div className="relative z-10">
        <Navbar logo={assets.logoNav} siteName={t('navbar.siteName')} />
        
        {/* Services Catalog Section */}
        <div className="pt-20">
          <ServicesCatalog />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default FullCatalogPage; 