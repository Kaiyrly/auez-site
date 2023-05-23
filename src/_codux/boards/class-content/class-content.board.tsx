import { createBoard } from '@wixc3/react-board';
import ClassContent from '../../../components/ClassContent';

export default createBoard({
    name: 'ClassContent',
    Board: () => <ClassContent />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768
    }
});
