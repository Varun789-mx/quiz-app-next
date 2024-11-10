import { IoManager } from './pages/IoManager';
import { UserManager } from './pages/UserManager';

const io = IoManager.getIo();

io.listen(3000);
const userManager = new UserManager();
io.on('connection', (socket) => {
  userManager.addUser(socket);
});
  