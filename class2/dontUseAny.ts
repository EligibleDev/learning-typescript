let number;

const getNumber = () => {
    return 5;
};

number = getNumber();
console.log(number);

// now the upper code will not give a error if I return a boolean or a string. because the variable number has the type any.

let developer: string;

const getDeveloper = () => {
    return "mikail";
};

developer = getDeveloper();
console.log(developer);

//now in this code their will be a error if I return other type.

export {};
