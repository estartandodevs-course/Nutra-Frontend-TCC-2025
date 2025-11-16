import { X } from 'lucide-react';
import { useNavigate } from "react-router-dom";

interface MenuModalProps {
  profileName: string;
  profileRole: string;
  profileImage?: string;
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Início', href: '/' },
  { label: 'Minha Horta', href: '/tree' },
  { label: 'Minhas conquistas', href: '/conquistas' },
  { label: 'Jogos', href: '/' },
  { label: 'Vídeos', href: '/' },
  { label: 'Experimentos', href: '/' },
  { label: 'Meu Progresso', href: '/progress' },
  { label: 'Desáfio diário', href: '/' },
];

export default function MenuModal({
  profileName,
  profileRole,
  profileImage,
  isOpen,
  onClose
}: MenuModalProps) {

  const navigate = useNavigate();

  if (!isOpen) return null;

  const closeAndGoHome = () => {
    onClose();
    navigate("/");
  };

  return (
    <>
      <div
        className="
          fixed inset-y-0 left-0 right-0 
          mx-auto 
          max-w-md     /* Ajuste para o mesmo max-w do Wrapper */
          bg-black/50 
          z-40
        "
        onClick={closeAndGoHome}
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-50 flex items-end md:items-center md:justify-center">
        <div className="w-full md:max-w-sm bg-gradient-to-b from-orange-500 to-orange-600 rounded-3xl rounded-b-2xl p-8 text-center text-white shadow-2xl max-h-[90vh] overflow-y-auto mx-0 md:mx-auto">

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

          <nav className="space-y-6 mb-10">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-lg font-semibold hover:text-orange-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={closeAndGoHome}
            className="mx-auto flex items-center justify-center w-16 h-16 rounded-full border-3 border-white hover:bg-white/20 transition-colors"
          >
            <X className="w-8 h-8 stroke-3" />
          </button>
        </div>
      </div>
    </>
  );
}
