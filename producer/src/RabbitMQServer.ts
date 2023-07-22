import { Channel, Connection, connect } from "amqplib";

class RabbitServerMQ {
  private connection: Connection;
  private channel: Channel;
  async producer(queue: string, message: string, options?: {}): Promise<void> {
    this.connection = await connect("amqp://localhost");
    this.channel = await this.connection.createChannel();
    this.channel.sendToQueue(queue, Buffer.from(message), options);
  }
}

export default RabbitServerMQ;
