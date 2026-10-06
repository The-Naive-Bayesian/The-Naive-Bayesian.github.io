
interface NavButtonProps {
    name: string;
    url: string;
}

const NavButton = ({name, url}: props) => {
  return (
    <a href={url}>
      <button
        type="button"
        className="nav-btn"
      >
        <h3 className='link-button'>{name}</h3>
      </button>
    </a>
  )
}

export default NavButton;
