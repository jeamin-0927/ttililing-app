export interface IdialogueHistory {
    subject: string,
    message: IdialogueMessage[]
}

export interface IdialogueMessage {
    index: number,
    role: string,
    message: string,
    recommend: string
}