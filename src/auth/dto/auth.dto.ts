export class LoginDto {
    email: string;
    password: string
}

class UserData {
    id?: number;
    name?: string;
    email?: string;
    phone?: string
}

export class LoginResponseData {
    access_token?: string;
    user: UserData
}

