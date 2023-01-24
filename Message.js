// function generating random message from 3 lists
const message_generator = () => {
    const part_one =["If you are going through hell","Believe in your self!","If you can dream it"];
    const part_two =["look deep inside you","Keep going","Never look back", ];
    const part_three =["And you can find your way out","and you will beat your demons", "you are almost there"];
    return console.log(`${part_one[Math.floor(Math.random()*part_one.length)]} ,${part_two[Math.floor(Math.random()*part_two.length)]} ,${part_three[Math.floor(Math.random()*part_two.length)]}.`);
};
message_generator();