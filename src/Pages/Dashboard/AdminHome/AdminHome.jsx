import useAuth from "../../../Hooks/useAuth/useAuth";


const AdminHome = () => {
    const {user} = useAuth()
    return (
        <div>
           <h1 className="text-3xl font-bold text-zinc-950">Hi,Welcome</h1>
            {user? user?.displayName : 'Back'}
        </div>
    );
};

export default AdminHome;