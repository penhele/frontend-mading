import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "./login-form";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function LoginPage() {
  return (
    <AuroraBackground>
      <Card className="absolute w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Silahkan login dengan username</CardDescription>
        </CardHeader>

        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </AuroraBackground>
  );
}
