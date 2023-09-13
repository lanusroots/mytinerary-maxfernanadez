import { Fragment, useState } from "react"
import { Link as Anchor, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import users_actions from "../store/actions/users"
const { signout } = users_actions
//Icons
import { RiFlightTakeoffLine, RiMenu3Fill, RiCloseLine } from "react-icons/ri"

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const mail = useSelector((store) => store.users.user?.mail)
  const user = useSelector((store) => store.users.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let options = [
    { to: "/", title: "Home" },
    { to: "/cities", title: "Cities" },
    { to: "/auth/signin", title: "Login" },
  ];

  const handleSignout = () => {
    dispatch(signout())
    Swal.fire({
      icon: "success",
      title: "Logged out",
    })
    navigate("/")
  };

  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 p-8 xl:px-16 h-[10-vh] z-50">
      <div className="xl:w-1/6 text-center -mt-4">
        <Anchor
          to="/"
          className="font-segoe-ui text-2xl font-bold relative p-1"
        >
          My Tinerary<span className="text-primary text-5xl">.</span>{" "}
          <RiFlightTakeoffLine className="text-primary absolute -left-6 -bottom-6 -z-10 text-5xl" />
        </Anchor>
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center xl:justify-end gap-10 transition-all duration-500 z-50`}
      >
        <span>
          {user && user.photo && (
            <>
              <p className="text-sm mt-2">{user.name}</p>
              <img
                src={user.photo}
                alt="User"
                className="h-[50px] w-[50px] object-cover rounded-full"
              />
            </>
          )}
        </span>
        {/* <Anchor to='/home' className="font-segoe-ui hover:decoration-primary hover:underline underline-offset-4 decoration-4">
                Home
            </Anchor>
            <Anchor to='/cities' className="font-segoe-ui hover:decoration-primary hover:underline underline-offset-4 decoration-4">
                Cities
            </Anchor>
            <Anchor to='auth/signin' className="flex items-center font-bold font-segoe-ui text-white text-lg bg-primary rounded-md px-4 py-2 hover:opacity-80">
                <img src="/user.svg" className="mr-2 h-4 w-4"/> Login
            </Anchor> */}
        {options.map((each) => (
          <Fragment key={each.to}>
            {each.title === "Login" && mail ? (
              <button
                onClick={handleSignout}
                className="flex items-center font-bold font-segoe-ui text-white text-lg bg-primary rounded-md px-4 py-2 hover:opacity-80"
              >
                <img src="/user.svg" className="mr-2 h-4 w-4" />
                SignOut
              </button>
            ) : (
              <Anchor
                to={each.to}
                className={`flex items-center font-bold font-segoe-ui ${
                  each.title === "Login"
                    ? " text-white text-lg bg-primary rounded-md px-4 py-2 hover:opacity-80"
                    : "text-black"
                }`}
              >
                {each.title === "Login" && (
                  <>
                    <img src="/user.svg" className="mr-2 h-4 w-4" />
                  </>
                )}
                {each.title}
              </Anchor>
            )}
          </Fragment>
        ))}
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  )
}
