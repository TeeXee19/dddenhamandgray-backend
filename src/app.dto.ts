export class UpdateStateDto {
    financialInstitutions?: number;
    beneficiaries?: number;
    amountApproved?: number;
    amountDisbursed?: number;
    businessesFinanced?: number;
    greenTransactions?: number;
    femaleBeneficiaries?: number;
    bankBranchesTransitioned?: number;
    carbonEmissionsSaved?: number;
}

export class UpdateSummaryDto {
    financialInstitutions?: string;
    beneficiaries?: string;
    amountApproved?: string;
    amountDisbursed?: string;
    businessesFinanced?: string;
    greenTransactions?: string;
    femaleBeneficiaries?: string;
    bankBranchesTransitioned?: string;
    carbonEmissionsSaved?: string;
}

