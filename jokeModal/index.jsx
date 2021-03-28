const { React } = require('powercord/webpack');
const { Button } = require('powercord/components');
const { Modal } = require('powercord/components/modal');
const { close: closeModal } = require('powercord/modal');

module.exports = class JokeModal extends React.PureComponent {
  render () {
    return (
      <Modal className="powercord-text rz-modal-top">
        <h1 className="title">A Chuck Norris fact was found!</h1>
        <Modal.Content>
          <p>{this.props.joke.value}</p>
        </Modal.Content>
        <Modal.Footer>
          <Button onClick={() => closeModal()}>Thanks</Button>
          <a href={`${this.props.joke.url}`} target="_blank">
            <Button
              onClick={() => closeModal()}
              look={Button.Looks.LINK}
              color={Button.Colors.TRANSPARENT}
            >
              Source
            </Button>
          </a>
        </Modal.Footer>
      </Modal>
    );
  }
};
