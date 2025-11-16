import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import BottomNav from "../../components/general/BottomNav";
import Wrapper from "../../components/general/Wrapper";
import MenuModal from '../../components/menu/MenuModal';

export default function MenuPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.openModal) {
      setIsMenuOpen(true);

      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <>
      <Wrapper>

        <MenuModal
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          profileName="Luiz Henrique"
          profileRole="Aluno(a)"
          profileImage="/placeholder-user.jpg"
        />
      </Wrapper>

      <BottomNav />
    </>
  );
}
