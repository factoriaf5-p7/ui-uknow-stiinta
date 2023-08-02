import CardHome from '@/components/CardHome';
import { SearchMobile } from '@/components/SearchMobile';
import { BottomNavigation } from '@/components/BottomNavigation';


function Home() {
  return (
    <div>
      <SearchMobile />
      <CardHome />
      <BottomNavigation />
    </div>
  );
}

export default Home