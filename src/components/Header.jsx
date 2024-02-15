

const imgLogo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
const Header = () => {
  return (
    <div className="absolute z-10 px-20 py-5 bg-gradient-to-b from-black">
      <img className="w-44" src={imgLogo} alt="" />
    </div>
  )
}

export default Header 