const { Plugin } = require("powercord/entities");
const { get } = require("powercord/http");
const { open } = require("powercord/modal");
const { React } = require("powercord/webpack");
const JokeModal = require("./jokeModal")

module.exports = class ChuckNorrisFacts extends Plugin {
  run = () => get("https://api.chucknorris.io/jokes/random").execute().then((result) => this.showJoke(result.body)).catch((err) => this.warn(err));

  startPlugin () {
    this.loadStylesheet("styles.css");
    this.setupCommand();
    this.run()
  }

  showJoke (joke) {
    powercord.api.notices.sendAnnouncement("chucknorrisfacts", {
      message: "Found a Chuck Norris fact!",
      button: {
        onClick: () => {open(() => React.createElement(JokeModal, {joke}))},
        text: "Show"
      }
    });
  }

  setupCommand () {
    powercord.api.commands.registerCommand({
      command: "chuckfact",
      description: "Displays a Chuck Norris fact",
      usage: "{c}",
      executor: () => this.run()
    });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand("chuckfact");
  }
};
