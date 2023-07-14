import { Channel, Connection, connect } from "amqplib";

class RabbitServerMQ {
  private connection: Connection;
  private channel: Channel;

  async start() {
    try {
      this.connection = await connect("amqp://localhost");
      this.channel = await this.connection.createChannel();
    } catch (error) {
      throw error;
    }
  }

  async producer(queue: string, message: string): Promise<boolean> {
    return this.channel.sendToQueue(queue, Buffer.from(message));
  }
}

export default RabbitServerMQ;
