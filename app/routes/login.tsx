import { useSearchParams, Link } from "@remix-run/react";
import LoginForm from "~/components/login";


export default function Login() {
  const [searchParams] = useSearchParams();
  return (
      <div>
        <Link to={'/'}>Home</Link>
        <LoginForm />
      </div>
  );
}