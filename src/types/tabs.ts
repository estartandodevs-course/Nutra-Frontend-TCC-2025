export interface TabsProps {
  activeTab: "progress" | "achievements"
  onTabChange: (tab: "progress" | "achievements") => void
}
