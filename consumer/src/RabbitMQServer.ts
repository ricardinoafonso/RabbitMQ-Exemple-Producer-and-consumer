import { Channel, connect, Connection, Message } from "amqplib";

export class RabbitServerMQ {
  private channel: Channel;
  private connection: Connection;

  async start() {
    try {
      this.connection = await connect("amqp://localhost");
      this.channel = await this.connection.createChannel();
    } catch (error) {
      throw error;
    }
  }

  async consumer (queue: string, callback: (message: Message)=> void) {
    return await this.channel.consume(queue, (message: any | null)=>{
        callback(message)
    })
  }
}
