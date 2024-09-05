import { ApiProperty, PartialType } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty()
    title: string;
    @ApiProperty({ required: false})
    content?: string;
    @ApiProperty({ required: false})
    published?: boolean
    // @ApiProperty({ required: false})
    authorId: number;
}

export class UpdatePostDto extends PartialType(CreatePostDto) {

}
