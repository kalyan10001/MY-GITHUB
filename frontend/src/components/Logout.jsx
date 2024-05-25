import { MdLogout } from "react-icons/md";
import { useAuthContext } from "../../context/Auth.Context";
import toast from "react-hot-toast";

const Logout = () => {
	const {authUser,setAuthUser}=useAuthContext();
	const handleLogOut=async()=>{
		try {
			const res=await fetch("/api/auth/logout",{credentials:"include"});
			const data=await res.json();
			console.log(data);
			setAuthUser(null);

		} catch (error) {
			toast.error("error rarey",error.message);
		}
	}
	return (
		<>
			<img
				src={authUser?.avatarUrl}
				className='w-10 h-10 rounded-full border border-gray-800'
			/>

			<div className='cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800'
			onClick={handleLogOut}
			>
				<MdLogout size={22} />
			</div>
		</>
	);
};

export default Logout;