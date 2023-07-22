import { Channel, connect, Connection, Message } from "amqplib";

export class RabbitServerMQ {
  private channel: Channel;
  private connection: Connection;
  async consumer(queue: string, callback: (message: Message) => void) {
    this.connection = await connect("amqp://localhost");
    this.channel = await this.connection.createChannel();
    return await this.channel.consume(queue, (message: any | null) => {
      callback(message);
      this.channel.ack(message);
    });
  }
}
