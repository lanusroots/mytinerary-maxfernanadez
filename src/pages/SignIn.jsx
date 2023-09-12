import FormSignIn from "../components/FormSignIn"
import backgroundImage from "/img/backgroundLog.jpg"

export default function SignIn() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col items-center justify-center h-full mt-[20px] xl:pt-20">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <FormSignIn />
        </div>
      </div>
    </div>
  )
}
