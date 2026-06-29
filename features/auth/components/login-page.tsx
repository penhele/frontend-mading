import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "./login-form";

export default function LoginPage() {
  return (
    <div className="relative">
      <Card className="absolute w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Silahkan login dengan username</CardDescription>
        </CardHeader>

        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
