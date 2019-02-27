import convict from 'convict'

// Define a schema
var config = convict({
  helloWorld: {
    doc: "The application Hello World.",
    format: [
      "helloWorld1", "helloWorld2", "helloWorld3"
    ],
    default: "helloWorld1",
    helloWorld: "HELLO_WORLD"
  }
});

// Load environment dependent configuration
// var env = config.get('env');
// config.loadFile('./config/' + env + '.json');

// Perform validation
// config.validate({allowed: 'strict'});

export default config
