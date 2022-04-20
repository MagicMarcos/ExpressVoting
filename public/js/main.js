import { io } from 'https://cdn.socket.io/4.3.2/socket.io.esm.min.js';

const socket = io();
const votingResults = document.querySelectorAll('.votingResults');

// receive from server
socket.on('update', arg => {
  console.log('receiver');
  votingResults.forEach((result, idx) => {
    result.innerText = `${arg.contenders[idx].votes} out of ${arg.totalVotes}`;
  });
});
