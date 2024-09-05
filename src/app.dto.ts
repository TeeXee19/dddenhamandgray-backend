import { ApiProperty } from "@nestjs/swagger";

export class UpdateStateDto {
    @ApiProperty({ required: false})
    financialInstitutions?: number;
    @ApiProperty({ required: false})
    beneficiaries?: number;
    @ApiProperty({ required: false})
    amountApproved?: number;
    @ApiProperty({ required: false})
    amountDisbursed?: number;
    @ApiProperty({ required: false})
    businessesFinanced?: number;
    @ApiProperty({ required: false})
    greenTransactions?: number;
    @ApiProperty({ required: false})
    femaleBeneficiaries?: number;
    @ApiProperty({ required: false})
    bankBranchesTransitioned?: number;
    @ApiProperty({ required: false})
    carbonEmissionsSaved?: number;
}

export class UpdateSummaryDto {
    @ApiProperty({ required: false})
    financialInstitutions?: string;
    @ApiProperty({ required: false})
    beneficiaries?: string;
    @ApiProperty({ required: false})
    amountApproved?: string;
    @ApiProperty({ required: false})
    amountDisbursed?: string;
    @ApiProperty({ required: false})
    businessesFinanced?: string;
    @ApiProperty({ required: false})
    greenTransactions?: string;
    @ApiProperty({ required: false})
    femaleBeneficiaries?: string;
    @ApiProperty({ required: false})
    bankBranchesTransitioned?: string;
    @ApiProperty({ required: false})
    carbonEmissionsSaved?: string;
}

