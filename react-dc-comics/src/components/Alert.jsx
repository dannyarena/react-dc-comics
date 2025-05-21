// componente al cui interno riceviamo le props
function Alert ({message, textColor, bgColor, children}) {

    // Meesaggio di default
const defaultMessage = "Si è verificato un errore";

// colori di default
const defaultTextColor = "white";
const defaultBgColor = "red"

// Oggetto con gli stili del box alert
const alertStyle = {
    color: textColor || defaultTextColor,
    backgroundColor: bgColor || defaultBgColor,
    padding: '1rem',
    borderRadius: '8px',
    margin: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
};

