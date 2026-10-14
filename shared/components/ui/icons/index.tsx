import ChevronDownSvg from "@/shared/assets/icons/chevron-down.svg"
import WhatsappSvg from "@/shared/assets/icons/whatsapp.svg"
import WarningSvg from "@/shared/assets/icons/warning.svg"

const ChevronIcon = () => <ChevronDownSvg />
ChevronIcon.displayName = "ChevronIcon"

const WarningIcon = () => <WarningSvg />
WarningIcon.displayName = "WarningIcon"

const WhatsappIcon = () => <WhatsappSvg />
WhatsappIcon.displayName = "WhatsappIcon"

export const Icons = {
  ChevronIcon,
  WhatsappIcon,
  WarningIcon,
} as const
