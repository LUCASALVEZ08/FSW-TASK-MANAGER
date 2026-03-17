import PropTypes from "prop-types"

const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant === "unselected") {
      return "text-[#35383E]"
    }
    if (variant === "selected") {
      return "bg-[#E6F7F8] text-[#00ADB5]"
    }
  }

  return (
    <a
      href="#"
      className={`gap flex items-center gap-2 rounded-lg px-6 py-3 ${getVariantClasses()}`}
    >
      {children}
    </a>
  )
}

// Adicione as PropTypes para o ESLint parar de reclamar
SidebarButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["unselected", "selected"]).isRequired,
}

export default SidebarButton
