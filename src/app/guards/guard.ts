import { CanActivateFn , Router} from "@angular/router";
import { Auth } from "../service/auth";
import { inject} from "@angular/core";

export const authGuard: CanActivateFn = () => {
    const auth = inject(Auth)
    const router = inject(Router)
    if (auth.isLogged())
        return true
    router.navigate(['/auth/signin'])
    return false
}