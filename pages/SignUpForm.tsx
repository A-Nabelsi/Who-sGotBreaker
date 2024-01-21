import '../styles/tailwind.css';
import Link from 'next/link';

const SignupForm = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form className="space-y-6" action="#">
                    <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1" placeholder="Email" />
                    <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1" placeholder="Full Name" />
                    <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1" placeholder="Password" />
                    <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Sign Up</button>
                </form>
                <div className="text-center">
    <p>Already Have an Account?</p>
    <Link href="/" className="text-blue-600 hover:underline">
        Login
    </Link>
</div>
            </div>
        </div>
    );
};
export default SignupForm;
