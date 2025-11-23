import { X } from 'lucide-react';
import type { MenuModalProps } from '../../types/menumodal';
import { menuItems } from '../../mocks/menuitems';

export default function MenuModal({
  profileName,
  profileRole,
  profileImage,
  isOpen,
  onClose
}: MenuModalProps) {

  if (!isOpen) return null;

  const handleMenuClick = (href: string) => {
    onClose();
    window.location.href = href; // ou use navigate se preferir
  };

  return (
    <>
      {/* Overlay que cobre toda a tela, incluindo Header e BottomNav */}
      <div
        className="fixed inset-0 bg-black/50 z-[999]"
        aria-hidden="true"
      />

      {/* Modal centralizado */}
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-0 pointer-events-none">
        <div
          className="w-full max-w-full md:max-w-sm bg-gradient-to-b from-orange-500 to-orange-600 rounded-3xl p-8 text-center text-white shadow-2xl max-h-[90vh] overflow-y-auto mx-0 md:mx-auto relative pointer-events-auto"
          style={{ marginBottom: '70px' }}
        >

          {/* Botão fechar */}
          <button
            onClick={onClose} 
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6 stroke-2" />
          </button>

          {/* Perfil */}
          <div className="mb-8 mt-6">
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

          {/* Menu */}
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

        </div>
      </div>
    </>
  );
}
