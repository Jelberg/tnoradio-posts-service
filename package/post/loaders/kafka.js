import kafka from 'kafka-node';
import config from '../config';

const client = new kafka.KafkaClient({kafkaHost: config.kafka_host});

var showConsumer = new kafka.Consumer(client, [ { topic: 'shows' } ]);

showConsumer.on('error', (e) => {
    console.log("Error arrancando consumer");
    console.log(e);
});

var producer = new kafka.Producer(client);


export default {
    showConsumer: showConsumer,
    producer: producer
}
