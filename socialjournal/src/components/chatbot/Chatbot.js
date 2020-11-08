import React, {Component} from 'react'
import {Launcher} from 'react-chat-window'
import { makeStyles } from '@material-ui/core/styles';
const Cleverbot = require('cleverbot-api-node');
const Clever = new Cleverbot('CC969otQxSonDahyw5ao6hhPmGQ');

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
}));

 
class ChatBot extends Component {
 
  constructor() {
    super();
    this.sendClever = this.sendClever.bind(this);
    this._sendMessage = this._sendMessage.bind(this);
    this.state = {
      messageList: [],
    };
  }
 
  async _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
    console.log(message)
    const response = await this.sendClever(message.data.text);
    console.log(response);
    this._sendMessage(response);
  }

  _sendMessage = (text) => {
    console.log(text)
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      });
    }
  }
 
  sendClever = (message) => {
    const response = Clever.request(message).then(function(response) {
      return response.output;
    }).catch(function(error) {
      console.error(error);
    });
    return Promise.resolve(response)
  }

  render() {
    return (<div>
      <Launcher
        agentProfile={{
          teamName: 'react-chat-window',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </div>)
  }
}

export default ChatBot;
