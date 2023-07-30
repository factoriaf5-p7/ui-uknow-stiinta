import CardHome from '@/components/CardHome';

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
}

export default Home