export interface MenuModalProps {
  profileName: string;
  profileRole: string;
  profileImage?: string;
  isOpen: boolean;
  onClose: () => void;
}
