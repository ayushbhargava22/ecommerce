export class Babyproduct {
    id: number;
    name: string;
    description: string;
    price : number;
    imageUrl : string;
    actualPrice : number;


    constructor(id , name , description = '' , price = 0 , imageUrl = 'data:image/jpeg;base64,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') {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
        this.actualPrice = this.actualPrice
    }
}
