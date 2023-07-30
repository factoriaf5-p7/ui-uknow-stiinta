import CardHome from '@/components/CardHome';
import React from 'react';
import { Home as HomeIcon} from 'lucide-react'
import { SearchMobile } from '@/components/SearchMobile';
import { BottomNavigation } from '@/components/BottomNavigation';


function Home() {
  return (
    <div>
      <SearchMobile />
      <h2>Bienvenido a la aplicación</h2>
      <CardHome />
      <BottomNavigation />
    </div>
  );
};

export default Home