export interface AccountType {
    id: number;
    role: string;
}

export interface Account {
    id: number;
    email: string;
    password: string;
    accountType: AccountType;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    creditScore: number;
    account: Account;
}

interface LoanType {
    id: number;
    loanType: string;
}

interface Status {
    id: number;
    status: string;
}

export interface LoanApplication {
    id: number;
    userId: User;
    loanType: LoanType;
    status: Status;
    interest: number;
    amount: number;
    title: string;
    description: string;
    applicationDate: string;
}
