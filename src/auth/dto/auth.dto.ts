import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
    @ApiProperty()
    email: string;
    @ApiProperty()
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

