
import { io } from 'socket.io-client';

const backendUrl = import.meta.env.VITE_API_URL;

export const socket = io(backendUrl || undefined, {
  autoConnect: false,
});
