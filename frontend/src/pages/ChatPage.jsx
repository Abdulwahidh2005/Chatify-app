import { useAuthStore } from "../store/userAuthStore";

const ChatPage = () => {
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="z-10">
      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default ChatPage;
