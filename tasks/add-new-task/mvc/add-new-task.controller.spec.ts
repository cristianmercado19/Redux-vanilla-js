import { AddNewTaskCotroller } from './add-new-task.controller';
describe('AddNewTaskCotroller: ', () => {


    it('should be created', () => {
        const taskController = new AddNewTaskCotroller();
        expect(taskController).not.toBeNull();
    });


});
