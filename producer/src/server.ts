import RabbitServerMQ from "./RabbitMQServer";

(async () => {
  const server = new RabbitServerMQ();
  let i = 0;
  setInterval(async () => {
    await server.producer("live_test", JSON.stringify({ id: i++ }));
  }, 1000);
})();
