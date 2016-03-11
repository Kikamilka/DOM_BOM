function InsurancePolicy(type, number, owner, date, premium, reduction) {
    if (number == "" || owner == "" || date == null) {
        throw ("Input data is wrong!");
    }
    this.type = type;
    this.number = number;
    this.owner = owner;
    this.date = date;
    this.premium = premium;
    this.reduction = reduction;
}
