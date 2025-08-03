import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CodeVerification from "../components/CodeVerification";
import SignUp from "../components/SignUp";
import Role from "../components/Role";

export default function CreateAccount() {
  const [hasSingedUp, setHasSignedUp] = useState(false);
  const [hasVerified, setHasVerified] = useState(false);
  const [roleStepDone, setRoleStepDone] = useState(false);

  const handleSignUp = () => setHasSignedUp(true);
  const handleVerification = () => setHasVerified(true);
  const handleRoleDone = () => setRoleStepDone(true);
  const navigate = useNavigate();
  if (roleStepDone) {
    //set a timer of 5 seconds before navigating to the home page
    setTimeout(() => {
      navigate("/home");
    }, 5000);
  }

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen flex items-center justify-center p-4 font-sans">
      {!hasSingedUp && <SignUp handlesignUp={handleSignUp} />}
      {hasSingedUp && !hasVerified && (
        <CodeVerification handleVerification={handleVerification} />
      )}
      {hasSingedUp && hasVerified && !roleStepDone && (
        <Role onContinue={handleRoleDone} />
      )}
      {roleStepDone && (
        <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Welcome!</h2>
          <p className="text-gray-700 text-lg">
            Your account setup is complete.
          </p>
        </div>
      )}
    </div>
  );
}
