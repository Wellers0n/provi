declare global {
    type Data = {
        UserId: number,
        amountPayd: number,
        amountTaken: number,
        installments: Array<Ments>,
        monthlyInterest: number,
        totalAmountInTaxes: number
    }

    type Ments = {
        dueDate: string,
        formatedValue: string,
        payd: boolean,
        value: number
    }
}

export { }
