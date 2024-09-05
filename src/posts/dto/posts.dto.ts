import { PartialType } from "@nestjs/mapped-types";

export class CreatePostDto {
    title: string;
    content?: string;
    published?: boolean
    authorId: number;
}

export class UpdatePostDto extends PartialType(CreatePostDto) {

}
