import { io } from 'socket.io-client';
import { base } from './api.js';

const socket = io(base, {
  cors: true
});

export default socket;