const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Andrew',
            room: 'Node Course'
        },
        {
            id: '2',
            name: 'NJ',
            room: 'React Course'
        },
        {
            id: '3',
            name: 'Mina',
            room: 'Node Course'
        }]
    });

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'Andrew',
            room: 'The Offiec Fans'
        };
        let resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it ('should remove a user', () => {
        let user = users.users[0];
        expect(users.removeUser(user.id)).toEqual(user);
        expect(users.users.length).toBe(2);
    });

    it ('should not remove user', () => {
        let user = {id:'100'};
        expect(users.removeUser(user.id)).not.toEqual(user);
        expect(users.users.length).toBe(3);
    });

    it ('should find user', () => {
        let user = users.users[0];
        expect(users.getUser(user.id).id).toBe('1');
    });

    it ('should not find user', () => {
        expect(users.getUser('4')).toBeFalsy();
    });

    it('should return name for node course', () => {
        let userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Andrew','Mina']);
    });

    it('should return name for react course', () => {
        let userList = users.getUserList('React Course');

        expect(userList).toEqual(['NJ']);
    });
});