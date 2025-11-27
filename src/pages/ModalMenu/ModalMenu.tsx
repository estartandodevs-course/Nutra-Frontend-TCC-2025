import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BottomNav from "../../components/General/BottomNav";
import Wrapper from "../../components/General/Wrapper";
import MenuModal from "../../components/Menu/MenuModal";
import type { User } from "../../types/hooks";

export default function MenuPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.openModal) {
      setIsMenuOpen(true);
      window.history.replaceState({}, document.title);
    }

    const savedUser = localStorage.getItem("loggedUser");
    if (savedUser) {
      try {
        const parsedUser: User = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch {
        setUser(null);
      }
    }
  }, [location.state]);

  return (
    <>
      <Wrapper>
        <div className="relative z-50 px-4 pb-20 pt-6 md:px-0 md:pb-10 md:pt-16">
          <MenuModal
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            userName={user?.name}
            userRole={user?.role}
          />
        </div>
      </Wrapper>

      <BottomNav />
    </>
  );
}
