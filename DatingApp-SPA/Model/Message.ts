export class Message {

    id: number;
    senderId: number;
    recipientId: number;
    content: string;
    isRead: boolean;
    dateRead: Date;
    messageSent: Date;
    senderDeleted: boolean;
    recipientDeleted: boolean;
    senderName: string;
    recipientName: string;
    senderPhoto: string;
    recipientPhoto: string;
}
