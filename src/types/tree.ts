export interface HeaderProps {
  level: number
  points: number
}

export interface HealthBarProps {
  label: string
  value: number
  color: string
}

export interface PlantProps {
  health: number
}

export interface PlantContainerProps {
  plantHealth: number
  waterLevel: number
  onWater: () => void
}

export interface ShopItemProps {
  item: {
    id: number
    name: string
    emoji: string
    cost: number
  }
  onBuy: () => void
  isAffordable: boolean
  index: number
}

export interface ShopSectionProps {
  onBuyItem: (cost: number) => void
  points: number
}

