const { Plugin } = require("powercord/entities");
const { get } = require("powercord/http");
const { open } = require("powercord/modal");
const { React } = require("powercord/webpack");
const JokeModal = require("./jokeModal")

module.exports = class ChuckNorrisFacts extends Plugin {
  startPlugin () {
    this.loadStylesheet("styles.css")
    get("https://api.chucknorris.io/jokes/random").execute().then((result) => this.showJoke(result.body)).catch((err) => this.warn(err))
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
};
