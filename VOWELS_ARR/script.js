const findVowels = str => {
    const vowelsArr = ['а', 'о', 'у', 'э', 'ю', 'я', 'ы', 'е', 'ё', 'и'];
    let counter = 0;
    const myStrArr = str.toLowerCase().split('')

    vowelsArr.forEach(letter => {
        myStrArr.forEach(myLetter => {
            if (myLetter === letter) counter++;
        });
    });

    return counter;
};    