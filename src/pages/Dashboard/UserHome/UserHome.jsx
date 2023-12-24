import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();

    return (
        <div>
            <h2 className="text-center text-white">Good to see you, {user?.displayName}</h2>
        </div>
    );
};

export default UserHome;