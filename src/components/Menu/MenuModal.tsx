import { X } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import type { MenuModalProps } from '../../types/menumodal';
import { menuItems } from '../../mocks/menuitems';


export default function MenuModal({
  profileName,
  profileRole,
  profileImage,
  isOpen,
  onClose
}: MenuModalProps) {

  const navigate = useNavigate();

  if (!isOpen) return null;

  const closeAndGoDashboard = () => {
    onClose();
    navigate("/dashboard");
  };

  const handleMenuClick = (href: string) => {
    onClose();
    navigate(href);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50"
        onClick={closeAndGoDashboard}
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-50 flex items-end md:items-center md:justify-center">
        <div className="w-full md:max-w-sm bg-gradient-to-b from-orange-500 to-orange-600 rounded-3xl p-8 text-center text-white shadow-2xl max-h-[90vh] overflow-y-auto mx-0 md:mx-auto">

          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden flex-shrink-0 bg-white">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt={profileName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">No image</span>
                  </div>
                )}
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-1">{profileName}</h2>
            <p className="text-orange-100 text-sm">{profileRole}</p>
          </div>

          <nav className="flex flex-col items-center space-y-6 mb-10">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleMenuClick(item.href)}
                className="text-lg font-semibold hover:text-orange-100 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={closeAndGoDashboard}
            className="mx-auto flex items-center justify-center w-16 h-16 rounded-full border-3 border-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-8 h-8 stroke-3" />
          </button>
        </div>
      </div>
    </>
  );
}
