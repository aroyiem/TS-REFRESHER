let userName = 'Max';
const API_KEY = 'abc';

let userAge = 34;

let isValid = true;
// string, number , boolean

// union type
let userId: string | number = 'abc';
userId = 123;

type StringOrNum = string | number;

type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    id: StringOrNum;
};

let user: User;

user = {
    name: 'Max',
    age: 33,
    isAdmin: true,
    id: 'ABC' // 123
};

// let hobbies: Array<string>;
let hobbies: string[];
hobbies = ['Sport', 'Cooking', 'Reading'];

function add(a: number, b: number): number {
    const result = a + b;
    return result;
}

type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
    calcFn(a, b);
}

calculate(2, 5, add);

interface Credentials {
    password: string;
    email: string;
}

let creds: Credentials;

creds = {
    password: 'abc',
    email: 'test@example.com'
};

class AuthCredentials implements Credentials {
    email: string;
    password: string;
    userName: string;
}

function login(credentials: Credentials) {

}

login(new AuthCredentials());

/*
type Admin = {
    permissions: string[];
};

type AppUser = {
    userName: string;
};

// merged object
type AppAdmin = Admin & AppUser;

let admin : AppAdmin;
admin = {
    permissions: ['login'],
    userName: 'Max'
};*/

interface Admin {
    permissions: string[];
}

interface AppUser {
    userName: string;
}

interface AppAdmin extends Admin, AppUser {

}

let admin: AppAdmin;
admin = {
    permissions: ['login'],
    userName: 'Max'
};

// literal types

type Role = 'admin' | 'user' | 'editor';

let role: Role; // 'admin, 'user', 'editor'

role = 'admin';
role = 'user';
role = 'editor';

// role = 'abc';

function performAction(action: string | number, role: Role) {
    if (role === 'admin' && typeof action === 'string') {
        // ...
    }
}

let roles: Array<Role>;
roles = ['admin', 'editor'];

// generic type

type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
    storage: [],
    add(data) {
        this.storage.push(data);
    }
};

const userStorage: DataStorage<User> = {
    storage: [],
    add(data) {
        this.storage.push(data);
    }
}

function merge<T, U>(a: T, b: U) {
    return {
        ...a,
        ...b
    };
}

const newUser = merge<{ name: string }, { age: number }>(
    {name: 'Max'},
    {age: 33}
);

